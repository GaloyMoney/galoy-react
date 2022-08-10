import { useEffect, useState } from "react"

export const useCountdownTimer = (
  seconds: number,
  completedCallback?: void | (() => void),
) => {
  const [timeLeft, setTimeLeft] = useState(seconds)

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(timeLeft - 1)
    }, 1000)

    if (timeLeft === 0) {
      clearInterval(interval)
      if (completedCallback) {
        completedCallback()
      }
    }

    return () => {
      clearInterval(interval)
    }
  }, [timeLeft, completedCallback])

  return timeLeft
}
