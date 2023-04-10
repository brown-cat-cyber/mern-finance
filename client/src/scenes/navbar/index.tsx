import FlexBetweenBox from "@/components/FlexBetweenBox"
import { Box, Typography, useTheme } from "@mui/material"
import React, { useState } from "react"
import PixIcon from "@mui/icons-material/Pix"
import { Link } from "react-router-dom"

type Props = {}

const Navbar = (props: Props) => {
  const [selected, setSelected] = useState("dashboard" as string)
  // use theme
  const { palette } = useTheme()
  return (
    <FlexBetweenBox mb="0.25rem" p="0.5rem 0rem" color={palette.grey[300]}>
      {/* LEFT SIDE ICONS*/}
      <FlexBetweenBox gap="0.75rem">
        <PixIcon sx={{ fontSize: "28px" }} />
        <Typography variant="h4" fontSize="16px">
          Finanseer
        </Typography>
      </FlexBetweenBox>

      {/* RIGHT SIDE PAGES */}
      <FlexBetweenBox gap="2rem">
        {["dashboard", "predictions"].map((pageName) => (
          <Box
            key={pageName}
            sx={{
              "&:hover": {
                color: palette.primary[100],
              },
            }}
          >
            <Link
              to="/"
              onClick={() => setSelected(pageName)}
              style={{
                color: selected === pageName ? "inherit" : palette.grey[700],
              }}
            >
              {pageName}
            </Link>
          </Box>
        ))}
      </FlexBetweenBox>
    </FlexBetweenBox>
  )
}

export default Navbar
