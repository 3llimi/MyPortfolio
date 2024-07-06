<nav>
    <div class="nav">
        <h1 class="titles">
            <a href="/about">HOME</a>
        </h1>
        <h1 class="titles">
            <a href="/comic">COMIC</a>
        </h1>
    </div>
</nav>
<slot />
<footer class="P5">
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
</footer>

<style>
    .nav {
        display: flex;
        flex-direction: row;
        column-gap: 20px;
        font-family: "Satoshi", sans-serif;
        font-weight: 900;
        justify-content: center;
        justify-self: center;
        background-color: black;
    }
    .titles {
        color: white;
        transition: color 0.5s ease-in-out;
    }
    .titles:hover {
        color: orange;
    }
    a {
        text-decoration: none;
        color: inherit;
    }
    .getintouch {
        font-family: "Satoshi", sans-serif;
        font-weight: 1000;
    }

    .copyrights {
        font-family: "Satoshi", sans-serif;
        font-weight: 400;
        font-style: italic;
    }

    .email {
        font-family: "Satoshi", sans-serif;
        font-weight: 900;
        margin: 30px;
        color: black;
        font-size: 1em;
    }
    .P5 {
        background-color: #e7e7e7;
        height: 15vh;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        flex-direction: column;
        text-align: center;
        line-height: 1px;
    }
</style>
