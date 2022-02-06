import { ChangeEvent, useState, memo, useEffect, forwardRef } from "react"
import { useDebouncedCallback } from "use-debounce"

export type OnInputValueChange = (value: string) => void

type Props = {
  onChange?: OnInputValueChange
  onDebouncedChange?: OnInputValueChange
  initValue?: string
  debounceDelay?: number
  [prop: string]: unknown
}

type InputObject = {
  value: string
  debouncedValue?: string
  typing: boolean
}

const DebouncedInputComponent = forwardRef<HTMLInputElement, Props>(
  (
    { onChange, onDebouncedChange, initValue, debounceDelay = 1500, ...inputProps },
    ref,
  ) => {
    const [input, setInput] = useState<InputObject>({
      value: initValue ?? "",
      typing: false,
    })

    useEffect(() => {
      if (initValue !== undefined && initValue !== input.value) {
        setInput({ value: initValue ?? "", typing: false })
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [initValue])

    const setDebouncedInputValue = useDebouncedCallback((debouncedValue) => {
      setInput((currInput) => ({ ...currInput, debouncedValue, typing: false }))
    }, debounceDelay)

    useEffect(() => {
      if (input.typing) {
        setDebouncedInputValue(input.value)
      }
      return () => setDebouncedInputValue.cancel()
    }, [setDebouncedInputValue, input.typing, input.value])

    useEffect(() => {
      if (onDebouncedChange && input.debouncedValue !== undefined) {
        onDebouncedChange(input.debouncedValue)
      }
    }, [onDebouncedChange, input.debouncedValue])

    const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
      const eventValue = event.target.value
      if (onChange) {
        onChange(eventValue)
      }
      setInput({ value: eventValue, typing: true })
    }

    return (
      <input ref={ref} value={input.value} onChange={handleOnChange} {...inputProps} />
    )
  },
)

DebouncedInputComponent.displayName = "DebouncedInput"

export const DebouncedInput = memo(DebouncedInputComponent)
