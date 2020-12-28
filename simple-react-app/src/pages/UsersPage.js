import React, { useEffect, useState } from 'react';
import {UserShort} from "../UserShort";
import {Grid} from "@material-ui/core";
import {useHistory} from "react-router-dom";

export const UsersPage = () => {
  const history = useHistory();
  const [users, setUsers] = useState(null);
  useEffect(() => {
    (async () => {
      const users = await fetch('http://localhost:9000/users').then(r => r.json());
      setUsers(users);
    })();
  }, []);

  const handleUserClick = (user) => {
    history.push(`/users/${user.id}`);
  };

  return (
    <Grid container spacing={3}>
      {users !== null && (
        users.map(user => (
          <UserShort key={user.id} {...user} onClick={handleUserClick} />
        ))
      )}
    </Grid>
  )
};
