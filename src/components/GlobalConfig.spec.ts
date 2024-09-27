import { expect, describe, beforeEach, it, afterEach } from '@jest/globals';
import { GlobalConfig } from './GlobalConfig';

describe('GlobalConfig', () => {
  let globalConfig: GlobalConfig;

  beforeEach(() => {
    process.env.PROP_A = 'valueA';
    process.env.PROP_B = 'valueB';
    process.env.PROP_C = 'valueC';

    globalConfig = new GlobalConfig();
  });

  afterEach(() => {
    delete process.env.PROP_A;
    delete process.env.PROP_B;
    delete process.env.PROP_C;
  });

  it('should correctly set propertyA from environment variable', () => {
    expect(globalConfig.propertyA).toBe('valueA');
  });

  it('should correctly set propertyB from environment variable', () => {
    expect(globalConfig.propertyB).toBe('valueB');
  });

  it('should correctly set propertyC from environment variable', () => {
    expect(globalConfig.propertyC).toBe('valueC');
  });
});
