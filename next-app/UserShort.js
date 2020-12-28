import React from 'react';
import Link from 'next/link';
import {Avatar, Card, CardActionArea, Grid, Typography} from "@material-ui/core";

export const UserShort = ({onClick, ...user}) => (
  <Grid item xs={3}>
    <Link href={`users/${user.id}`}>
      <a>
        <Card>
          <CardActionArea style={{padding: 10}}>
            <Avatar src={user.avatarUrl} />
            <Typography variant="h6" component="h2">
              {user.firstName + '' + user.lastName}
            </Typography>
          </CardActionArea>
        </Card>
      </a>
    </Link>
  </Grid>
);
