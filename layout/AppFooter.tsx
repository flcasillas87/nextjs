"use client";
import siteMetadata from "@/data/siteMetadata";
import CssBaseline from "@mui/material/CssBaseline";
import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import Link from "@mui/material";
import NextLink from "next/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
//import SvgMuiLogotype from 'docs/src/icons/SvgMuiLogotype';
//import EmailSubscribe from 'docs/src/components/footer/EmailSubscribe';
//import ROUTES from 'docs/src/route';
//import Link from 'docs/src/modules/components/Link';
//import SvgStackOverflow from 'docs/src/icons/SvgStackOverflow';
import { alpha } from "@mui/material/styles";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {"Copyright © "}
      Your Website
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function AppFooter() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="footer">
        <Box
          sx={{
            py: 8,
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
          }}
        >
          <CssBaseline />

          <Box
            component="footer"
            sx={{
              py: 3,
              px: 2,
              mt: "auto",
              backgroundColor: (theme) =>
                theme.palette.mode === "light"
                  ? theme.palette.grey[200]
                  : theme.palette.grey[800],
            }}
          >
            <Container maxWidth="sm">
              <Typography variant="body1">
                My sticky footer can be found here.
              </Typography>
              <Copyright />
            </Container>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
