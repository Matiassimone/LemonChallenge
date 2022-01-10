const NODE_COLORS = {
  Reset: '\x1b[0m',

  FgBlack: '\x1b[30m',
  FgRed: '\x1b[31m',
  FgGreen: '\x1b[32m',
  FgYellow: '\x1b[33m',
  FgBlue: '\x1b[34m',
  FgMagenta: '\x1b[35m',
  FgCyan: '\x1b[36m',
  FgWhite: '\x1b[37m',

  BgBlack: '\x1b[40m',
  BgRed: '\x1b[41m',
  BgGreen: '\x1b[42m',
  BgYellow: '\x1b[43m',
  BgBlue: '\x1b[44m',
  BgMagenta: '\x1b[45m',
  BgCyan: '\x1b[46m',
  BgWhite: '\x1b[47m',
};

const colorString = (color, string) => {
  return `${color.join('')}${string}${NODE_COLORS.Reset}`;
};

const colorLog = (color, ...args) => {
  console.log(
    ...args.map(arg =>
      typeof arg === 'string' ? colorString(color, arg) : arg,
    ),
  );
};

/**
 * Logguer that only shows messages into the consele if the app is running into __DEV__ mode.
 * ---
 * @param {String} serviceName
 * @param {Any} data
 * @param {Boolean} error
 * @returns Function
 */
export const devLogger = (serviceName, data, error = false) => {
  if (!__DEV__) {
    return;
  }

  colorLog(
    [NODE_COLORS.BgBlack, NODE_COLORS.FgYellow],
    '>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>',
  );
  error
    ? colorLog(
        [NODE_COLORS.BgBlack, NODE_COLORS.FgRed],
        `${serviceName} ` + '[ FAIL ]',
      )
    : colorLog(
        [NODE_COLORS.BgBlack, NODE_COLORS.FgGreen],
        `${serviceName} ` + '[ SUCCESS ]',
      );

  console.log('\n');

  colorLog([NODE_COLORS.FgCyan], 'Data', data);

  console.log('\n');
};
