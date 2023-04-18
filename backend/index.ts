import { createServer } from './src/networking/server';
import { config } from './src/tools/config';

createServer(config.PORT);