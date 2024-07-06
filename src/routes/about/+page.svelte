<script lang="ts">
    import { onMount } from "svelte";
    import { writable } from "svelte/store";

    let currentIndex = writable(0);
    let interval: number;
    let carouselItems = [
        "./src/assets/image1.jpg",
        "./src/assets/image2.jpg",
        "./src/assets/image3.jpg",
    ];
    let carouselElement: HTMLDivElement;

    onMount(() => {
        interval = setInterval(() => {
            currentIndex.update((n) => (n + 1) % carouselItems.length);
        }, 5000);

        return () => clearInterval(interval);
    });

    function showSlide(index: number) {
        currentIndex.update(() => {
            if (index < 0) {
                return carouselItems.length - 1;
            } else if (index >= carouselItems.length) {
                return 0;
            } else {
                return index;
            }
        });
    }
</script>

<div class="P1">
    <div class="overlay">
        <div class="credit">
            <p>Shot in Innopolis University's Robotics Lab: By Me</p>
        </div>
        <div>
            <div class="profile">
                <div class="header">
                    <div class="name">
                        <p>Alimi <br /> Ahmed Baha Eddine</p>
                    </div>
                    <div class="edu">
                        <p>
                            Comp Sci Student <br />At Innopolis University
                        </p>
                    </div>
                </div>
                <div class="circular--portrait">
                    <img src="./src/assets/profile.jpg" alt="" class="ppic" />
                </div>
            </div>
        </div>
        <div class="links">
            <a
                href="https://www.upwork.com/freelancers/~01fe9779aa20ade317?mp_source=share"
            >
                <div class="circle" id="upwork">
                    <i class="fa-brands fa-upwork"></i>
                </div>
            </a>
            <a id="tg-link" href="https://t.me/Allimi3">
                <div class="circle" id="telegram">
                    <i class="fa-brands fa-telegram"></i>
                </div>
            </a>
            <a href="https://www.behance.net/bahaallimi1">
                <div class="circle" id="behance">
                    <i class="fa-brands fa-behance"></i>
                </div>
            </a>
            <a id="gh-link" href="https://github.com/3llimi">
                <div class="circle" id="github">
                    <i class="fa-brands fa-github"></i>
                </div>
            </a>
            <a href="https://www.instagram.com/3llimi/">
                <span class="circle" id="instagram"
                    ><i class="fa-brands fa-instagram"></i></span
                >
            </a>
            <a href="https://www.linkedin.com/in/ahmed-baha-eddine-alimi/">
                <span class="circle" id="linkedin"
                    ><i class="fa-brands fa-linkedin-in"></i></span
                >
            </a>
        </div>
    </div>
</div>
<section class="P2">
    <div class="about-container">
        <div class="about-header">
            <h1>ABOUT ME</h1>
        </div>
        <div class="about-content">
            <span class="quote">”</span>
            <div class="about1">
                <p>
                    I am <strong>Ahmed Baha Eddine</strong>, You can call me
                    <strong>Baha</strong>
                    for short.
                    <br /> A Tunisian Computer Science Student Currently Based in
                    Russia
                </p>
            </div>
            <div class="about2">
                <p>
                    I have a passion for anything related to computers, I have
                    been very active throughout the years of my high school in
                    my country Tunisia, Participated and numerous hackathons and
                    competitions.
                    <br />
                    I have acquired a number of skills throughout these years along
                    with opening in some other interests and fields such as film
                    making and photography.
                </p>
            </div>
            <span class="quote">“</span>
        </div>
    </div>
