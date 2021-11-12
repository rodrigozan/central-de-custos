import express from 'express';
import http from 'http';
import cors from 'cors';
import 'dotenv/config';

import { router } from '../routes'

const app = express();
app.use(cors())

const server = http.createServer(app)

app.use(express.json())

app.use(router)

export { server }