import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import handleOtherData from "./helper";

test("Functional Component Testing with event", () => {
  render(<App />);
  const btn = screen.getByTestId("btn1");
  fireEvent.click(btn);
  expect(screen.getByText("Hello")).toBeInTheDocument();
});

test("Functional component testing without event using helper js", () => {
  expect(handleOtherData()).toMatch("hii");
});
