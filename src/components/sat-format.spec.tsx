import { render } from "@testing-library/react"

import { SatFormat } from "./sat-format"

describe("SatFormat", () => {
  it("renders and matches snapshot", () => {
    const { asFragment } = render(<SatFormat amount={420} />)
    expect(asFragment()).toMatchSnapshot()
    // TODO: match 42
  })
})
