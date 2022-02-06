import { ChangeEvent, useState, memo, useEffect, forwardRef } from "react"
import { useDebouncedCallback } from "use-debounce"

const formatter = new Intl.NumberFormat("en-US", { maximumFractionDigits: 2 })

export type ParseInputValueFunction = (inputValue: string) => {
  numberValue: number | ""
  formattedValue: string
}

const parseInputValue: ParseInputValueFunction = (inputValue) => {
  if (inputValue === "") {
    return { numberValue: "", formattedValue: "" }
  }

  const numberValue = Number(inputValue.replace(/[^0-9.]/gu, ""))
  const inputValueIncomplete = inputValue.match(/(\.[1-9]?0+|\.)$/u)
  const formattedValue =
    // Allaw fixing invalid input and typing the decimal part at the end
    Number.isNaN(numberValue) || inputValueIncomplete
      ? inputValue
      : formatter.format(numberValue)

  return { numberValue, formattedValue }
}

export type OnNumberValueChange = (numberValue: number | "") => void

type Props = {
  onChange?: OnNumberValueChange
  onDebouncedChange?: OnNumberValueChange
  initValue?: number
  debounceDelay?: number
  [prop: string]: unknown
}

type InputObject = {
  numberValue: number | ""
  formattedValue: string
  debouncedValue?: number | ""
  typing: boolean
}

const FormattedNumberInputComponent = forwardRef<HTMLInputElement, Props>(
  (
    { onChange, onDebouncedChange, initValue, debounceDelay = 1500, ...inputProps },
    ref,
  ) => {
    const [input, setInput] = useState<InputObject>(() => ({
      ...parseInputValue(initValue?.toString() ?? ""),
      typing: false,
    }))

    useEffect(() => {
      if (initValue !== undefined && initValue !== input.numberValue) {
        setInput({
          ...parseInputValue(initValue?.toString() ?? ""),
          typing: false,
        })
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [initValue])

    const setDebouncedInputValue = useDebouncedCallback((debouncedValue) => {
      setInput((currInput) => ({ ...currInput, debouncedValue, typing: false }))
    }, debounceDelay)

    useEffect(() => {
      if (input.typing) {
        setDebouncedInputValue(input.numberValue)
      }
      return () => setDebouncedInputValue.cancel()
    }, [setDebouncedInputValue, input.typing, input.numberValue])

    useEffect(() => {
      if (onDebouncedChange && input.debouncedValue !== undefined) {
        onDebouncedChange(input.debouncedValue)
      }
    }, [onDebouncedChange, input.debouncedValue])

    const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
      // Block more than 2 decmial numbers or points in the input
      if (event.target.value.match(/(\.[0-9]{3,}$|\..*\.)/u)) {
        return
      }
      const { numberValue, formattedValue } = parseInputValue(event.target.value)
      if (onChange) {
        onChange(numberValue)
      }
      setInput({ numberValue, formattedValue, typing: true })
    }

    return (
      <input
        ref={ref}
        type="text"
        pattern="\d*"
        inputMode="numeric"
        value={input.formattedValue}
        onChange={handleOnChange}
        {...inputProps}
      />
    )
  },
)

FormattedNumberInputComponent.displayName = "FormattedNumberInput"

export const FormattedNumberInput = memo(FormattedNumberInputComponent)
