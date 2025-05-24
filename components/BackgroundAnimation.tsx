"use client"

import { useEffect, useRef } from "react"

export default function BackgroundAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Create grid pattern similar to GitHub
    const gridSize = 30
    const dotSize = 1

    // Stars (occasional highlights)
    class Star {
      x: number
      y: number
      size: number
      opacity: number
      maxOpacity: number
      speed: number

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 1.5 + 0.5
        this.opacity = 0
        this.maxOpacity = Math.random() * 0.5 + 0.2
        this.speed = Math.random() * 0.02 + 0.005
      }

      update() {
        this.opacity += this.speed

        if (this.opacity >= this.maxOpacity) {
          this.opacity = this.maxOpacity
          this.speed = -this.speed
        } else if (this.opacity <= 0) {
          this.x = Math.random() * canvas.width
          this.y = Math.random() * canvas.height
          this.opacity = 0
          this.maxOpacity = Math.random() * 0.5 + 0.2
          this.speed = Math.random() * 0.02 + 0.005
        }
      }

      draw() {
        if (!ctx) return
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(88, 166, 255, ${this.opacity})`
        ctx.fill()
      }
    }

    // Create stars
    const stars: Star[] = []
    const numberOfStars = 50

    for (let i = 0; i < numberOfStars; i++) {
      stars.push(new Star())
    }

    // Animation loop
    function animate() {
      if (!ctx) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw grid
      ctx.fillStyle = "rgba(48, 54, 61, 0.2)"

      for (let x = 0; x < canvas.width; x += gridSize) {
        for (let y = 0; y < canvas.height; y += gridSize) {
          ctx.beginPath()
          ctx.arc(x, y, dotSize, 0, Math.PI * 2)
          ctx.fill()
        }
      }

      // Update and draw stars
      for (let i = 0; i < stars.length; i++) {
        stars[i].update()
        stars[i].draw()
      }

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full pointer-events-none" />
}
