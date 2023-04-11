import React from "react"
import FlexBetweenBox from "./FlexBetweenBox"
import { Box, Typography, useTheme } from "@mui/material"

type Props = {
  title: string
  sideText: string
  subtitle?: string
  icon?: React.ReactNode
}

const BoxHeader = ({ title, sideText, subtitle, icon }: Props) => {
  const { palette } = useTheme()
  return (
    <FlexBetweenBox margin="1.5rem 1rem 0 1rem" color={palette.grey[400]}>
      <FlexBetweenBox>
        {icon}
        <Box width="100%">
          <Typography variant="h4" mb="-0.1rem">
            {title}
          </Typography>
          <Typography variant="h6">{subtitle}</Typography>
        </Box>
      </FlexBetweenBox>
      <Typography variant="h5" fontWeight="700" color="secondary.main">
        {sideText}
      </Typography>
    </FlexBetweenBox>
  )
}

export default BoxHeader
