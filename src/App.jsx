import { ThemeProvider } from "@shadcn/ThemeProvider";
import React from "react";
import Router from "./Router";

const App = () => {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <Router />
    </ThemeProvider>
  );
};

export default App;
