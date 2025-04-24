const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const PORT = 5050;

app.use(cors());

app.get("/api/menu/:restaurantId", async (req, res) => {
  const { restaurantId } = req.params;
  const menuUrl = `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=${restaurantId}`;
  try {
    const response = await axios.get(menuUrl, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.85 Safari/537.36",
        Accept: "application/json",
      },
    });
    res.json(response.data);
  } catch (err) {
    console.error("Error fetching Swiggy menu:", err.message);
    res.status(500).json({ error: "Failed to fetch menu data" });
  }
});

// Route to proxy Restaurant listing API
app.get("/api/restaurants", async (req, res) => {
  const url =
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
  try {
    const response = await axios.get(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.85 Safari/537.36",
        Accept: "application/json",
      },
    });
    res.json(response.data);
  } catch (err) {
    console.error("Error fetching Swiggy data:", err.message);
    res.status(500).json({ error: "Failed to fetch restaurants" });
  }
});

app.listen(PORT, () => {
  console.log(`Proxy server running on http://localhost:${PORT}`);
});
module.exports = app;