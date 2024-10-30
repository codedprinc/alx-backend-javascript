const Utils = require("./utils");

const sendPaymentRequestToApi = (totalAmount, totalShipping) => {
  const totalSent = Utils.calculateNumber("SUM", totalAmount, totalShipping);
  console.log(`The total is: ${totalSent}`);
  return totalSent;
};

module.exports = sendPaymentRequestToApi;
