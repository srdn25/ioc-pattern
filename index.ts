import { IApp } from './src/interfaces';
import { container } from './src/inversify.config';
import { TYPES } from './src/types';

const app = container.get<IApp>(TYPES.IApp);

app.sayHello();