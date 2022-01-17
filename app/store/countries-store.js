import create from 'zustand';

import {getPublicItem, setPublicItem} from '../services/public-storage-service';
import {SELECTED_COUNTRY} from '../constants/storage-keys';

import {COUNTRY_ENDPOINTS} from '../constants/endpoints';

import {easyFetch} from '../helpers/fetch-helper';
import {sortArrayOfObjects} from '../helpers/services-helper';

const selectedCountryCasesModel = {
  Country: '',
  CountryCode: '',
  Province: '',
  City: '',
  CityCode: '',
  Lat: '',
  Lon: '',
  Cases: 0,
  Status: '',
  Date: '',
};

const selectedCountryModel = {
  Country: '',
  ISO2: '',
  Slug: '',
};

export const useCountriesStorage = create((set, get) => ({
  countries: [selectedCountryModel],
  selectedCountry: selectedCountryModel,
  selectedCountryCases: [selectedCountryCasesModel],

  fetchStorageData: async () => {
    const fetchSelectedCountryCases = get().fetchSelectedCountryCases;
    const fetchCountries = get().fetchCountries;

    const selectedCountry = await getPublicItem(SELECTED_COUNTRY);
    await fetchCountries();

    selectedCountry
      ? set({selectedCountry: selectedCountry})
      : set({
          selectedCountry: {
            Country: 'ALA Aland Islands',
            ISO2: 'AX',
            Slug: 'ala-aland-islands',
          },
        });

    await fetchSelectedCountryCases();
  },

  fetchCountries: async () => {
    const json = easyFetch(COUNTRY_ENDPOINTS.GET_COUNTRIES);
    json.then(countries => {
      const sortedCountries = sortArrayOfObjects(countries, 'Country');
      set({countries: sortedCountries});
    });
  },

  fetchSelectedCountryCases: async () => {
    const selectedCountry = get().selectedCountry;
    const json = easyFetch(
      COUNTRY_ENDPOINTS.GET_CASES_PER_COUNTRY(selectedCountry.Slug),
    );

    set({selectedCountryCases: await json});
  },

  selectCountry: async country => {
    set({selectedCountry: country});

    const json = await easyFetch(
      COUNTRY_ENDPOINTS.GET_CASES_PER_COUNTRY(country.Slug),
    );
    set({selectedCountryCases: await json});

    setPublicItem(SELECTED_COUNTRY, country);
  },
}));
