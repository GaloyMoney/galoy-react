import { ChangeEvent, useState, memo, useEffect, forwardRef } from "react"
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

const DebouncedTextareaComponent = forwardRef<HTMLTextAreaElement, Props>(
  (
    {
      onChange,
      onDebouncedChange,
      initValue,
      debounceDelay = 1500,

      ...textAreaProps
    },
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

    const handleOnChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
      const newValue = event.target.value
      if (onChange) {
        onChange(newValue)
      }
      setInput({ value: newValue, typing: true })
    }

    return (
      <textarea
        ref={ref}
        value={input.value}
        onChange={handleOnChange}
        {...textAreaProps}
      />
    )
  },
)

DebouncedTextareaComponent.displayName = "DebouncedTextarea"

export const DebouncedTextarea = memo(DebouncedTextareaComponent)
