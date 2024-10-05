import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { RouterProvider } from 'react-router-dom';
import routes from './routes'; // Import the routes configuration

test('renders welcome message and handles start button', () => {
  // Render the App component with the common router setup
  render(
    <RouterProvider router={routes} />
  );

  // Check that the welcome message is displayed on the LandingPage
  const welcomeMessage = screen.getByText(/Gravity Web 🚀/i);
  expect(welcomeMessage).toBeInTheDocument();

  // Check that the Start button is present
  const startButton = screen.getByRole('button', { name: /start/i });
  expect(startButton).toBeInTheDocument();

  // Simulate clicking the Start button
  fireEvent.click(startButton);

  // Ensure the welcome message is no longer displayed after the game starts
  expect(welcomeMessage).not.toBeInTheDocument();

  // Ensure the canvas is now visible (from the GamePage)
  const canvas = screen.getByRole('presentation'); // Assuming the canvas has a role of 'presentation'
  expect(canvas).toBeInTheDocument();
});
