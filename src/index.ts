import { Comic } from './interfaces';
import { formatDistance } from 'date-fns';

document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel') as HTMLElement;
    const carouselItems = document.querySelectorAll('.carousel-item');
    const prevButton = document.querySelector('.prev') as HTMLElement;
    const nextButton = document.querySelector('.next') as HTMLElement;

    let currentIndex = 0;

    function showSlide(index: number) {
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

    setInterval(() => {
        showSlide(currentIndex + 1);
    }, 5000);
});

document.getElementById("comicBtn")?.addEventListener('click', () => {
    const email: string = 'a.alimi@innopolis.university';
    const params = new URLSearchParams({ email });

    const url = `https://fwd.innopolis.university/api/hw2?${params.toString()}`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Network response was not ok: ${response.statusText}`);
            }
            return response.json();
        })
        .then((data: string) => {
            const comicId: string = data;
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
        .then((comic: Comic) => {
            console.log('Comic data:', comic);
            displayComic(comic);
        })
        .catch(error => {
            console.error('Error fetching comic:', error);
        });

    function displayComic(comic: Comic) {
        const comicContainer = document.getElementById('comic');
        if (!comicContainer) return;

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
        const currentDate = new Date();
        const formattedDate = formatDistance(date, currentDate, { addSuffix: true });

        comicDate.textContent = `Published ${formattedDate}`;
        comicContainer.appendChild(comicTitle);
        comicContainer.appendChild(comicImage);
        comicContainer.appendChild(comicDate);
    }
});
