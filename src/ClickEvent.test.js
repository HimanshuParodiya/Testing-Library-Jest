import { fireEvent, render, screen } from "@testing-library/react"
import App from "./App"

test('Click event test case ', () => {
    render(<App />)
    let btn = screen.getByRole("button")
    fireEvent.click(btn)
    expect(screen.getByText("Updated data")).toBeInTheDocument()
})
