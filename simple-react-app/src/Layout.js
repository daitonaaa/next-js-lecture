import React from 'react';
import {useHistory} from "react-router-dom";
import {Container, Button} from '@material-ui/core';

import './Layout.scss';

export const Layout = ({ children }) => {
  const history = useHistory();

  return (
    <Container>
      <header>
        Simple react app <Button variant="outlined" onClick={() => history.push('/users')}>users</Button>
      </header>
      <main style={{padding: 12}}>{children}</main>
    </Container>
  )
}
