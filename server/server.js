import express from 'express';
import path from 'node:path';
import * as db from './src/config/connection.js';
import routes from './src/routes/index.js';
// Removed unused import of ApolloServer
const app = express();
const PORT = process.env.PORT || 3001;
// Removed unused declaration of 'gql'
// const { ApolloServer } = require('apollo-server-express'); // Removed unused import
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
}
app.use(routes);
db.once('open', () => {
    app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`));
});
