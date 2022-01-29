import { ChangeEvent, useState, memo, useEffect } from "react"
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

const DebouncedInputComponent = ({
  onChange,
  onDebouncedChange,
  initValue,
  debounceDelay = 1500,
  ...inputProps
}: Props) => {
  const [input, setInput] = useState<InputObject>({
    value: initValue ?? "",
    typing: false,
  })

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

  return <input value={input.value} onChange={handleOnChange} {...inputProps} />
}

export const DebouncedInput = memo(DebouncedInputComponent)
