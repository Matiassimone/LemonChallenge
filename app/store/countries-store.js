import create from 'zustand';

import {getPublicItem, setPublicItem} from '../services/public-storage-service';
import {SELECTED_COUNTRY} from '../constants/storage-keys';

import {COUNTRY_ENDPOINTS} from '../constants/endpoints';

import {easyFetch} from '../helpers/fetch-helper';
import {sortArrayOfObjects} from '../helpers/services-helper';

export const useCountriesStorage = create((set, get) => ({
  countries: [],
  selectedCountry: {},

  fetchStorageData: async () => {
    const selectedCountry = await getPublicItem(SELECTED_COUNTRY);

    selectedCountry
      ? set({selectedCountry: selectedCountry})
      : set({
          selectedCountry: {},
        });
  },

  fetchCountries: async () => {
    const json = easyFetch(COUNTRY_ENDPOINTS.GET_COUNTRIES);
    json.then(countries => {
      const sortedCountries = sortArrayOfObjects(countries, 'Country');
      set({countries: sortedCountries});
    });
  },

  selectCountry: async country => {
    set({selectCountry: country});
    setPublicItem(SELECTED_COUNTRY, country);
  },
}));
