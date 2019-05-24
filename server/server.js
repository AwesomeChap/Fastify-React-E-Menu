const mongoose = require('mongoose');
const fastify = require('fastify')();
const routes = require('./routes');
const path = require('path')

const DistPath = path.join(__dirname, '..', 'dist')

fastify.register(require('fastify-static'), {
  root: DistPath,
})

mongoose.connect('mongodb+srv://userx:passwordx@cluster0-ufv5h.azure.mongodb.net/test?retryWrites=true', { useFindAndModify: false, useNewUrlParser: true })
  .then(() => console.log('MongoDB connected'))
  .catch(e => console.log('MongoDB could not be connected due to ', e));

fastify.get('/', async (request, reply) => {
  try {
    reply.sendFile('index.html')
  }
  catch (e) { console.log(e) }
});

routes.forEach(route => fastify.route(route))

fastify.listen(3000, (err) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  console.log(`server running at ${fastify.server.address().port}`)
})