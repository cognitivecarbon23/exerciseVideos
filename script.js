const links = [
  {
    title: "Tibetan Arm Swing",
    url: "https://x.com/GraceGym_/status/1901870465385169016?s=19",
    description: "",
  },
  {
    title: "Tibetan Arm Swing 2",
    url: "https://x.com/GraceGym_/status/1900774450544476382?s=19",
    description: "",
  },
  {
    title: "Tai Chi 1",
    url: "https://youtu.be/qPzDq3EXiWM?si=WYCQegwqW8Q4B1km",
    description: "",
  },
  {
    title: "Favorite Arm Swing",
    url: "https://x.com/Earstohearyou/status/1900368148768981384?s=19",
    description: "",
  },
  {
    title: "Neck and Shoulders",
    url: "https://x.com/GraceGym_/status/1905570765023428810?s=19",
    description: "",
  },
];

const container = document.getElementById("linkContainer");

async function renderTiles() {
  for (const link of links) {
    const tile = document.createElement("div");
    tile.className = "tile";
    tile.innerHTML = `
        ${link.image ? `<img src="${link.image}" alt="Preview Image">` : ""}
        <div class="tile-content">
            <a href="${link.url}" target="_blank">${link.title}</a>
            <p>${link.description || "No description available"}</p>
        </div>
    `;
    container.appendChild(tile);
  }
}

renderTiles();
