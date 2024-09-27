export interface Logger {
  info(msg: string, data: object): void;
  warn(msg: string, data: object): void;
  error(msg: string, data: object): void;
}

export interface ILoggerList {
  conf: Logger;
  public: Logger;
}

export interface IMongoConfig {
  connectionString: string;
}

export interface IGlobalConfig {
  propertyA: string;
  propertyB: string;
  propertyC: string;
}

export abstract class IMongoLib {
  abstract readonly logger: ILoggerList;
  abstract readonly config: IMongoConfig;

  abstract connect(): Promise<void>;

  abstract disconnect(): Promise<void>;

  abstract find<T>(): Promise<T>;

  abstract update<T>(): Promise<T | null>;

  abstract save<T>(): Promise<T | null>;

  abstract delete(): Promise<number>;
}

export abstract class IApp {
  abstract readonly config: IGlobalConfig;
  abstract readonly logger: ILoggerList;
  abstract readonly mongoLib: IMongoLib;

  abstract sayHello(): void;
}