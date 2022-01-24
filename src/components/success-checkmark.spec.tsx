import { render } from "@testing-library/react"

import { SuccessCheckmark } from "./success-checkmark"

describe("SuccessCheckmark", () => {
  it("renders and matches snapshot", () => {
    const { asFragment } = render(<SuccessCheckmark />)
    expect(asFragment()).toMatchSnapshot()
  })
})
