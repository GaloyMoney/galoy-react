import { ChangeEvent, useState, memo, useEffect } from "react"
import { useDebouncedCallback } from "use-debounce"

export type OnTextValueChange = (value: string) => void

type Props = {
  onChange?: OnTextValueChange
  onDebouncedChange?: OnTextValueChange
  initValue?: string
  debounceDelay?: number
  [prop: string]: unknown
}

type InputObject = {
  value: string
  debouncedValue?: string
  typing: boolean
}

const DebouncedTextareaComponent = ({
  onChange,
  onDebouncedChange,
  initValue,
  debounceDelay = 1500,

  ...textAreaProps
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

  const handleOnChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = event.target.value
    if (onChange) {
      onChange(newValue)
    }
    setInput({ value: newValue, typing: true })
  }

  return <textarea value={input.value} onChange={handleOnChange} {...textAreaProps} />
}

export const DebouncedTextarea = memo(DebouncedTextareaComponent)
