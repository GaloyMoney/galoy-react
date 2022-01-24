import { render } from "@testing-library/react"

import { FormattedNumberInput } from "./formatted-number-input"

describe("FormattedNumberInput", () => {
  it("renders and matches snapshot", () => {
    const { asFragment } = render(<FormattedNumberInput value="" />)
    expect(asFragment()).toMatchSnapshot()
  })
})
