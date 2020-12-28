import React, {useEffect, useState} from 'react';
import {useRouteMatch} from "react-router";
import {User} from "../User";

export const UserPage = () => {
  const match = useRouteMatch();
  const [user, setUser] = useState(null);

  useEffect(() => {
    (async () => {
      const responseUser = await fetch(`http://localhost:9000/users/${match.params.userId}`).then(r => r.json());
      setUser(responseUser);
    })()
  }, []);

  if (!user) {
    return null;
  }

  return User(user);
};
