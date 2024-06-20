document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel');
    const carouselItems = document.querySelectorAll('.carousel-item');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');

    let currentIndex = 0;

    function showSlide(index) {
        if (index < 0) {
            currentIndex = carouselItems.length - 1;
        } else if (index >= carouselItems.length) {
            currentIndex = 0;
        } else {
            currentIndex = index;
        }
        carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    prevButton.addEventListener('click', () => {
        showSlide(currentIndex - 1);
    });

    nextButton.addEventListener('click', () => {
        showSlide(currentIndex + 1);
    });

    // Optional: auto-slide
    setInterval(() => {
        showSlide(currentIndex + 1);
    }, 5000);
});

document.getElementById("comicBtn").addEventListener('click', () => {
    const email = 'a.alimi@innopolis.university'; 
    const url = new URL('https://fwd.innopolis.university/api/hw2');
    url.search = new URLSearchParams({ email });

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Network response was not ok: ${response.statusText}`);
            }
            return response.json();
        })
        .then(data => {
            const comicId = data;
            if (!comicId) {
                throw new Error('Comic ID not found in the response');
            }
            return fetch(`https://fwd.innopolis.university/api/comic?id=${comicId}`);
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`Network response was not ok: ${response.statusText}`);
            }
            return response.json();
        })
        .then(comicData => {
            console.log('Comic data:', comicData);
            displayComic(comicData);
        })
        .catch(error => {
            console.error('Error fetching comic:', error);
        });

    function displayComic(comic) {
        const comicContainer = document.getElementById('comic');
        while (comicContainer.firstChild) {
            comicContainer.removeChild(comicContainer.firstChild);
        }

        const comicTitle = document.createElement('div');
        comicTitle.classList.add('comic-title');
        comicTitle.textContent = comic.safe_title;

        const comicImage = document.createElement('img');
        comicImage.src = comic.img;
        comicImage.alt = comic.alt;

        const comicDate = document.createElement('div');
        comicDate.classList.add('comic-date');
        const date = new Date(comic.year, comic.month - 1, comic.day);
        let currYear = new Date().getFullYear();
        const since = currYear - comic.year;
        console.log(since)
        comicDate.textContent = `Published on: ${date.toLocaleDateString()}`;
        const age = document.createElement('div');
        age.classList.add('since');

        age.textContent = `Published since: ${since} Years`;

        comicContainer.appendChild(comicTitle);
        comicContainer.appendChild(comicImage);
        comicContainer.appendChild(comicDate);
        comicContainer.appendChild(age);

    }
});