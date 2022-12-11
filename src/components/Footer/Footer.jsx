import React from 'react';
import RedesSociais from './RedesSociais';
import './Footer.css';

const redesSociais = {
  linkedin: 'https://www.linkedin.com/in/daniel-victor-55312a210/',
  gitHub: 'https://github.com/daniel-victorr',
};

class Footer extends React.Component {
  render() {
    return (
      <RedesSociais redesSociais={ redesSociais } />
    );
  }
}

export default Footer;
