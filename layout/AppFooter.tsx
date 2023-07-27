"use client";
//import Link from "../layout/Link";
//import { SocialIcon } from "react-social-icons";
import siteMetadata from "@/data/siteMetadata";
import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from "@mui/material";
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import Link from "@mui/material";
import NextLink from 'next/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
//import SvgMuiLogotype from 'docs/src/icons/SvgMuiLogotype';
//import EmailSubscribe from 'docs/src/components/footer/EmailSubscribe';
//import ROUTES from 'docs/src/route';
//import Link from 'docs/src/modules/components/Link';
//import SvgStackOverflow from 'docs/src/icons/SvgStackOverflow';
import { alpha } from '@mui/material/styles';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
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
            display: 'grid',
            gridAutoColumns: '1fr',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            gap: 4,
            gridTemplateColumns: { xs: '1fr', sm: '1fr', md: '1fr 1.75fr', lg: '1fr 1fr' },
            gridTemplateRows: 'auto',
            '& a:not(.MuiIconButton-root)': {
              pt: 0.5,
              pb: 0.5,
              color: 'text.secondary',
              typography: 'body2',
              '&:hover': {
                color: 'primary.main',
                textDecoration: 'underline',
              },
            },
          }}
        >
          <div>
            <Typography variant="body2" fontWeight="bold">
              Keep up to date
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
              Join our newsletter for regular updates. No spam ever.
            </Typography>
          </div>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr 1fr', md: '1fr 1fr 1fr 1fr' },
              gridAutoColumns: '1fr',
              gap: 2,
            }}
          >

            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Typography fontWeight="bold" variant="body2" sx={{ mb: 0.5 }}>
                Products
              </Typography>

            </Box>
          </Box>
        </Box>
      </Container >
    </ThemeProvider>
  );
}
