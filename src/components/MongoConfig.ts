import { injectable } from 'inversify';
import { IMongoConfig } from '../interfaces';

@injectable()
export class MongoConfig implements IMongoConfig {
  public connectionString: string = process.env.MONGO_STRING;
}