function playMusic() {
  document.getElementById("bg-music").play();
}

function loadPage(page) {
  fetch(page + ".html")
    .then(res => res.text())
    .then(data => {
      const app = document.getElementById("app");
      app.innerHTML = data;

      // ✅ wait for DOM, then run animation
      if (page === "flower") {
        setTimeout(() => {
          const el = document.getElementById("flower-page");
          if (el) {
            el.classList.remove("container");
          }
        }, 50);
      }
    })
    .catch(err => console.log(err));
}
