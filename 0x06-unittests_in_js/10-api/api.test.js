const request = require('request');
const { expect } = require('chai');

describe('API integration test', () => {
  const API_URL = 'http://localhost:7865';

  // Test for GET / exists and returns correct message
  describe('GET /', () => {
    it('should return "Welcome to the payment system"', (done) => {
      request.get(API_URL, (error, response, body) => {
        expect(response.statusCode).to.equal(200);
        expect(body).to.equal('Welcome to the payment system');
        done();
      });
    });
  });

  // Test suite for GET /cart/:id
  describe('GET /cart/:id', () => {
    it('should return payment methods for valid cart ID', (done) => {
      const cartId = 12;
      request.get(`${API_URL}/cart/${cartId}`, (error, response, body) => {
        expect(response.statusCode).to.equal(200);
        expect(body).to.equal(`Payment methods for cart ${cartId}`);
        done();
      });
    });

    it('should fail with non-numeric cart ID', (done) => {
      request.get(`${API_URL}/cart/abc`, (error, response, body) => {
        expect(response.statusCode).to.equal(404);
        done();
      });
    });
  });

  // Test suite for GET /available_payments
  describe('GET /available_payments', () => {
    it('should return payment methods object', (done) => {
      request.get(`${API_URL}/available_payments`, (error, response, body) => {
        expect(response.statusCode).to.equal(200);
        const expectedPaymentMethods = {
          payment_methods: {
            credit_cards: true,
            paypal: false
          }
        };
        expect(JSON.parse(body)).to.deep.equal(expectedPaymentMethods);
        done();
      });
    });
  });

  // Test suite for POST /login
  describe('POST /login', () => {
    it('should return welcome message with username', (done) => {
      const options = {
        url: `${API_URL}/login`,
        json: {
          userName: 'Betty'
        }
      };
      request.post(options, (error, response, body) => {
        expect(response.statusCode).to.equal(200);
        expect(body).to.equal('Welcome Betty');
        done();
      });
    });
  });
});
