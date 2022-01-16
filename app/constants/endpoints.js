export const COUNTRY_ENDPOINTS = {
  GET_COUNTRIES: 'https://api.covid19api.com/countries',
  GET_CASES_PER_COUNTRY: slug =>
    `https://api.covid19api.com/total/dayone/country/${slug}/status/confirmed`,
};

export const EMBED_HOPKINS_MAP = {
  GET_MAP_URI: (queryParamExtent, queryParamZoom, queryParamTheme) =>
    `https://www.arcgis.com/apps/Embed/index.html?webmap=14aa9e5660cf42b5b4b546dec6ceec7c&extent=${queryParamExtent}&zoom=${queryParamZoom}&previewImage=false&scale=false&disable_scroll=true&mapOnly=true&theme=${queryParamTheme}`,

  BASE_MAP_URI:
    'https://www.arcgis.com/apps/Embed/index.html?webmap=14aa9e5660cf42b5b4b546dec6ceec7c',
};
