// netlify/functions/webhook.js
const { handleWebhook } = require("../../src/controllers/webhook");

exports.handler = async (event, context) => {
  if (event.httpMethod === "POST") {
    return handleWebhook(event);
  }

  return {
    statusCode: 405,
    body: JSON.stringify({ message: "Method Not Allowed" }),
  };
};
