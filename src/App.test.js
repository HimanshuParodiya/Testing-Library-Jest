// Import the 'render' and 'screen' functions from the '@testing-library/react' library.
import { render, screen } from '@testing-library/react';

// Import the 'App' component from the './App' file.
import App from './App';

// Define a test case with a description.
test('Check learn react text in app', () => {
  // Render the 'App' component to the virtual DOM for testing purposes.
  render(<App />);

  // Use the 'screen' object to find an element with text matching 'learn react' (case-insensitive).
  const linkElement = screen.getByText(/learn react/i);

  // Expect that the 'linkElement' is in the document (i.e., it should be present).
  expect(linkElement).toBeInTheDocument();
});
