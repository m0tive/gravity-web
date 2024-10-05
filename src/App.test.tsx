import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import { App } from './App';

test('renders welcome message and handles start button', () => {
  // Create a memory router with the initial route set to '/'
  const router = createMemoryRouter([
    {
      path: '/',
      element: <App />,
    },
  ]);

  // Render the App component with the RouterProvider
  render(
    <RouterProvider router={router} />
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
  const canvas = screen.getByRole('presentation'); // Assuming the canvas has a role of 'img'
  expect(canvas).toBeInTheDocument();
});
