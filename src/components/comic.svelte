<script lang="ts">
    import { createEventDispatcher } from "svelte";
    import ComicDisplay from "./ComicDisplay.svelte";

    const dispatch = createEventDispatcher();

    interface ComicData {
        safe_title: string;
        img: string;
        alt: string;
        year: number;
        month: number;
        day: number;
    }

    let comicData: ComicData | null = null;
    let showComic: boolean = false;

    async function fetchComic() {
        const email = "a.alimi@innopolis.university";
        try {
            const response = await fetch(
                `https://fwd.innopolis.university/api/hw2?email=${encodeURIComponent(email)}`,
            );
            if (!response.ok) {
                throw new Error(
                    `Network response was not ok: ${response.statusText}`,
                );
            }
            const data = await response.json();
            const comicId = data;
            if (!comicId) {
                throw new Error("Comic ID not found in the response");
            }
            const comicResponse = await fetch(
                `https://fwd.innopolis.university/api/comic?id=${comicId}`,
            );
            if (!comicResponse.ok) {
                throw new Error(
                    `Network response was not ok: ${comicResponse.statusText}`,
                );
            }
            comicData = await comicResponse.json();
            displayComic(comicData);
        } catch (error) {
            console.error("Error fetching comic:", error);
        }
    }

    function displayComic(comic: ComicData) {
        dispatch("comicLoaded", { comic });
        showComic = true;
    }
</script>

<main>
    <div class="comic-container">
        <button class="showBtn" on:click={fetchComic}>COMIC</button>
    </div>
    <div class="comic-container">
        {#if showComic && comicData}
            <ComicDisplay {comicData} />
        {:else if !showComic}
            <p>Click the button to load a comic.</p>
        {:else}
            <p>Loading...</p>
        {/if}
    </div>
</main>
