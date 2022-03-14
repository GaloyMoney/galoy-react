import React, { memo, useCallback, useRef } from "react"
import intlTelInput from "intl-tel-input"

type PhoneNumberProps = {
  onSuccess?: (arg: string) => void
  onInvalidNumber?: (arg: string) => void
}

const validationErrorMessage = (
  errorCode: intlTelInputUtils.validationError | undefined,
) => {
  switch (errorCode) {
    case intlTelInputUtils.validationError.TOO_SHORT:
      return "Phone number is too short"
    case intlTelInputUtils.validationError.TOO_LONG:
      return "Phone number is too long"
    case intlTelInputUtils.validationError.INVALID_COUNTRY_CODE:
      return "Invalid country code"
    default:
      return "Invalid phone number"
  }
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
      onInvalidNumber?.(validationErrorMessage(iti?.current?.getValidationError()))
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
        <i aria-hidden className="far fa-arrow-alt-circle-right" />
      </button>
    </form>
  )
}

export const PhoneNumberInput = memo(PhoneNumberInputComponent)
