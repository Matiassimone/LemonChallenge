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
    return () => {};
  }

  return () => {
    console.log('\n<<< Start group >>>');
    error
      ? console.log(
          `[${serviceName.toUpperCase()}] ` + '\t%cSuccess ',
          'color: green;',
        )
      : console.log(
          `[${serviceName.toUpperCase()}] ` + '\t%cFail',
          'color: red;',
        );

    console.log('%cData', 'color: blue;', {
      data,
    });

    console.log('<<< End group >>>\n');
  };
};
