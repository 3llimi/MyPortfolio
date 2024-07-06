<script lang="ts">
    import { onMount } from "svelte";
    import { writable } from "svelte/store";

    let currentIndex = writable(0);
    let interval: number;
    let carouselItems = [
        "/src/assets/image1.jpg",
        "/src/assets/image2.jpg",
        "/src/assets/image3.jpg",
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

<main>
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
                        <br /> A Tunisian Computer Science Student Currently Based
                        in Russia
                    </p>
                </div>
                <div class="about2">
                    <p>
                        I have a passion for anything related to computers, I
                        have been very active throughout the years of my high
                        school in my country Tunisia, Participated and numerous
                        hackathons and competitions.
                        <br />
                        I have acquired a number of skills throughout these years
                        along with opening in some other interests and fields such
                        as film making and photography.
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
                                src="\MyPortfolio\src\assets\icons\figma.svg"
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
                                src="\MyPortfolio\src\assets\icons\file-type-html.svg"
                                alt="HTML"
                                title="HTML"
                            />
                        </div>
                        <div class="square">
                            <img
                                src="\MyPortfolio\src\assets\icons\file-type-css.svg"
                                alt="CSS"
                                title="CSS"
                            />
                        </div>
                        <div class="square">
                            <img
                                src="\MyPortfolio\src\assets\icons\javascript-js.svg"
                                alt="JavaScript"
                                title="JavaScript"
                            />
                        </div>
                        <div class="square">
                            <img
                                src="\MyPortfolio\src\assets\icons\file-type-angular.svg"
                                alt="Angular"
                                title="Angular"
                            />
                        </div>
                        <div class="square">
                            <img
                                src="\MyPortfolio\src\assets\icons\react.svg"
                                alt="React"
                                title="React"
                            />
                        </div>
                        <div class="square">
                            <img
                                src="\MyPortfolio\src\assets\icons\file-type-typescript-official.svg"
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
                                src="\MyPortfolio\src\assets\icons\node-js.svg"
                                alt="NodeJS"
                                title="NodeJS"
                            />
                        </div>
                        <div class="square">
                            <img
                                src="\MyPortfolio\src\assets\icons\postgresql.svg"
                                alt="PostgreSQL"
                                title="PostgreSQL"
                            />
                        </div>
                        <div class="square">
                            <img
                                src="\MyPortfolio\src\assets\icons\file-type-mysql.svg"
                                alt="MySQL"
                                title="MySQL"
                            />
                        </div>
                        <div class="square">
                            <img
                                src="\MyPortfolio\src\assets\icons\mongodb-original.svg"
                                alt="MongoDB"
                                title="MongoDB"
                            />
                        </div>
                        <div class="square">
                            <img
                                src="\MyPortfolio\src\assets\icons\file-type-php.svg"
                                alt="PHP"
                                title="PHP"
                            />
                        </div>
                    </div>
                    <p class="techli"><span class="star">*</span>Programming</p>
                    <div class="skill-container">
                        <div class="square">
                            <img
                                src="\MyPortfolio\src\assets\icons\python.svg"
                                alt="Python"
                                title="Python"
                            />
                        </div>
                        <div class="square">
                            <img
                                src="\MyPortfolio\src\assets\icons\c-original.svg"
                                alt="C"
                                title="C"
                            />
                        </div>
                        <div class="square">
                            <img
                                src="\MyPortfolio\src\assets\icons\c-sharp-c.svg"
                                alt="C#"
                                title="C#"
                            />
                        </div>
                        <div class="square">
                            <img
                                src="\MyPortfolio\src\assets\icons\c.svg"
                                alt="C++"
                                title="C++"
                            />
                        </div>
                        <div class="square">
                            <img
                                src="\MyPortfolio\src\assets\icons\java-original.svg"
                                alt="Java"
                                title="Java"
                            />
                        </div>
                        <div class="square">
                            <img
                                src="\MyPortfolio\src\assets\icons\arduino.svg"
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
                                src="\MyPortfolio\src\assets\icons\adobe-lightroom.svg"
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
                        on:click={() => showSlide($currentIndex - 1)}
                        >&lt;</button
                    >
                    <button
                        class="carousel-button next"
                        on:click={() => showSlide($currentIndex + 1)}
                        >&gt;</button
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
                            <span class="star">*</span>Upside Education
                            HACKATHON
                        </h4>
                        <h5 class="role">
                            DESIGNER <span class="et-role">&</span> WEB DEVELOPER
                        </h5>
                    </li>
                    <li>
                        <p class="act4">Russian Federation 23' - 27'</p>
                        <h4 class="achiev-title">
                            <span class="star">*</span>Winner of The Full
                            Russian Government Scholarship<span class="star"
                                >*</span
                            >
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
    <section class="P5">
        <div>
            <div>
                <h1 class="getintouch">GET IN TOUCH</h1>
                <a id="email" href="mailto:3llimi69@gmail.com">
                    <h1 class="email">3llimi69@gmail.com</h1>
                </a>
                <h6 class="copyrights">
                    © 2024 Designed and Developed by Ahmed Baha Eddine Alimi
                </h6>
            </div>
        </div>
    </section>
</main>
