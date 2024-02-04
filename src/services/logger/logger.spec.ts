import logger from './logger';
// TLDR: dont spend too much time testing your logger, do enough to get the "confidence" you need and also support your others tests. jest.spyOn() is a good enough "solve" for validating logs in other tests.

// This mocks the implementation of console.log. I dont like to mock implementation of console.log. In the event that Logger.ts changes to use a different method to log, the test will still pass. This is not a great test, but it might be worth it to test that the logger.log method is called with the correct arguments.

// This test gives confidence that the logger.log method is called with the correct arguments. Console.log is a hard dependency and should be mocked. This test is a good example of a test that is worth writing, even though it is not a great test.

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
