export interface ILogRecord {
  message: string;
  data: unknown;
}

function log(message: string, data: unknown) {
  console.log(message, data);
}

function warn(message: string, data: unknown) {
  console.warn(message, data);
}
export default { log, warn };
