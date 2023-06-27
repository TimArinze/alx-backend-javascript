export default function handleResponseFromAPI(promise) {
  const thepromise = new Promise((resolve) => {
    resolve(promise);
  });
  return thepromise.then(() => ({
    status: 200,
    body: 'success',
  }))
    .catch(() => Error())
    .finally(() => console.log('Got a response from the API'));
}
