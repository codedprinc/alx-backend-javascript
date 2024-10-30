const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  it('should return a successful response from the API when success is true', (done) => {
    getPaymentTokenFromAPI(true)
      .then((response) => {
        expect(response).to.deep.equal({ data: 'Successful response from the API' });
        done();
      })
      .catch((error) => {
        done(error);  // Call done with error if promise rejects
      });
  });

  it('should return undefined when success is false', (done) => {
    const result = getPaymentTokenFromAPI(false);
    expect(result).to.equal(undefined);
    done();
  });
});
