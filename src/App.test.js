import { render, screen } from "@testing-library/react";
import App from "./App";

test('Test First React App Case', () => {
  render(<App />);
  // const text = screen.getByText(/first react Test case/i)
  // const imageTitle = screen.getByTitle(/Ai Generated image/i)

  // expect(text).toBeInTheDocument();
  // expect(imageTitle).toBeInTheDocument();
})

// test('input box tests', () => {
//   render(<App />)
//   const checkInputBox = screen.getByRole("textbox") // textbox = input
//   const checkInputPlaceholder = screen.getByPlaceholderText("Enter the username")
//   expect(checkInputBox).toBeInTheDocument()
//   expect(checkInputPlaceholder).toBeInTheDocument()
//   expect(checkInputBox).toHaveAttribute("name", "username")  // input should have attribute name with value "username"
//   expect(checkInputBox).toHaveAttribute("id", "userId")  // input should have attribute id with value "userId"
//   expect(checkInputBox).toHaveAttribute("type", "text")  // input should have attribute type with value "text"
// })


// describe('UI Test Case Group', () => {
//   test('test case 1', () => {
//     render(<App />)
//     let checkInput = screen.getByRole("textbox")
//     expect(checkInput).toHaveAttribute("name", "username")
//   })
//   test('test case 2', () => {
//     render(<App />)
//     let checkInput = screen.getByRole("textbox")
//     expect(checkInput).toHaveAttribute("name", "username")
//   })
//   test('test case 3', () => {
//     render(<App />)
//     let checkInput = screen.getByRole("textbox")
//     expect(checkInput).toHaveAttribute("name", "username")
//   })

// })


// describe('API Test Case Group', () => {
//   test('api test case 1', () => {
//     render(<App />)
//     let checkInput = screen.getByRole("textbox")
//     expect(checkInput).toHaveAttribute("name", "username")
//   })
//   test('api test case 2', () => {
//     render(<App />)
//     let checkInput = screen.getByRole("textbox")
//     expect(checkInput).toHaveAttribute("name", "username")
//   })
//   test('api test case 3', () => {
//     render(<App />)
//     let checkInput = screen.getByRole("textbox")
//     expect(checkInput).toHaveAttribute("name", "username")
//   })

//   describe('Inner describe test group', () => {
//     test('api inner test case 1', () => {
//       render(<App />)
//       let checkInput = screen.getByRole("textbox")
//       expect(checkInput).toHaveAttribute("name", "username")
//     })
//   })

// })
