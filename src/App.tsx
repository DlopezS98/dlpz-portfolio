import './App.css';
import logo from './logo.svg';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Email, Facebook, Twitter } from '@mui/icons-material';
import { Box, Grid2, IconButton, Paper, Typography } from '@mui/material';

import Environment from './config/environment';
import Guard from './shared/guards/type.guard';
import HelloWorld from './hello-world/hello-world';
import { KeyValue, SocialMedia } from './shared/typings';

function App() {
  const environment = Environment.Instance;
  const mediaIcons: KeyValue<JSX.Element>[] = [
    { key: SocialMedia.GITHUB, value: <GitHubIcon /> },
    { key: SocialMedia.TWITTER, value: <Twitter /> },
    { key: SocialMedia.FACEBOOK, value: <Facebook /> },
    { key: SocialMedia.EMAIL, value: <Email /> },
  ];

  const handleClick = (social: string) => {
    const value = social as unknown as SocialMedia;
    console.log(value);
    if (value === SocialMedia.EMAIL) {
      window.location.href = `mailto:${environment.emailAddress}`;
      return;
    }

    const link = environment.socialLinks[value];
    if (Guard.isNullOrUndefined(link) || Guard.isNullOrEmpty(link)) return;

    window.open(link, '_blank');
  };

  return (
    <Grid2 container direction={'column'} className="App">
      <Paper className="floating-bar" elevation={3} style={{ margin: 10 }}>
        {mediaIcons.map((icon) => (
          <Box key={icon.key}>
            <IconButton onClick={() => handleClick(icon.key)} color="primary" aria-label="menu">
              {icon.value}
            </IconButton>
          </Box>
        ))}
      </Paper>
      <Grid2>
        <img src={logo} height={250} width={250} className="App-logo" alt="logo" />
        <br />
      </Grid2>
      <Typography color="white" fontFamily={'monospace'} variant={'h4'}>
        Coming Soon...
      </Typography>
      <HelloWorld />
    </Grid2>
  );
}

export default App;
