const Koa = require('koa');
const logger = require('koa-logger')
const Router = require('koa-router');
const cors = require('@koa/cors');

const app = new Koa();
const router = new Router();

const fakeUsersMap = require('./fake-data/users');

router
  .get('/users', ctx => {
    ctx.body = [...fakeUsersMap.values()];
  })
  .get('/users/:id', ctx => {
    const existUser = fakeUsersMap.get(Number(ctx.params.id));
    if (!existUser) {
      ctx.throw(404);
    }

    ctx.body = existUser;
  });

app
  .use(logger())
  .use(cors())
  .use(router.routes())
  .listen(9000, () => {
    console.log('Server run');
  });
