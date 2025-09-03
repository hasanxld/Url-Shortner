"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Copy, Link2, CheckCircle, ExternalLink, AlertCircle } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { LoadingSpinner } from "./loading-spinner"

export function UrlShortener() {
  const [url, setUrl] = useState("")
  const [shortUrl, setShortUrl] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [urlError, setUrlError] = useState("")
  const { toast } = useToast()

  const validateUrl = (inputUrl: string): boolean => {
    if (!inputUrl.trim()) {
      setUrlError("Please enter a URL")
      return false
    }

    // Add protocol if missing
    let validUrl = inputUrl.trim()
    if (!validUrl.startsWith("http://") && !validUrl.startsWith("https://")) {
      validUrl = "https://" + validUrl
    }

    try {
      const urlObj = new URL(validUrl)

      // Check for valid protocols
      if (!["http:", "https:"].includes(urlObj.protocol)) {
        setUrlError("Please enter a valid HTTP or HTTPS URL")
        return false
      }

      // Check for valid hostname
      if (!urlObj.hostname || urlObj.hostname.length < 3) {
        setUrlError("Please enter a valid domain name")
        return false
      }

      // Check for common invalid patterns
      if (urlObj.hostname === "localhost" || urlObj.hostname.startsWith("127.")) {
        setUrlError("Local URLs cannot be shortened")
        return false
      }

      setUrlError("")
      setUrl(validUrl) // Update with properly formatted URL
      return true
    } catch {
      setUrlError("Please enter a valid URL (e.g., https://example.com)")
      return false
    }
  }

  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputUrl = e.target.value
    setUrl(inputUrl)

    if (inputUrl.trim() && urlError) {
      // Clear error if user starts typing and there was an error
      setUrlError("")
    }
  }

  const shortenUrl = async () => {
    if (!validateUrl(url)) {
      toast({
        title: "Invalid URL",
        description: urlError,
        variant: "destructive",
      })
      return
    }

    setIsLoading(true)
    setIsSuccess(false)

    try {
      const apiUrl = "https://url-shortener-service.p.rapidapi.com/shorten"
      const options = {
        method: "POST",
        headers: {
          "x-rapidapi-key": "c8204dbd31msh2bd2eead71ef37ep1009efjsn215fadac5ac9",
          "x-rapidapi-host": "url-shortener-service.p.rapidapi.com",
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({ url }),
      }

      const response = await fetch(apiUrl, options)
      const result = await response.json()

      if (result.result_url) {
        setShortUrl(result.result_url)
        setIsSuccess(true)
        toast({
          title: "🎉 Success!",
          description: "Your URL has been shortened successfully. Ready to share!",
        })
      } else {
        throw new Error("Failed to shorten URL")
      }
    } catch (error) {
      console.error(error)
      toast({
        title: "❌ Shortening Failed",
        description: "Unable to shorten URL. Please check your connection and try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shortUrl)
      toast({
        title: "📋 Copied!",
        description: "Short URL copied to clipboard. Ready to paste anywhere!",
      })
    } catch (error) {
      toast({
        title: "Copy Failed",
        description: "Unable to copy URL. Please try selecting and copying manually.",
        variant: "destructive",
      })
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-background via-background/95 to-muted/20">
      <Card className="w-full max-w-2xl mx-auto bg-card/50 backdrop-blur border-border/50 shadow-2xl glass hover-lift">
        <CardContent className="p-8">
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <div className="flex items-center justify-center space-x-2">
                <Link2 className="h-6 w-6 text-primary animate-float animate-glow-pulse" />
                <h1 className="font-playfair text-3xl font-bold gradient-text">URL Shortener</h1>
              </div>
              <p className="font-poppins text-muted-foreground">
                Transform long URLs into powerful, trackable short links instantly
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1 space-y-2">
                  <Input
                    type="url"
                    placeholder="Enter your long URL here... (e.g., https://example.com)"
                    value={url}
                    onChange={handleUrlChange}
                    className={`font-mono text-sm bg-background/50 border-border/50 focus:border-primary/50 focus:ring-primary/20 glass hover-glow ${
                      urlError ? "border-destructive/50 focus:border-destructive/50" : ""
                    }`}
                    onKeyPress={(e) => e.key === "Enter" && shortenUrl()}
                  />
                  {urlError && (
                    <div className="flex items-center space-x-2 text-destructive text-sm animate-bounce-in">
                      <AlertCircle className="h-4 w-4" />
                      <span className="font-poppins">{urlError}</span>
                    </div>
                  )}
                </div>
                <Button
                  onClick={shortenUrl}
                  disabled={isLoading || !url.trim() || !!urlError}
                  className="font-poppins bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 animate-pulse-glow hover-lift min-w-[120px]"
                >
                  {isLoading ? (
                    <>
                      <LoadingSpinner size="sm" />
                      <span className="ml-2 loading-dots">Shortening</span>
                    </>
                  ) : (
                    "Shorten URL"
                  )}
                </Button>
              </div>

              {shortUrl && (
                <div className="space-y-3 animate-bounce-in">
                  <div className="flex items-center space-x-2 text-green-600">
                    <CheckCircle className="h-5 w-5 animate-scale-in" />
                    <span className="font-poppins text-sm font-medium">URL shortened successfully!</span>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 p-4 bg-muted/50 border border-border/50 glass animate-slide-up">
                    <div className="flex-1 space-y-2">
                      <label className="font-poppins text-xs font-medium text-muted-foreground uppercase tracking-wide">
                        Short URL
                      </label>
                      <div className="flex items-center space-x-2">
                        <code className="font-mono text-sm text-primary bg-primary/10 px-2 py-1 flex-1 truncate neon-glow">
                          {shortUrl}
                        </code>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={copyToClipboard}
                        className="font-poppins bg-transparent hover-scale"
                      >
                        <Copy className="h-4 w-4 mr-1" />
                        Copy
                      </Button>
                      <Button variant="outline" size="sm" asChild className="font-poppins bg-transparent hover-scale">
                        <a href={shortUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-1" />
                          Visit
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
