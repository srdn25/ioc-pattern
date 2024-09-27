import { jest, describe, beforeEach, it, expect } from '@jest/globals';
import { LoggerList } from './LoggerList';
import { Logger } from '../interfaces';

describe('LoggerList', () => {
  let loggerList: LoggerList;
  let mockConfidentialLogger: Logger;
  let mockPublicLogger: Logger;

  beforeEach(() => {
    mockConfidentialLogger = { info: jest.fn(), warn: jest.fn(), error: jest.fn() };
    mockPublicLogger = { info: jest.fn(), warn: jest.fn(), error: jest.fn() };

    loggerList = new LoggerList(mockConfidentialLogger, mockPublicLogger);
  });

  it('should initialize conf with confidential logger', () => {
    expect(loggerList.conf).toBe(mockConfidentialLogger);
  });

  it('should initialize public with public logger', () => {
    expect(loggerList.public).toBe(mockPublicLogger);
  });
});
