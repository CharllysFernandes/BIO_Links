import * as React from 'react';
import { Button } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsappIcon from "@mui/icons-material/WhatsApp";
import LocationIcon from "@mui/icons-material/MapOutlined";

import './App.css';
import images from './images/charllysFernandes.png'


function App() {
  return (
    <div className="App">
      <header className="App-header">

        <img src={images} className="App-logo" alt="logo" />
        
        <p>
          Charllys Fernandes 
        </p>
        <br>Desenvolvedor Web</br>
          <Button variant="outlined" size="large" startIcon={<WhatsappIcon />}>
            Whatspp
          </Button>
          <Button variant="outlined" size="large" startIcon={<InstagramIcon />}>
            Instagram
          </Button>
          <Button variant="outlined" size="large" startIcon={<LocationIcon />}>
            Localização
          </Button>
      <div>
      </div>
      </header>

    </div>
  );
}

export default App;
