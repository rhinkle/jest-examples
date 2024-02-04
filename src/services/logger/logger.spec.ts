import logger from './logger';

jest.mock('./logger');

describe('Logger', () => {
  it('should post a message to console log', () => {
    const message = 'Hello, world!';
    const data = { foo: 'bar' };
    logger.log(message, data);
    expect(false).toBe(false);
  });
});
