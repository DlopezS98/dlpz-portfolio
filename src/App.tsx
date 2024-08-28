import logo from './logo.svg';
import './App.css';
import HelloWorld from './hello-world/hello-world';
import { Grid2, Typography } from '@mui/material';

function App() {
  return (
    <Grid2 container direction={'column'} className="App">
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
