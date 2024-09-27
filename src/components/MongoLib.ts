import { inject, injectable } from 'inversify';
import { IMongoLib, ILoggerList, IMongoConfig } from '../interfaces';
import { TYPES } from '../types';

@injectable()
export class MongoLib implements IMongoLib {
  constructor(
    @inject(TYPES.ILoggerList) readonly logger: ILoggerList,
    @inject(TYPES.IMongoConfig) readonly config: IMongoConfig
  ) {}

  async connect(): Promise<void> {
    await Promise.resolve();
    this.logger.public.info('Connected to mongodb!\n', this.config);
  }

  async disconnect(): Promise<void> {
    await Promise.resolve();
    this.logger.public.info('Disconnected mongodb!\n', {});
  }

  find<T>(): Promise<T> {
    throw new Error('Method not implemented.');
  }

  update<T>(): Promise<T | null> {
    throw new Error('Method not implemented.');
  }

  save<T>(): Promise<T | null> {
    throw new Error('Method not implemented.');
  }

  delete(): Promise<number> {
    throw new Error('Method not implemented.');
  }
}