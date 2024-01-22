import { render, screen } from "@testing-library/react"
import GetByRole from "./GetByRole";

test('get By Role', () => {
    render(<GetByRole />)
    const inputField = screen.getByRole("textbox");
    expect(inputField).toBeInTheDocument()
})