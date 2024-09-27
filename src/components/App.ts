import { inject, injectable } from 'inversify';
import { IGlobalConfig, IApp, ILoggerList, IMongoLib } from '../interfaces';
import { TYPES } from '../types';

@injectable()
export class App implements IApp {
  constructor(
    @inject(TYPES.IGlobalConfig) public readonly config: IGlobalConfig,
    @inject(TYPES.ILoggerList) public readonly logger: ILoggerList,
    @inject(TYPES.IMongoLib) public readonly mongoLib: IMongoLib,
  ) {}

  async sayHello(): Promise<void> {
    console.log('Hello InversifyJS!');
    this.logger.conf.info('show config from App: ', this.config);
    await this.mongoLib.connect();
    await this.mongoLib.disconnect();
  }
}