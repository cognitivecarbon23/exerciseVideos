const links = [
  {
    title: "Tibetan Arm Swing",
    url: "https://x.com/GraceGym_/status/1901870465385169016?s=19",
  },
];

const container = document.getElementById("linkContainer");
links.forEach((link) => {
  const tile = document.createElement("div");
  tile.className = "tile";
  tile.innerHTML = `<a href="${link.url}" target="_blank">${link.title}</a>`;
  container.appendChild(tile);
});
