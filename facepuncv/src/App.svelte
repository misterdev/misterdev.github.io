<script>
	import Inventory from './inventory/Inventory.svelte'
	import Crafting from './crafting/Crafting.svelte'
	export let name;
	// let src = 'https://sveltejs.github.io/assets/caminandes-llamigos.mp4'
	let src = 'https://video.xx.fbcdn.net/v/t42.9040-2/68135311_2342255342534112_4239331015497089024_n.mp4?_nc_cat=108&efg=eyJ2ZW5jb2RlX3RhZyI6InN2ZV9zZCJ9&_nc_oc=AQnD8UbJiLvZ7DpjjSWnxGYR_HSynb8VXzKOwyjkyvpEW_NiLXnDJqGTFA5FGj6Go4E&_nc_ht=video-mxp1-1.xx&oh=70776a3ab340b170f6c9e49d80f9fce7&oe=5D98ECE8'
	let selected = Crafting
</script>

<div class="wrapper">
	<div class="overlay"></div>
	<video {src} autoplay loop muted/>
	<div id="content">
		<svelte:component this={selected} />
	</div>
</div>

<style>
	.wrapper {
		width: 100vw;
		height: 100vh;
		display: flex;
		align-items: center;
	}
	.overlay {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: white;
		opacity: 0;
	}
	video {
		width: 100%;
		filter: blur(8px);
		-webkit-filter: blur(8px);
	}

	#content {
		position: fixed;
		width: 100vw;
		height: calc(100vw / 16 * 9);
		/* background-color: blue;
		opacity: .8; */
	}
</style>