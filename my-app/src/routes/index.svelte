<script context="module">
	//export const prerender = true;
</script>

<script>
	import Counter from '$lib/Counter.svelte';

	async function onSubmit(e) {
		const formData = new FormData(e.target);
		const data = {};
		for (let field of formData) {
			const [key, value] = field;
			data[key] = value;
		}
		console.log('formData: ' + formData);
		const res = await fetch('/', {
			method: 'POST',
			body: JSON.stringify(data)
		});
		const json = await res.json();
		result = JSON.stringify(json);
	}
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<h1>
		<span class="welcome">
			<picture>
				<source srcset="svelte-welcome.webp" type="image/webp" />
				<img src="svelte-welcome.png" alt="Welcome" />
			</picture>
		</span>

		to your new<br />SvelteKit app
	</h1>
	<form on:submit|preventDefault={onSubmit}>
		<label for="name">Name</label>
		<input type="text" name="name" id="name" />
		<label for="author">Author</label>
		<input type="text" name="author" id="author" />
		<button type="submit">Submit</button>
	</form>

	<h2>
		try editing <strong>src/routes/index.svelte</strong>
	</h2>

	<Counter />
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}

	h1 {
		width: 100%;
	}

	.welcome {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}
</style>
