import React, { useEffect, useState } from "react"

const phrases = [
  "a design background",
  "an interest in databases",
  "an eye for details",
  "a curiosity about what’s next",
]

export default function RotatingIntro() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)")
    let timer
    const update = () => {
      window.clearInterval(timer)
      if (!preference.matches) {
        timer = window.setInterval(() => setActive(value => (value + 1) % phrases.length), 3500)
      }
    }
    update()
    preference.addEventListener("change", update)
    return () => {
      window.clearInterval(timer)
      preference.removeEventListener("change", update)
    }
  }, [])

  return (
    <h5 className="mt-3 rotating-intro">
      <span className="visually-hidden">rails dev &amp;&amp; {phrases.join(", ")}</span>
      <span aria-hidden="true">rails dev &amp;&amp; </span>
      <span className="rotating-intro-phrases" aria-hidden="true">
        {phrases.map((phrase, index) => (
          <span key={phrase} className={index === active ? "is-active" : ""}>{phrase}</span>
        ))}
      </span>
    </h5>
  )
}
