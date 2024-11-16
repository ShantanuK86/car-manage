'use client'

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { useRouter } from "next/navigation"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { MoonIcon, SunIcon } from 'lucide-react'

export default function HomePage() {
  const router = useRouter()
  const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <div className={`relative h-screen w-full overflow-hidden transition-colors duration-300 ${isDarkMode ? 'dark bg-gray-900' : 'bg-gray-100'}`}>
      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        alt="Luxury car"
        className="absolute inset-0 h-full w-full object-cover filter brightness-50"
      />

      {/* Overlay */}
      <div className={`absolute inset-0 ${isDarkMode ? 'bg-black/70' : 'bg-black/50'}`} />

      {/* Card Container */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 py-32 text-center sm:px-8">
        <Card className="bg-primary-foreground/80 shadow-xl rounded-2xl border border-primary/30">
          <CardHeader>
            <CardTitle className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent py-2">
              Your Car Collection 
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-8 text-lg sm:text-xl lg:text-2xl font-light leading-relaxed text-primary">
              Experience the seamless experience
            </p>
            {/* Get Started Button */}
            <Button
              onClick={() => router.push("/auth/signin")}
              size="lg"
              className="w-full sm:w-auto px-8 py-3 text-lg rounded-xl shadow-md transition-all duration-300"
            >
              Browse Your Fleet
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Dark Mode Toggle */}
      <div className="absolute top-4 right-4 z-20">
        <div className="flex items-center space-x-2">
          <SunIcon className="h-6 w-6 text-yellow-500" />
          <Switch id="dark-mode" checked={isDarkMode} onCheckedChange={toggleDarkMode} />
          <MoonIcon className="h-6 w-6 text-blue-500" />
        </div>
      </div>
    </div>
  )
}