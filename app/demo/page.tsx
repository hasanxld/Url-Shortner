import { Header } from "@/components/header"
import { TodoManager } from "@/components/todo-manager"
import { AnimatedBackground } from "@/components/animated-background"
import { AnimatedFooter } from "@/components/animated-footer"

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-background">
      <AnimatedBackground />
      <Header />
      <main className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center space-y-8 mb-16">
          <h1 className="font-playfair text-4xl sm:text-6xl font-bold text-balance gradient-text">Project Demo</h1>
          <p className="font-poppins text-lg text-muted-foreground max-w-2xl mx-auto">
            See the advanced animations and effects in action with this interactive todo manager.
          </p>
        </div>
        <TodoManager />
      </main>
      <AnimatedFooter />
    </div>
  )
}
