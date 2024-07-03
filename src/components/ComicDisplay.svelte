<script lang="ts">
    export let comicData: {
        safe_title: string;
        img: string;
        alt: string;
        year: number;
        month: number;
        day: number;
    };
</script>

<div id="comic">
    <div class="comic-title">{comicData.safe_title}</div>
    <img src={comicData.img} alt={comicData.alt} />
    <div class="comic-date">
        Published on: {new Date(
            comicData.year,
            comicData.month - 1,
            comicData.day,
        ).toLocaleDateString()}
    </div>
    <div class="since">
        Published since: {new Date().getFullYear() - comicData.year} Years
    </div>
</div>
