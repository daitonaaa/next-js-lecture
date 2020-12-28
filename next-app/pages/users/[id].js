import React from 'react';
import {User} from "../../User";

const UserPage = ({ user }) => {
  return User({ user });
};

export const getServerSideProps = async (ctx) => {
  const response = await fetch(`http://localhost:9000/users/${ctx.params.id}`);
  if (response.status === 404) {
    ctx.res.statusCode = 404;
    ctx.res.end('User not found');
    return { props: {} };
  }

  const user = await response.json();
  return {
    props: {
      user,
    }
  }
};

export default UserPage;
