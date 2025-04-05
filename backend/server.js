import express from "express";
import urlMetadata from "url-metadata";
import cors from "cors";
import fetch from "node-fetch"; // node-fetch imported as ES module

const app = express();

app.use(cors());

app.get("/metadata", async (req, res) => {
  const url = req.query.url;
  try {
    const response = await fetch(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
      },
    });
    const html = await response.text();
    console.log("Raw HTML:", html.substring(0, 500));

    const metadata = await urlMetadata(url, {
      requestHeaders: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
      },
      timeout: 20000,
    });
    console.log("Raw metadata:", metadata);

    const result = {
      title: metadata["og:title"] || metadata["title"] || "",
      description: metadata["og:description"] || metadata["description"] || "",
      image: metadata["og:image"] || metadata["image"] || "",
    };
    console.log("Processed metadata:", result);
    res.json(result);
  } catch (error) {
    console.error("Metadata fetch error:", error);
    res
      .status(500)
      .json({ error: "Failed to fetch metadata", details: error.message });
  }
});

app.listen(3003, () => {
  console.log("Server running on http://localhost:3003");
});
