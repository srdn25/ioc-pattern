import { expect, jest, describe, beforeEach, it } from '@jest/globals';
import { App } from './App';

const mockConfig: any = {
  someConfigField: 'test config',
};

const mockLogger: any = {
  conf: {
    info: jest.fn(),
  },
};

const mockMongoLib: any = {
  connect: jest.fn(),
  disconnect: jest.fn(),
};

describe('App', () => {
  let app: App;

  beforeEach(() => {
    app = new App(mockConfig, mockLogger, mockMongoLib);
  });

  it('should log a message and call mongo connect and disconnect', async () => {
    const consoleSpy = jest.spyOn(console, 'log');

    await app.sayHello();

    expect(consoleSpy).toHaveBeenCalledWith('Hello InversifyJS!');
    expect(mockLogger.conf.info).toHaveBeenCalledWith('show config from App: ', mockConfig);
    expect(mockMongoLib.connect).toHaveBeenCalled();
    expect(mockMongoLib.disconnect).toHaveBeenCalled();

    consoleSpy.mockRestore();
  });
});
