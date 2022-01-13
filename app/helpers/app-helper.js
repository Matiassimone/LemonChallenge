import {useSignStore} from '../store/sign-store';
import * as signSelectors from '../selectors/sign-selectors';

import {useThemeStorage} from '../store/color-theme-store';
import * as colorThemeSelectors from '../selectors/theme-selectors';

import {useCountriesStorage} from '../store/countries-store';
import * as countriesSelectors from '../selectors/countries-selectors';

import {devLogger} from '../services/log-service';

export const useInitAllStorages = () => {
  const fetchSignStorageData = useSignStore(signSelectors.fetchStorageData);
  const googleSignConfig = useSignStore(signSelectors.googleSignConfig);

  const fetchColorStorageData = useThemeStorage(
    colorThemeSelectors.fetchStorageData,
  );

  const fetchCountriesStorageData = useCountriesStorage(
    countriesSelectors.fetchStorageData,
  );
  const fetchCountries = useCountriesStorage(countriesSelectors.fetchCountries);

  Promise.all([
    fetchSignStorageData(),
    googleSignConfig(),

    fetchColorStorageData(),

    fetchCountriesStorageData(),
    fetchCountries(),
  ])
    .then(() => {
      devLogger('useInitAllStorages', 'App loaded succesfully..', false);
    })
    .catch(() => {
      devLogger('useInitAllStorages', 'App loaded fail..', true);
    });
};
