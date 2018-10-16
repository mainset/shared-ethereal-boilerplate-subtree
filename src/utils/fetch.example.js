/*
  Data downloading using pure JS fetch
  @type: JS object
  { result: resultObj, error: errorObj }
*/

const API_HOST = 'https://httpbin.org';

const clone = (obj) => (
  JSON.parse(JSON.stringify(obj))
);

// NOTE: add some default options like headers here
const defaultRequestOptions = {
  headers: {
    // 'Content-Type': 'application/json',
  },
};

// eslint-disable-next-line import/prefer-default-export
export function fetchRequest(path, customOptions) {
  const options = Object.assign(clone(defaultRequestOptions), customOptions);
  const request = new Request(`${API_HOST}${path}`, options);

  return fetch(request)
    .then((response) => (
      response.json().then((result) => ({ result }))
    ))
    .catch((error) => ({ error }));
}

export default fetchRequest;
