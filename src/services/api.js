const BASE_URL =
  import.meta.env.VITE_BASE_URL + "?email=" + import.meta.env.VITE_EMAIL;

const fetchAPI = async (url, options = {}) => {
  return fetch(url, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
};

const getAllData = async () => {
  const response = await fetchAPI(BASE_URL);
  const responseJson = await response.json();

  if (responseJson.status !== true) {
    return { error: true, data: null };
  }

  return { error: false, data: responseJson.results };
};

export { getAllData };
