// Here we are mapping the data from the "api/folder"
const API_DATA = {
  'PLAYERS/GET-ALL': 'players/get-all',
  'PLAYERS/GET-BY-ID': 'players/get-by-id',
};

// This is meant to be used throught the project (so everywhere BUT on the "pages/api" folder)
export const fetchSportmonksApiClient = async <QueryParameters>(
  path: keyof typeof API_DATA,
  queryParams?: QueryParameters
) => {
  const baseUrl = '/api/sportmonks';
  const urlPath = API_DATA[path];
  const queryParameters =
    queryParams &&
    Object.entries(queryParams as any)
      .map(([key, value]) => `${key}=${value}`)
      .join('&');

  const apiKey = '9QudD8bREVydDeSDCCkPHerTQ3TrzmbP0YCOJqTmc0C37eLwRFVYSx7SExnA'; // TODO: TO REMOVE
  const url = `${baseUrl}/${urlPath}?api_token=${apiKey}&${queryParameters}`;

  return await fetch(url).then(response => response.json());
};
