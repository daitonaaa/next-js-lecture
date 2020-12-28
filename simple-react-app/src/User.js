import React from 'react';
import {Avatar, Box, Typography} from "@material-ui/core";

export const User = (user) => (
  <Box>
    <Box style={{display: 'flex', marginBottom: 50}}>
      <Avatar style={{width: 250, height: 250, marginRight: 50}} src={user.avatarUrl} />
      <Typography variant='h1'>
        {`${user.firstName} ${user.lastName}`}
      </Typography>
    </Box>
    <Typography variant="h6">
      {user.about}
    </Typography>
  </Box>
);
