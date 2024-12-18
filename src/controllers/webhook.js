const { sendMessage } = require(".././services/messenger");
const { VERIFY_TOKEN } = require("../../config/config");

// Webhook verification logic (GET request)
exports.verifyWebhook = (req, res) => {
  const mode = req.query["hub.mode"];
  const challenge = req.query["hub.challenge"];
  const verify_token = req.query["hub.verify_token"];

  if (mode && verify_token === VERIFY_TOKEN) {
    res.status(200).send(challenge); // Respond with the challenge if the token matches
  } else {
    res.status(403).send("Verification failed"); // Invalid token
  }
};

// Handle incoming webhook events (POST request)
exports.handleWebhookEvent = (req, res) => {
  const body = req.body;

  if (body.object === "page") {
    body.entry.forEach((entry) => {
      entry.messaging.forEach((message) => {
        const senderId = message.sender.id;
        if (message.message && message.message.text) {
          const receivedMessage = message.message.text;

          // Send a response to the user
          sendMessage(senderId, `You said: ${receivedMessage}`);
        }
      });
    });

    res.status(200).send("EVENT_RECEIVED");
  } else {
    res.status(404).send("Event not handled");
  }
};