</section>
<section class="P3">
    <div>
        <div class="skills">
            <h1>
                <span class="skill">SKILLS </span><br />
                <span class="et">&</span><br />
                <span class="technologies">TECHNOLOGIES</span>
            </h1>
        </div>
    </div>
    <div class="tech">
        <h3 class="techtitle">Tech</h3>
        <div>
            <div class="techlist">
                <p class="techli">
                    <span class="star">*</span>UI/UX Design
                </p>
                <div class="skill-container">
                    <div class="square">
                        <img
                            src="./src/assets/icons/figma.svg"
                            alt="Figma"
                            title="Figma"
                        />
                    </div>
                </div>
                <p class="techli">
                    <span class="star">*</span>Front-End Development
                </p>
                <div class="skill-container">
                    <div class="square">
                        <img
                            src="./src/assets/icons/file-type-html.svg"
                            alt="HTML"
                            title="HTML"
                        />
                    </div>
                    <div class="square">
                        <img
                            src="./src/assets/icons/file-type-css.svg"
                            alt="CSS"
                            title="CSS"
                        />
                    </div>
                    <div class="square">
                        <img
                            src="./src/assets/icons/javascript-js.svg"
                            alt="JavaScript"
                            title="JavaScript"
                        />
                    </div>
                    <div class="square">
                        <img
                            src="./src/assets/icons/file-type-angular.svg"
                            alt="Angular"
                            title="Angular"
                        />
                    </div>
                    <div class="square">
                        <img
                            src="./src/assets/icons/react.svg"
                            alt="React"
                            title="React"
                        />
                    </div>
                    <div class="square">
                        <img
                            src="./src/assets/icons/file-type-typescript-official.svg"
                            alt="TypeScript"
                            title="TypeScript"
                        />
                    </div>
                </div>
                <p class="techli">
                    <span class="star">*</span>Back-End Development
                </p>
                <div class="skill-container">
                    <div class="square">
                        <img
                            src="./src/assets/icons/node-js.svg"
                            alt="NodeJS"
                            title="NodeJS"
                        />
                    </div>
                    <div class="square">
                        <img
                            src="./src/assets/icons/postgresql.svg"
                            alt="PostgreSQL"
                            title="PostgreSQL"
                        />
                    </div>
                    <div class="square">
                        <img
                            src="./src/assets/icons/file-type-mysql.svg"
                            alt="MySQL"
                            title="MySQL"
                        />
                    </div>
                    <div class="square">
                        <img
                            src="./src/assets/icons/mongodb-original.svg"
                            alt="MongoDB"
                            title="MongoDB"
                        />
                    </div>
                    <div class="square">
                        <img
                            src="./src/assets/icons/file-type-php.svg"
                            alt="PHP"
                            title="PHP"
                        />
                    </div>
                </div>
                <p class="techli"><span class="star">*</span>Programming</p>
                <div class="skill-container">
                    <div class="square">
                        <img
                            src="./src/assets/icons/python.svg"
                            alt="Python"
                            title="Python"
                        />
                    </div>
                    <div class="square">
                        <img
                            src="./src/assets/icons/c-original.svg"
                            alt="C"
                            title="C"
                        />
                    </div>
                    <div class="square">
                        <img
                            src="../src/assets/icons/c-sharp-c.svg"
                            alt="C#"
                            title="C#"
                        />
                    </div>
                    <div class="square">
                        <img
                            src="./src/assets/icons/c.svg"
                            alt="C++"
                            title="C++"
                        />
                    </div>
                    <div class="square">
                        <img
                            src="./src/assets/icons/java-original.svg"
                            alt="Java"
                            title="Java"
                        />
                    </div>
                    <div class="square">
                        <img
                            src="./src/assets/icons/arduino.svg"
                            alt="Arduino"
                            title="Arduino"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="photo">
        <h3 class="phototitle">
            Also I Like <span class="photography">Photography</span>
        </h3>
        <div>
            <div class="photolist">
                <p class="photoli">
                    <span class="star">*</span>Image Editing
                </p>
                <div class="art-container">
                    <div class="square">
                        <img
                            src="./src/assets/icons/adobe-lightroom.svg"
                            alt="Lightroom"
                            title="Lightroom"
                        />
                    </div>
                </div>
            </div>
            <div class="carousel-container">
                <div class="carousel" bind:this={carouselElement}>
                    {#each carouselItems as item, index (item)}
                        <div
                            class="carousel-item"
                            style="transform: translateX({-100 *
                                $currentIndex}%);"
                        >
                            <img
                                src={item}
                                alt="Image{index + 1}"
                                class="carousel-img"
                            />
                        </div>
                    {/each}
                </div>
                <button
                    class="carousel-button prev"
                    on:click={() => showSlide($currentIndex - 1)}>&lt;</button
                >
                <button
                    class="carousel-button next"
                    on:click={() => showSlide($currentIndex + 1)}>&gt;</button
                >
            </div>
            <div>
                <p class="credits">Shot & Edited By Me</p>
            </div>
        </div>
    </div>
