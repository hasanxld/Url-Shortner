"use client"

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg"
  variant?: "default" | "dots" | "pulse" | "bounce"
}

export function LoadingSpinner({ size = "md", variant = "default" }: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-8 h-8",
    lg: "w-12 h-12",
  }

  if (variant === "dots") {
    return (
      <div className="flex space-x-1">
        <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
        <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
        <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
      </div>
    )
  }

  if (variant === "pulse") {
    return <div className={`${sizeClasses[size]} bg-primary rounded-full animate-pulse`}></div>
  }

  if (variant === "bounce") {
    return <div className={`${sizeClasses[size]} bg-primary rounded-full animate-bounce`}></div>
  }

  return (
    <div
      className={`${sizeClasses[size]} border-2 border-primary border-t-transparent rounded-full animate-spin`}
    ></div>
  )
}
