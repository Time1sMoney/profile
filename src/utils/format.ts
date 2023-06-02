/**
 * 时间长度格式化函数
 * @param time 时间数值
 * @param timeUnit 时间单位，可选值：ms（毫秒）、us（微秒）、ns（纳秒）,默认为ms
 * @param digits 需要保留的小数位数，默认为2位小数
 * @returns formatted time
 */
export function formatTimeDuration(
  time: number,
  timeUnit: 'ms' | 'us' | 'ns' = 'ms',
  digits = 2
): string {
  let unit: string;
  let value: number;
  // 统一转为ms单位
  switch (timeUnit) {
    case 'ms':
      unit = 'ms';
      value = time;
      break;
    case 'us':
      unit = 'us';
      value = time / 1e3;
      break;
    case 'ns':
      unit = 'ns';
      value = time / 1e6;
      break;
    default:
      throw new Error(`Unsupported time unit: ${timeUnit}`);
  }
  if (value < 1) {
    if (unit === 'ns') {
      // ns转为us
      return `${(time / 1e3).toFixed(digits)}us`;
    } else {
      return `${time}${unit}`;
    }
  } else if (value >= 1 && value < 1000) {
    return `${value.toFixed(digits)}ms`;
  } else if (value >= 1000 && value < 60000) {
    return `${(value / 1000).toFixed(digits)}s`;
  } else if (value >= 60000 && value < 3600000) {
    return `${(value / 60000).toFixed(digits)}min`;
  } else {
    return `${(value / 3600000).toFixed(digits)}h`;
  }
}
