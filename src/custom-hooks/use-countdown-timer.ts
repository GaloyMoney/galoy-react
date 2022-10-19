import { useCallback, useEffect, useState } from "react"

type useCountdownTimerReturnValue = {
  timeLeft: number | undefined
  startCountdownTimer: (seconds: number, callback?: () => void) => void
  stopCountdownTimer: () => void
  resetCountdownTimer: (seconds: number, newCallback?: () => void) => void
  resetCountdownTimerAndExecuteCallback: (
    seconds: number,
    newCallback?: () => void,
  ) => void
  stopCountdownTimerAndExecuteCallback: (newCallback?: () => void) => void
}

export const useCountdownTimer = (): useCountdownTimerReturnValue => {
  const [timeLeft, setTimeLeft] = useState<number>()
  const [completedCallback, setCompletedCallback] = useState<() => void>()

  useEffect(() => {
    if (timeLeft !== undefined) {
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
    }
  }, [timeLeft, completedCallback])

  const startCountdownTimer = useCallback((seconds: number, callback?: () => void) => {
    setTimeLeft(seconds)
    if (callback) {
      setCompletedCallback(() => callback)
    }
  }, [])

  const stopCountdownTimer = useCallback(() => {
    setTimeLeft(0)
  }, [])

  const resetCountdownTimer = useCallback((seconds: number, newCallback?: () => void) => {
    setTimeLeft(seconds)
    if (newCallback) {
      setCompletedCallback(() => newCallback)
    }
  }, [])

  const resetCountdownTimerAndExecuteCallback = useCallback(
    (seconds: number, newCallback?: () => void) => {
      setTimeLeft(seconds)
      if (completedCallback) {
        completedCallback()
      }
      setCompletedCallback(() => newCallback)
    },
    [completedCallback],
  )

  const stopCountdownTimerAndExecuteCallback = useCallback(
    (newCallback?: () => void) => {
      setTimeLeft(0)
      if (completedCallback) {
        completedCallback()
      }
      setCompletedCallback(() => newCallback)
    },
    [completedCallback],
  )

  return {
    timeLeft,
    startCountdownTimer,
    stopCountdownTimer,
    resetCountdownTimer,
    resetCountdownTimerAndExecuteCallback,
    stopCountdownTimerAndExecuteCallback,
  }
}
