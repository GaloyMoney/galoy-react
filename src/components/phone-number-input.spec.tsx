import { render } from "@testing-library/react"

import { PhoneNumberInput } from "./phone-number-input"

describe("PhoneNumberInput", () => {
  it("renders and matches snapshot", () => {
    const { asFragment } = render(<PhoneNumberInput />)
    expect(asFragment()).toMatchSnapshot()
  })
})
