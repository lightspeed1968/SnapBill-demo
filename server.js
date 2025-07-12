const express = require('express');
const path = require('path');
const app = express();
app.use(express.json());

// Serve the frontend
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Handle simulated email delivery
app.post('/send', (req, res) => {
  console.log("✅ Email sent to:", req.body.email);
  console.log("🧾 Invoice content:", req.body.content);
  res.sendStatus(200);
});

app.listen(3000, () => {
  console.log("✅ SnapBill backend running");
});
