# Mocking Logging with jest

## TLDR;

Dont spend too much time testing your logger, do enough to get the "confidence" you need and to support your others tests. jest.spyOn() is a good enough "solve" for validating logs in other tests.

```typescript
const log = jest.spyOn(console, 'log').mockImplementation(() => {
  // do nothing
});
```

---

## Details

I find these tests to be less than satisfactory. Nonetheless, conducting them may prove valuable to verify that the `logger.log` method is invoked with the appropriate arguments.

This approach involves mocking the `console.log` function, a strategy I'm hesitant to endorse. Should `Logger.ts` shift to a different logging method, this test would erroneously report success.

If you do need to test the logger, I recommend using `jest.spyOn` to mock the `console.log` method. This approach allows you to verify that the `logger.log` method is invoked with the appropriate arguments. Its also quick and easy to implement.
