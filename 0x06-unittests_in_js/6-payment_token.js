//Async function

function getPaymentTokenFromAPI(success) {
  return new Promise((resolve) => {
    if (success) {
      resolve({data: 'Successful response from the API'});
	} else {
	  //do nothing
	}
  });
};

module.exports = getPaymentTokenFromAPI;
