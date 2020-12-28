import React, {useEffect} from 'react';
import { Container, Grid } from "@material-ui/core";
import {UserShort} from "../../UserShort";

const Users = (props) => {
  return (
    <Container>
      <Grid container spacing={3}>
        {props.users && props.users.map(user => <UserShort key={user.id} {...user} />)}
      </Grid>
    </Container>
  )
};

export const getServerSideProps = async () => {
  const users = await fetch('http://localhost:9000/users').then(r => r.json());
  return {
    props: {
      users,
    }
  }
};

export default Users;

// Как то примерно в нексте
// import Component, { getServerSideProps } from 'component-path';