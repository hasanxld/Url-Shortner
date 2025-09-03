"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Circle, Trash2 } from "lucide-react"
import { ScrollAnimation } from "./scroll-animations"

interface Todo {
  id: number
  text: string
  completed: boolean
}

export function TodoManager() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: "Setup Database Integration", completed: true },
    { id: 2, text: "Build Homepage with Hero Section", completed: true },
    { id: 3, text: "Create URL Shortener Dashboard", completed: true },
    { id: 4, text: "Add Analytics & Stats Pages", completed: true },
    { id: 5, text: "Setup Authentication System", completed: true },
    { id: 6, text: "Build Mobile Sidebar & Navigation", completed: true },
    { id: 7, text: "Add Advanced Animations & Effects", completed: false },
  ])

  const toggleTodo = (id: number) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)))
  }

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const completedCount = todos.filter((todo) => todo.completed).length
  const totalCount = todos.length
  const progress = (completedCount / totalCount) * 100

  return (
    <ScrollAnimation animation="slide-up">
      <Card className="w-full max-w-2xl mx-auto bg-card/50 backdrop-blur border-border/50 shadow-2xl glass hover-lift">
        <CardHeader>
          <CardTitle className="font-playfair text-2xl flex items-center justify-between">
            <span className="gradient-text">Project Progress</span>
            <div className="text-sm font-poppins text-muted-foreground">
              {completedCount}/{totalCount} completed
            </div>
          </CardTitle>
          <div className="w-full bg-muted/50 rounded-full h-3 overflow-hidden">
            <div
              className="bg-gradient-to-r from-primary to-accent h-3 rounded-full transition-all duration-1000 ease-out animate-shimmer"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {todos.map((todo, index) => (
              <ScrollAnimation key={todo.id} animation="slide-left" delay={index * 100}>
                <div
                  className={`flex items-center space-x-3 p-3 rounded-lg border transition-all duration-300 hover-lift ${
                    todo.completed
                      ? "bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800"
                      : "bg-muted/30 border-border/50 hover:bg-muted/50"
                  }`}
                >
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => toggleTodo(todo.id)}
                    className="h-6 w-6 p-0 hover-scale"
                  >
                    {todo.completed ? (
                      <CheckCircle className="h-5 w-5 text-green-600 animate-bounce-in" />
                    ) : (
                      <Circle className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
                    )}
                  </Button>
                  <span
                    className={`flex-1 font-poppins text-sm transition-all duration-300 ${
                      todo.completed ? "line-through text-muted-foreground" : "text-foreground hover:text-primary"
                    }`}
                  >
                    {todo.text}
                  </span>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => deleteTodo(todo.id)}
                    className="h-6 w-6 p-0 text-muted-foreground hover:text-destructive hover-scale"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </ScrollAnimation>
            ))}
          </div>

          {progress === 100 && (
            <ScrollAnimation animation="bounce-in" delay={500}>
              <div className="mt-6 p-4 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg border border-green-200 dark:border-green-800 text-center">
                <div className="text-2xl mb-2">🎉</div>
                <h3 className="font-playfair text-lg font-semibold text-green-800 dark:text-green-200 mb-1">
                  Congratulations!
                </h3>
                <p className="font-poppins text-sm text-green-700 dark:text-green-300">
                  You've completed all tasks for the advanced URL shortener website!
                </p>
              </div>
            </ScrollAnimation>
          )}
        </CardContent>
      </Card>
    </ScrollAnimation>
  )
}
