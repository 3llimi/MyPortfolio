<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	interface ComicData {
		safe_title: string;
		img: string;
		alt: string;
		year: number;
		month: number;
		day: number;
		// Exclude id property if it's not part of your ComicData structure
	}

	let comicData: ComicData | null = null;
	let showComic: boolean = false;
	let loading: boolean = false;
	let error: string | null = null;

	async function fetchComic() {
		const email = 'a.alimi@innopolis.university';
		try {
			loading = true;
			const response = await fetch(
				`https://fwd.innopolis.university/api/hw2?email=${encodeURIComponent(email)}`
			);
			if (!response.ok) {
				throw new Error(`Network response was not ok: ${response.statusText}`);
			}
			const data = await response.json();
			const comicId = data;
			if (!comicId) {
				throw new Error('Comic ID not found in the response');
			}
			const comicResponse = await fetch(`https://fwd.innopolis.university/api/comic?id=${comicId}`);
			if (!comicResponse.ok) {
				throw new Error(`Network response was not ok: ${comicResponse.statusText}`);
			}
			comicData = await comicResponse.json();
			if (comicData) {
				displayComic(comicData);
			} else {
				throw new Error('Comic data not found in the response');
			}
		} catch (error) {
			console.error('Error fetching comic:', error);
			error = 'Failed to fetch comic.';
		} finally {
			loading = false;
		}
	}

	function displayComic(comic: ComicData) {
		dispatch('comicLoaded', { comic });
		showComic = true;
	}
</script>

<div class="comic">
	<div class="comic-container">
		<button class="showBtn" on:click={fetchComic} disabled={loading}>
			{loading ? 'Loading...' : 'Fetch Comic'}
		</button>
		{#if error}
			<p>{error}</p>
		{/if}
	</div>
	<div class="comic-container">
		{#if showComic && comicData}
			<div id="comic">
				<div class="comic-title">{comicData.safe_title}</div>
				<img src={comicData.img} alt={comicData.alt} />
				<div class="comic-date">
					Published on: {new Date(
						comicData.year,
						comicData.month - 1,
						comicData.day
					).toLocaleDateString()}
				</div>
				<div class="since">
					Published since: {new Date().getFullYear() - comicData.year}
					Years
				</div>
			</div>
		{:else if !showComic && !loading}
			<p>Click the button to load a comic.</p>
		{:else}
			<p>Loading...</p>
		{/if}
	</div>
</div>

<style>
	.comic {
		height: 100vh;
	}
	p {
		font-size: 1.5em;
		font-family: 'Satoshi', sans-serif;
	}
	.comic-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 20px;
	}

	#comic {
		display: flex;
		flex-direction: column;
		align-items: center;
		max-width: 600px;
		text-align: center;
	}

	#comic img {
		max-width: 100%;
		height: auto;
	}

	#comic .comic-title {
		font-size: 1.5em;
		font-family: 'Satoshi', sans-serif;
		font-weight: 900;
		color: black;
		margin: 10px 0;
	}

	#comic .comic-date,
	#comic .since {
		font-size: 1em;
		color: gray;
		font-family: 'Satoshi', sans-serif;
		font-weight: 500;
	}

	.showBtn {
		background-color: white;
		font-family: 'Satoshi', sans-serif;
		font-weight: 900;
		color: black;
		font-size: 20px;
		text-align: center;
		width: 150px;
		height: 50px;
		border-radius: 45px;
		cursor: pointer;
	}

	.showBtn:hover {
		background-color: gray;
		transition: 0.8s;
	}
</style>