</section>
<section class="P4">
    <div>
        <div class="projects">
            <h1>
                <span class="project">PROJECTS </span><br />
                <span class="et">&</span><br />
                <span class="achievments">ACHIEVEMENTS</span>
            </h1>
        </div>
        <div class="achiev-container">
            <ul>
                <li>
                    <p class="act1">MentorNations 20' - 21'</p>
                    <h4 class="achiev-title">
                        <span class="star">*</span>IOT4TUNISIA BOOTCAMP
                    </h4>
                    <h5 class="role">
                        DESIGNER <span class="et-role">&</span> WEB DEVELOPER
                    </h5>
                </li>
                <li>
                    <p class="act2">MentorNations 22'</p>
                    <h4 class="achiev-title">
                        <span class="star">*</span>HackUrWaste HACKATHON
                    </h4>
                    <h5 class="role">MENTOR</h5>
                </li>
                <li>
                    <p class="act3">GOMYCODE 22'</p>
                    <h4 class="achiev-title">
                        <span class="star">*</span>Upside Education HACKATHON
                    </h4>
                    <h5 class="role">
                        DESIGNER <span class="et-role">&</span> WEB DEVELOPER
                    </h5>
                </li>
                <li>
                    <p class="act4">Russian Federation 23' - 27'</p>
                    <h4 class="achiev-title">
                        <span class="star">*</span>Winner of The Full Russian
                        Government Scholarship<span class="star">*</span>
                    </h4>
                    <h5 class="role">
                        CURRENTLY A COMPUTER SCIENCE STUDENT IN INNOPOLIS
                        UINVERSITY
                    </h5>
                </li>
                <li>
                    <p class="act5">Session 22' & 23'</p>
                    <h4 class="achiev-title">
                        <span class="star">*</span>LIGHTS CAMERA LEARN
                    </h4>
                    <h5 class="role">
                        BTS PHOTOGRAPHER <span class="et-role">&</span> VIDEOGRAPHER
                    </h5>
                </li>
            </ul>
        </div>
    </div>
</section>

