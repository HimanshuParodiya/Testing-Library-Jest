import { render, screen } from "@testing-library/react"
import Multiple_Element_Custom_Role from "../Components/Multiple_Element_Custom_Role"

test('getByRole Testing', () => {
    render(<Multiple_Element_Custom_Role />)
    const btn1 = screen.getByRole("button", { name: "Click 1" })
    const btn2 = screen.getByRole("button", { name: /click 1/i })
    const input1 = screen.getByRole("textbox", { name: /User Name/i })
    const input2 = screen.getByRole("textbox", { name: /User age/i })
    const div1 = screen.getByRole("dummy")

    expect(btn1).toBeInTheDocument()
    expect(btn2).toBeInTheDocument()
    expect(input1).toBeInTheDocument()
    expect(input2).toBeInTheDocument()
    expect(div1).toBeInTheDocument()
})
