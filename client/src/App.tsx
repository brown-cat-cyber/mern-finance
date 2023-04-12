import { useMemo } from "react"
// import { ThemeProvider } from "@emotion/react"
import { themeSettings } from "./theme"
import { Box, CssBaseline, ThemeProvider, createTheme } from "@mui/material"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Predictions from "./scenes/prediction"
import Dashboard from "./scenes/dashboard"
import Navbar from "./scenes/navbar"

function App() {
  const theme = useMemo(() => createTheme(themeSettings), [])
  return (
    <div className="App">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Box width="100%" height="100%" padding="1rem 2rem 4rem 2rem">
            <Navbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/predictions" element={<Predictions />} />
            </Routes>
          </Box>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
