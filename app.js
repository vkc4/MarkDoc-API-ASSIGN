const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Routes
app.get("/api/create-checkout-session", (req, res) => {
  // Implement your logic for creating checkout session
  res.status(200).json({
    apikey: "string",
  });
});

app.get("/api/make_toingg", (req, res) => {
  // Implement your logic for making toingg
  res.status(200).json({
    id: 173,
    message: "Toingg created successfully",
  });
});

app.get("/api/make_toingg_details", (req, res) => {
  // Implement your logic for making toingg details
  res.status(200).json({
    campaignName: "string",
    campaignScript: "string",
    name: "string",
    phoneNumber: "string",
  });
});

app.get("/api/make_batch_toingg", (req, res) => {
  // Implement your logic for making batch toingg
  res.status(200).json({
    campaign: "string",
    numberList: [
      {
        clientName: "string",
        clientNumber: "string",
      },
    ],
  });
});

app.get("/api/hang_up_call", (req, res) => {
  // Implement your logic for hanging up call
  res.status(200).json({
    detail: [
      {
        loc: ["parameter_name", 0],
        msg: "Validation error message",
        type: "validation_error",
      },
    ],
  });
});

app.get("/api/send_sms", (req, res) => {
  // Implement your logic for sending SMS
  res.status(200).json({
    name: "string",
    phoneNumber: "string",
    message: "string",
  });
});

app.get("/api/webhook", (req, res) => {
  // Implement your logic for webhook
  res.status(200).json({
    response: "string",
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
