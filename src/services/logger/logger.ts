export interface ILogRecord {
  message: string;
  data: any;
}

function log(message: string, data: any) {
  console.log(message, data);
}

function warn(message: string, data: any) {
  console.warn(message, data);
}
export default { log, warn };
