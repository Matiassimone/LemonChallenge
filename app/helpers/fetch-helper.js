import {devLogger} from '../services/log-service';

/**
 *
 */
export const easyFetch = async (uri, method = 'GET', params) => {
  try {
    const response = await fetch(uri, {
      method,
      ...params,
    });

    if (response.ok) {
      const json = await response.json();
      devLogger(`Fetching ${uri}`, json, false);

      return json;
    } else {
      devLogger(
        `Fetching ${uri}`,
        `Error status code: ${response.status}`,
        true,
      );
    }
  } catch (err) {
    devLogger(`Fetching ${uri}`, err, true);
  }
};