<style>
    .P1 {
        background-image: url("./src/assets/bgimage.jpg");
        background-size: cover;
        background-position: center;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .overlay {
        position: relative;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.33);
        display: flex;
        align-items: center;
        justify-content: center;
    }

    a {
        text-decoration: none;
    }

    #upwork:hover {
        background-color: #73bb44;
        width: 75px;
        height: 75px;
    }

    #upwork:hover .fa-upwork {
        color: white;
        transform: scale(2);
        transition: 0.8s;
    }

    #telegram:hover {
        background-color: #2aabee;
        width: 75px;
        height: 75px;
    }

    #telegram:hover .fa-telegram {
        color: white;
        transform: scale(4);
        transition: 0.8s;
    }

    #behance:hover {
        background-color: #000000;
        width: 75px;
        height: 75px;
    }

    #behance:hover .fa-behance {
        color: white;
        transform: scale(2);
        transition: 0.8s;
    }

    #github:hover {
        background-color: #000000;
        width: 75px;
        height: 75px;
    }

    #github:hover .fa-github {
        color: white;
        transform: scale(4);
        transition: 0.8s;
    }

    #instagram:hover {
        background-color: #ee2a7b;
        width: 75px;
        height: 75px;
    }

    #instagram:hover .fa-instagram {
        color: white;
        transform: scale(3.5);
        transition: 0.8s;
    }

    #linkedin:hover {
        background-color: #0077b5;
        width: 75px;
        height: 75px;
    }

    #linkedin:hover .fa-linkedin-in {
        color: white;
        transform: scale(3);
        transition: 0.8s;
    }

    .credit {
        position: absolute;
        font-family: "Satoshi", sans-serif;
        color: #ffffff;
        top: 0;
        right: 0;
        margin-right: 25px;
        font-weight: 400;
    }

    .profile {
        display: flex;
        align-items: center;
        gap: 50px;
    }

    .name {
        font-family: "Satoshi", sans-serif;
        color: #ffffff;
        font-size: 8em;
        text-align: left;
        margin-left: 20px;
        font-weight: 500;
        line-height: 1;
    }

    .edu {
        font-family: "Satoshi", sans-serif;
        color: #ffffff;
        font-size: 3rem;
        text-align: center;
        font-weight: 500;
        margin-top: -150px;
        line-height: 1.1;
    }

    .header {
        display: flex;
        flex-direction: column;
    }

    .circular--portrait {
        position: relative;
        width: 500px;
        height: 500px;
        overflow: hidden;
        border-radius: 50%;
    }

    .circular--portrait img {
        width: 100%;
        height: auto;
        margin-top: -125px;
    }

    .links {
        position: absolute;
        bottom: 100px;
        left: 50%;
        border-radius: 39px;
        transform: translateX(-50%);
        background-color: #505050;
        opacity: 75%;
        width: 500px;
        height: 75px;
        display: flex;
        align-items: center;
        justify-content: space-around;
        text-align: center;
        padding: 0 15px;
    }

    .circle {
        width: 50px;
        height: 50px;
        background-color: #d9d9d9;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        transition:
            width 1s,
            height 1s;
    }

    .circle:hover {
        cursor: pointer;
        transition: 0.5s;
    }

    .fa-upwork {
        color: #73bb44;
        transform: scale(1.5);
        transition: transform 1s;
    }

    .fa-telegram {
        color: #2aabee;
        transform: scale(2);
        transition: transform 1s;
    }

    .fa-behance {
        color: #000000;
        transform: scale(1.5);
        transition: transform 1s;
    }

    .fa-github {
        color: #000000;
        transform: scale(2);
        transition: transform 1s;
    }

    .fa-instagram {
        color: #ee2a7b;
        transform: scale(2);
        transition: transform 1s;
    }

    .fa-linkedin-in {
        color: #0077b5;
        transform: scale(1.5);
        transition: transform 1s;
    }

    .P2 {
        background-color: black;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        flex-direction: column;
    }

    .P3 {
        background-color: #e7e7e7;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        flex-direction: column;
    }

    .P4 {
        background-color: black;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        flex-direction: column;
    }

    .about-container {
        display: flex;
        width: 100%;
        padding: 0 50px;
        box-sizing: border-box;
    }

    .about-header {
        color: #ffffff;
        font-family: "Satoshi", sans-serif;
        font-size: 3.5em;
        text-align: left;
        flex: 1;
        align-self: flex-start;
        position: absolute;
        top: 50px;
    }

    .about-content {
        color: #ffffff;
        font-family: "Satoshi", sans-serif;
        font-size: 1.5em;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        flex: 2;
        padding-left: 50px;
        padding-top: 20px;
        padding-bottom: 20px;
    }

    .about1 {
        font-size: 2.2rem;
        font-weight: 500;
        margin-bottom: -30px;
    }

    .about2 {
        font-size: 1.261rem;
        margin-top: 0;
    }

    .quote {
        font-size: 10rem;
        color: #ffffff;
        position: absolute;
    }

    .quote:first-of-type {
        top: 300px;
        left: 200px;
    }

    .quote:last-of-type {
        bottom: 125px;
        right: 200px;
    }

    .skills {
        text-align: center;
        font-family: "Satoshi", sans-serif;
        color: #000;
        line-height: 50px;
        flex: 1;
        position: absolute;
        top: 50px;
        right: 100px;
    }

    .skill {
        font-size: 3em;
        font-weight: 1000;
    }

    .technologies {
        font-size: 1.8em;
        font-weight: 700;
    }

    .et {
        font-size: 2.8em;
        font-weight: 100;
        font-style: italic;
    }

    .tech {
        font-family: "Satoshi", sans-serif;
        color: #000;
        top: 100px;
        position: absolute;
        left: 100px;
    }

    .techtitle {
        font-size: 2.8em;
        font-weight: 900;
        font-style: italic;
    }

    .photoli {
        font-size: 2.8em;
        font-weight: 500;
        margin: 0;
        margin-left: 40px;
    }

    .techli {
        font-size: 2.8em;
        font-weight: 500;
        margin: 0;
    }

    .star {
        font-size: 4rem;
        font-weight: 900;
    }

    .skill-container {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .square {
        width: 50px;
        height: 50px;
        background-color: #1e1e1e;
        margin-left: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 25%;
    }

    .square img {
        width: 30px;
        height: 30px;
    }

    .photo {
        font-family: "Satoshi", sans-serif;
        color: #000;
        top: 100px;
        position: absolute;
        right: 600px;
    }

    .phototitle {
        font-size: 2.8em;
        font-weight: 900;
        font-style: italic;
    }

    .photography {
        background: -webkit-linear-gradient(
            0deg,
            rgba(171, 16, 16, 1) 20%,
            rgba(198, 92, 92, 1) 56%
        );
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    .photolist {
        list-style-type: none;
        text-align: center;
        top: 80px;
        left: 50px;
        position: absolute;
    }

    .art-container {
        display: flex;
        flex-direction: row;
        align-items: center;
        left: 165px;
        position: absolute;
    }

    .carousel-container {
        position: relative;
        width: 400px;
        max-width: 400px;
        margin: 0 auto;
        top: 100px;
        left: 12.5px;
        overflow: hidden;
    }

    .carousel {
        display: flex;
        transition: transform 0.5s ease-in-out;
    }

    .carousel-item {
        min-width: 100%;
        box-sizing: border-box;
    }

    .carousel-img {
        width: 100%;
        display: block;
    }

    .carousel-button {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        background-color: rgba(0, 0, 0, 0.5);
        color: white;
        border: none;
        padding: 10px;
        cursor: pointer;
    }

    .prev {
        left: 10px;
    }

    .next {
        right: 10px;
    }

    .credits {
        color: #000;
        position: absolute;
        top: 640px;
        left: 300px;
        font-family: "Satoshi", sans-serif;
        font-style: italic;
    }

    .projects {
        text-align: center;
        font-family: "Satoshi", sans-serif;
        color: white;
        line-height: 50px;
        flex: 1;
        position: absolute;
        top: 50px;
        left: 100px;
    }

    .project {
        font-size: 3em;
        font-weight: 1000;
    }

    .achievments {
        font-size: 1.8em;
        font-weight: 700;
    }

    .achiev-container {
        display: flex;
        flex-direction: column;
        font-family: "Satoshi", sans-serif;
        color: white;
        text-align: center;
        line-height: 0px;
    }

    .achiev-title {
        font-size: 2.5em;
        font-weight: 400;
    }

    .role {
        font-weight: 700;
        font-size: 1em;
    }

    .et-role {
        font-weight: 100;
        font-style: italic;
    }

    .act1 {
        right: 515px;
        top: 115px;
        position: absolute;
        font-weight: 100;
    }

    .act2 {
        right: 535px;
        top: 255px;
        position: absolute;
        font-weight: 100;
    }

    .act3 {
        right: 515px;
        top: 400px;
        position: absolute;
        font-weight: 100;
    }

    .act4 {
        right: 250px;
        top: 530px;
        position: absolute;
        font-weight: 100;
    }

    .act5 {
        right: 570px;
        top: 685px;
        position: absolute;
        font-weight: 100;
    }

    ul {
        list-style: none;
    }

    .P4 .achiev-container li {
        margin: 80px;
    }
</style>
