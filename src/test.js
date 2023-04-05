import React from "react";
import { render, fireEvent } from "@testing-library/react";
import LoginPage from "./LoginPage";

test("renders the Login Page with username and password inputs and a login button", () => {
  const { getByPlaceholderText, getByText } = render(<LoginPage />);

  const usernameInput = getByPlaceholderText("Username");
  const passwordInput = getByPlaceholderText("Password");
  const loginButton = getByText("Login");

  expect(usernameInput).toBeInTheDocument();
  expect(passwordInput).toBeInTheDocument();
  expect(loginButton).toBeInTheDocument();
});

test("displays an alert for invalid credentials when Login button is clicked with incorrect username and password", () => {
  const { getByPlaceholderText, getByText, getByRole } = render(<LoginPage />);
  const usernameInput = getByPlaceholderText("Username");
  const passwordInput = getByPlaceholderText("Password");
  const loginButton = getByText("Login");

  fireEvent.change(usernameInput, { target: { value: "invaliduser" } });
  fireEvent.change(passwordInput, { target: { value: "invalidpassword" } });
  fireEvent.click(loginButton);

  const alert = getByRole("alert");
  expect(alert).toHaveTextContent("Invalid credentials");
});

test("navigates to Orders Page when Login button is clicked with correct username and password", () => {
  const mockNavigation = jest.fn();
  const { getByPlaceholderText, getByText } = render(
    <LoginPage navigation={{ navigate: mockNavigation }} />
  );
  const usernameInput = getByPlaceholderText("Username");
  const passwordInput = getByPlaceholderText("Password");
  const loginButton = getByText("Login");

  fireEvent.change(usernameInput, { target: { value: "admin" } });
  fireEvent.change(passwordInput, { target: { value: "admin" } });
  fireEvent.click(loginButton);

  expect(mockNavigation).toHaveBeenCalledWith("OrdersPage");
});
