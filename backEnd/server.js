const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const PORT = 3001;

// Enable CORS for all origins
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.get("/api/photo-gallery-feed-page/page/:pageNumber", async (req, res) => {
  const { pageNumber } = req.params;

  try {
    const apiUrl = `https://englishapi.pinkvilla.com/app-api/v1/photo-gallery-feed-page/page/${pageNumber}`;
    const response = await axios.get(apiUrl);
    console.log(pageNumber);

    // Send the API response back to the client
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching articles:", error);
    res.status(500).json({ error: "Error fetching articles" });
  }
});

app.listen(PORT, () => {
  console.log(`Proxy server running on http://localhost:${PORT}`);
});
