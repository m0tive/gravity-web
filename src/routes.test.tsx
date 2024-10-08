import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import routes from './routes'; // Import the routes configuration

test('renders welcome message and handles start button', async () => {
  // Create a memory router with the routes configuration
  const router = createMemoryRouter(routes, {
    initialEntries: ['/'], // Start at the landing page
  });

  // Render the App component with the memory router setup
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

  // Ensure the canvas is now visible after loading (using waitFor to wait for async loading)
  const canvas = screen.getByTestId('game-canvas');
  expect(canvas).toBeInTheDocument();
});
