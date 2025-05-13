import { ThemeProvider } from "@shadcn/ThemeProvider";
import React from "react";

const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      App
    </ThemeProvider>
  );
};

export default App;
