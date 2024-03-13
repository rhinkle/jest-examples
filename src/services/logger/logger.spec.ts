import logger from './logger';

const log = jest.spyOn(console, 'log').mockImplementation(() => {
  // Dont console out anything.
});

describe('Logger', () => {
  describe('log', () => {
    beforeEach(() => {
      log.mockClear();
    });

    afterEach(() => {
      log.mockReset();
    });

    it('should post a message to console log', () => {
      const message = 'Hello, world!';
      const data = { foo: 'bar' };
      logger.log(message, data);
      expect(log).toHaveBeenCalledWith(message, data);
    });

    it('should post a message to console log and only have one log', () => {
      const message = 'Today is a good day for a test';
      const data = { foo: 'We are the dreamers' };
      logger.log(message, data);
      expect(log).toHaveBeenCalledWith(message, data);
      // Without mockRest() in afterEach, this expect would fail.
      expect(log).toHaveBeenCalledTimes(1);
    });
  });
  describe('warn', () => {
    it('should post a message to console warn', () => {
      const message = 'Hello, world!';
      const data = { foo: 'bar' };
      const warn = jest.spyOn(console, 'warn').mockImplementation(() => {
        // Dont console out anything.
      });
      logger.warn(message, data);
      expect(warn).toHaveBeenCalledWith(message, data);
    });
  });
});
