import { render } from "@testing-library/react"

import { SatSymbol } from "./sat-symbol"

describe("SatSymbol", () => {
  it("renders and matches snapshot", () => {
    const { asFragment } = render(<SatSymbol />)
    expect(asFragment()).toMatchSnapshot()
  })
})
