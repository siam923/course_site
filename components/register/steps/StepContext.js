import { createContext } from "react";

export const StepContext = createContext({
  validateStep: async () => true, // Default no-op validation function
});
