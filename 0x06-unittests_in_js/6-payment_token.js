function getPaymentTokenFromAPI(success) {
  if (success) {
    return Promise.resolve({ data: 'Successful response from the API' });
  }
  // When success is false, return nothing (undefined)
}

module.exports = getPaymentTokenFromAPI;
