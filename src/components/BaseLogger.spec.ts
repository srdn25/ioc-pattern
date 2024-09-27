import { expect, jest, describe, beforeEach, it, afterEach } from '@jest/globals';
import { BaseLogger } from './BaseLogger';

describe('BaseLogger', () => {
  let baseLogger: BaseLogger;
  let consoleSpy: any;

  beforeEach(() => {
    baseLogger = new BaseLogger();
    consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  it('should log info message with correct format', () => {
    const msg = 'Test info message';
    const data = { key: 'value' };

    baseLogger.info(msg, data);

    expect(consoleSpy).toHaveBeenCalledWith(
      'BaseLogger (INFO): ',
      msg,
      JSON.stringify(data)
    );
  });

  it('should log warn message with correct format', () => {
    const msg = 'Test warn message';
    const data = { key: 'value' };

    baseLogger.warn(msg, data);

    expect(consoleSpy).toHaveBeenCalledWith(
      'BaseLogger (WARN): ',
      msg,
      JSON.stringify(data)
    );
  });

  it('should log error message with correct format', () => {
    const msg = 'Test error message';
    const data = { key: 'value' };

    baseLogger.error(msg, data);

    expect(consoleSpy).toHaveBeenCalledWith(
      'BaseLogger (ERROR): ',
      msg,
      JSON.stringify(data)
    );
  });
});
