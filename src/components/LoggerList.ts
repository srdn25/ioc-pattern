import { inject, injectable } from 'inversify';
import { ILoggerList, Logger } from '../interfaces';
import { TYPES } from '../types';

@injectable()
export class LoggerList implements ILoggerList {
  @inject(TYPES.IConfidentialLogger) conf: Logger;
  @inject(TYPES.IPublicLogger) public: Logger;
}