import { render } from "@testing-library/react"

import { Spinner } from "./spinner"

describe("Spinner", () => {
  it("renders and matches snapshot", () => {
    const { asFragment } = render(<Spinner />)
    expect(asFragment()).toMatchSnapshot()
  })
})
