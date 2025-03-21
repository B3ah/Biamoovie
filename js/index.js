document.addEventListener("DOMContentLoaded", async () => {
    setTimeout(() => {
        toggleLoading();
    }, 2000);

    let trendingContainer = document.querySelector("#trendingMovies");
    trendingContainer.innerHTML = "";
    for (let i = 1; i <= 20; i++) {
        trendingContainer.innerHTML += `<a href='detalhes.html?id=${i}'>
                <img src="img/posters/${i}.jpg" alt="${i}">
                </a>`;
    }
});

const containerTredingMovies = document.getElementById("trendingMovies");

let scrollIntervalTredingMovies;
let scrollDirectionTregindMovies;

containerTredingMovies.addEventListener("mousemove", (e) => {
    const boundingRect = containerTredingMovies.getBoundingClientRect();
    const mouseX = e.clientX;

    const threshold = 200;

    if (mouseX < boundingRect.left + threshold) {
        scrollDirectionTregindMovies = -1;
        containerTredingMovies.style.cursor = "url('/img/arrow-left.png'), auto";
    } else if (mouseX > boundingRect.right - threshold) {
        scrollIntervalTredingMovies = 1;
        containerTredingMovies.style.cursor = "url('/img/arrow-right.png'), auto";
    } else {
        scrollDirectionTregindMovies = 0;
        containerTredingMovies.style.cursor = "pointer";
    }
});

containerTredingMovies.addEventListener("mouseleave", () => {
    scrollIntervalTredingMovies = 0;
    containerTredingMovies.style.cursor = "pointer";
});

function autoScrollTrendingMovies() {
    if (scrollDirectionTregindMovies !== 0) {
        containerTredingMovies.scrollLeft += scrollDirectionTregindMovies * 6;
    }
}

scrollIntervalTredingMovies = setInterval(autoScrollTrendingMovies, 16);
