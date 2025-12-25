function hearts(e) {
  for (let i = 0; i < 12; i++) {
    const heart = document.createElement("div");
    heart.className = "heart";
    document.body.appendChild(heart);

    const x = e.clientX + (Math.random() * 60 - 30);
    const y = e.clientY + (Math.random() * 60 - 30);

    heart.style.left = x + "px";
    heart.style.top = y + "px";

    setTimeout(() => heart.remove(), 1600);
  }
}
