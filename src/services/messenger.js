const axios = require("axios");
const { PAGE_ACCESS_TOKEN } = require("../../config/config");

// Send a message to the user using the Send API
exports.sendMessage = (recipientId, messageText) => {
  const url = `https://graph.facebook.com/v12.0/me/messages?access_token=${PAGE_ACCESS_TOKEN}`;

  const messageData = {
    recipient: { id: recipientId },
    message: { text: messageText },
  };

  axios
    .post(url, messageData)
    .then((response) => {
      console.log("Message sent:", response.data);
    })
    .catch((error) => {
      console.error("Error sending message:", error);
    });
};
