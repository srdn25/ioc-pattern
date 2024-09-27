import { inject, injectable } from 'inversify';
import { ILoggerList, Logger } from '../interfaces';
import { TYPES } from '../types';

@injectable()
export class LoggerList implements ILoggerList {
  public conf: Logger;
  public public: Logger;

  constructor(
    @inject(TYPES.IConfidentialLogger) conf: Logger,
    @inject(TYPES.IPublicLogger) publicLogger: Logger
  ) {
    this.conf = conf;
    this.public = publicLogger;
  }
}