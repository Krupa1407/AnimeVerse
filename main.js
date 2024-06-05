
const myHeaders = new Headers();
myHeaders.append("x-apihub-key", "UmNBQiWYnFhntLaB08dHhKda0n-FXcNm35eGqGFKIoPYMNhDJK");
myHeaders.append("x-apihub-host", "AnimeList-API.allthingsdev.co");

const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow"
};

fetch("https://AnimeList-API.proxy-production.allthingsdev.co/v4/anime?q=Naruto", requestOptions)
    .then((response) => response.json())
    .then((result) => {
        const animeContainer = document.getElementById("anime-container");
        result.data.forEach(anime => {
            const animeCard = document.createElement("div");
            animeCard.className = "anime-card";

            const animeImg = document.createElement("img");
            animeImg.src = anime.images.jpg.image_url;
            animeImg.alt = anime.title;

            const animeInfo = document.createElement("div");
            animeInfo.className = "anime-info";

            const animeTitle = document.createElement("h3");
            animeTitle.textContent = anime.title;

            const animeSynopsis = document.createElement("p");
            animeSynopsis.textContent = anime.synopsis ? anime.synopsis : "No synopsis available.";

            const readMoreBtn = document.createElement("a");
            readMoreBtn.className = "read-more-btn";
            readMoreBtn.textContent = "Read More";
            readMoreBtn.href = "#";
            readMoreBtn.addEventListener("click", (e) => {
                e.preventDefault();
                if (animeSynopsis.style.maxHeight === "60px") {
                    animeSynopsis.style.maxHeight = "none";
                    readMoreBtn.textContent = "Show Less";
                } else {
                    animeSynopsis.style.maxHeight = "60px";
                    readMoreBtn.textContent = "Read More";
                }
            });

            animeInfo.appendChild(animeTitle);
            animeInfo.appendChild(animeSynopsis);
            animeInfo.appendChild(readMoreBtn);

            animeCard.appendChild(animeImg);
            animeCard.appendChild(animeInfo);
            animeContainer.appendChild(animeCard);
        });
    })
    .catch((error) => console.error(error));