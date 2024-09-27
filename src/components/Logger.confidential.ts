import { injectable } from 'inversify';
import { BaseLogger } from './BaseLogger';

@injectable()
export class LoggerConfidential extends BaseLogger {}