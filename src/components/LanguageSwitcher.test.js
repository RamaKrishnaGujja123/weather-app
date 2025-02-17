import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { I18nextProvider } from "react-i18next";
import i18n from "../i18n"; // Ensure you have i18n configured
import LanguageSwitcher from "./LanguageSwitcher";

test("renders language switcher buttons", () => {
  render(
    <I18nextProvider i18n={i18n}>
      <LanguageSwitcher />
    </I18nextProvider>
  );

  // Check if the buttons are present
  expect(screen.getByText(/English/i)).toBeInTheDocument();
  expect(screen.getByText(/Español/i)).toBeInTheDocument();
});

test("switches language when a button is clicked", () => {
  render(
    <I18nextProvider i18n={i18n}>
      <LanguageSwitcher />
    </I18nextProvider>
  );

  const englishButton = screen.getByText(/English/i);
  const spanishButton = screen.getByText(/Español/i);

  // Click the Spanish button
  fireEvent.click(spanishButton);

  // Check if language was changed (you may need a method to verify)
  expect(i18n.language).toBe("es");

  // Click the English button
  fireEvent.click(englishButton);
  expect(i18n.language).toBe("en");
});
