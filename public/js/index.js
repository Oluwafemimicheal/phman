const loading = document.getElementById("loading");
const youtubeFullscreen = document.getElementById("youtube-fullscreen");

setTimeout(() => {
  loading.innerHTML =
    "<h1 class='error-message'>Please check your network or <br> refresh this page!</h1>";
}, 10000);

window.addEventListener("load", () => {
  loading.style.display = "none";
});

//youtubeFullscreen.requestFullscreen();
