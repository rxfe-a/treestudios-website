const fastify = require('fastify');
const static = require('@fastify/static');
const path = require('node:path');

const app = fastify(
    {
        logger: true
    }
)

app.register(static, {
    root: path.join(__dirname, '../web'),
    prefix: '/'
})

app.listen({ port: 3000, host: '0.0.0.0' })
  .catch(err => {
    app.log.error(err);
    process.exit(1);
  });