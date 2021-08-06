import { mongoose } from '@typegoose/typegoose';

import {PASSWORD, PORT, USER} from '../config/config';
import { app } from '../app'

const URI= `mongodb+srv://${USER}:${PASSWORD}@cluster0.d6cla.mongodb.net/DB-1?retryWrites=true&w=majority`;

// @ts-ignore
mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error', (e) => {
  console.error('Error!');
});
db.once('open', () => {
  console.log('Connected!');
});

app.listen(PORT, () => {
  console.log(`Server started at with port: ${PORT}`);
});