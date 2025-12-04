import express from 'express';
import mongoose from 'mongoose';
import usersRouter from './routes/users.router.js';
import petsRouter from './routes/pets.router.js';
import mocksRouter from './routes/mocks.router.js';
import adoptionRouter from './routes/adoption.router.js';
import { swaggerDocs } from './config/swagger.js';

const app = express();
const PORT = process.env.PORT || 8080;


app.use(express.json());


app.use('/api/users', usersRouter);
app.use('/api/pets', petsRouter);
app.use('/api/mocks', mocksRouter);
app.use('/api/adoptions', adoptionRouter);


swaggerDocs(app);


app.get('/', (req, res) => {
  res.send('¡Servidor funcionando correctamente!');
});


const MONGO_URL = process.env.NODE_ENV === 'test'
  ? 'mongodb://localhost:27017/backend3_test'  
  : 'mongodb+srv://sabribidal:12345678@cluster0.x9hrulj.mongodb.net/backend3';

mongoose.connect(MONGO_URL)
  .then(() => console.log('MongoDB conectado'))
  .catch(err => console.error('Error al conectar MongoDB:', err));


if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
  });
}


export default app;
