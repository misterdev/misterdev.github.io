<script>
	export let name;
	let src = 'https://sveltejs.github.io/assets/caminandes-llamigos.mp4'
</script>

<style>
	.wrapper {
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
	}
	video {
		width: 100%;
	}
</style>

<div class="wrapper">
	<video {src} autoplay/>
</div>
