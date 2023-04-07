import { useState } from "react"
import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"
import "./App.css"
import { ThemeProvider } from "@emotion/react"
import { themeSettings } from "./theme"
import { CssBaseline } from "@mui/material"

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={themeSettings}>
        <CssBaseline></CssBaseline>
      </ThemeProvider>
    </div>
  )
}

export default App
