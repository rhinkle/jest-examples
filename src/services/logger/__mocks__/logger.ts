import { ILogRecord } from '../logger';

console.log('mocked logger');

const logRecordLog: ILogRecord[] = [];
const logRecordWarn: ILogRecord[] = [];

function log(message: string, data: any) {
  logRecordLog.push({ message, data });
  return logRecordLog;
}

function warn(message: string, data: any) {
  logRecordWarn.push({ message, data });
  return logRecordWarn;
}

function _resetAllRecords(): void {
  logRecordLog.length = 0;
  logRecordWarn.length = 0;
}

function _getLogRecord(logType: string): Array<ILogRecord> {
  if (logType === 'log') {
    return logRecordLog;
  } else if (logType === 'warn') {
    return logRecordWarn;
  }
  return [];
}

export default { log, warn, _resetAllRecords, _getLogRecord };
