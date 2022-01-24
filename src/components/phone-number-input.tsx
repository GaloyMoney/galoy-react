import React, { memo, useCallback, useRef } from "react"
import intlTelInput from "intl-tel-input"

type PhoneNumberProps = {
  onSuccess?: (arg: string) => void
  onInvalidNumber?: (arg: number | string) => void
}

const PhoneNumberInputComponent = ({ onSuccess, onInvalidNumber }: PhoneNumberProps) => {
  const iti = useRef<intlTelInput.Plugin | null>(null)

  const phoneRef = useCallback(async (node: HTMLInputElement) => {
    if (node !== null) {
      iti.current = intlTelInput(node, {
        autoPlaceholder: "off",
        utilsScript:
          "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.15/js/utils.min.js",
      })
      await iti.current.promise
      node.focus()
    }
  }, [])

  const handlePhoneNumberSubmit: React.FormEventHandler<HTMLFormElement> = async (
    event,
  ) => {
    event.preventDefault()
    if (!iti.current || !iti.current.isValidNumber()) {
      onInvalidNumber?.(iti?.current?.getValidationError() || "INVALID_PHONE_NUMBER")
      return
    }

    const number = iti.current.getNumber()
    onSuccess?.(number)
  }

  return (
    <form onSubmit={handlePhoneNumberSubmit}>
      <input
        ref={phoneRef}
        type="tel"
        name="phone"
        className="phone-number-input"
        autoFocus
      />
      <button type="submit">
        <i aria-hidden className="far fa-arrow-alt-circle-right"></i>
      </button>
    </form>
  )
}

export const PhoneNumberInput = memo(PhoneNumberInputComponent)
