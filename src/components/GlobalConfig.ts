import { injectable } from 'inversify';
import { IGlobalConfig } from '../interfaces';

@injectable()
export class GlobalConfig implements IGlobalConfig {
  propertyA: string = process.env.PROP_A;
  propertyB: string = process.env.PROP_B;
  propertyC: string = process.env.PROP_C;
}