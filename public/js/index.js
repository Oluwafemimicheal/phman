const loading = document.getElementById("loading");

window.addEventListener("load", () => {
  loading.style.display = "none";
});

setTimeout(() => {
  loading.innerHTML =
    "<h1 class='error-message'>Please check your network or <br> refresh this page!</h1>";
}, 2000);
