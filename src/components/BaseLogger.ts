import { injectable } from 'inversify';
import { Logger } from '../interfaces';

@injectable()
export class BaseLogger implements Logger {
  info(msg: string, data: object): void {
    console.log(`${this.constructor.name} (INFO): `, msg, JSON.stringify(data));
  }

  warn(msg: string, data: object): void {
    console.log(`${this.constructor.name} (WARN): `, msg, JSON.stringify(data));
  }

  error(msg: string, data: object): void {
    console.log(`${this.constructor.name} (ERROR): `, msg, JSON.stringify(data));
  }
}