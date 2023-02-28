import * as dotenv from 'dotenv';
dotenv.config()
import config from './config';
import app from "./server";

const port = config.port;

// creates and starts a server for our API on a defined port
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
