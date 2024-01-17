import { render, screen } from "@testing-library/react";
import App from "./App";

test('Test First React App Case', () => {
  render(<App />);
  const text = screen.getByText(/first react Test case/i)
  const imageTitle = screen.getByTitle(/Ai Generated image/i)

  expect(text).toBeInTheDocument();
  expect(imageTitle).toBeInTheDocument();
})
