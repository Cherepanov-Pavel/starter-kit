<script lang="ts">
// import astroLogo from "../../assets/astro.svg";
// import background from "../../assets/background.svg";
</script>

<template>
	<div
		id="container"
	>
		<main>
			<section
				id="hero"
			>
				<h1>
					Для начала откройте каталог
					<code><pre>src/frameworks/vue/Welcome.vue</pre></code> в вашем
					проекте.
				</h1>
			</section>
		</main>
	</div>
</template>

<style>
#container {
	height: 100%;

	font-family:
		"Inter",
		"Roboto",
		"Helvetica Neue",
		"Arial Nova",
		"Nimbus Sans",
		"Arial",
		sans-serif;
}

main {
	display: flex;

	justify-content: center;

	height: 100%;
}

#hero {
	display: flex;

	flex-direction: column;
	align-items: start;
	justify-content: center;

	padding: 16px;
}

h1 {
	margin-top: 0.25em;

	font-size: 22px;
}

pre {
	margin: 0;

	font-family:
		ui-monospace,
		"Cascadia Code",
		"Source Code Pro",
		"Menlo",
		"Consolas",
		"DejaVu Sans Mono",
		monospace;
	font-weight: 400;

	background: linear-gradient(14deg, #d83333 0%, #f041ff 100%);
	background-clip: text;

	-webkit-text-fill-color: transparent;
}

code {
	display: inline-block;

	padding: 6px 8px;

	background:
		linear-gradient(66.77deg, #f3cddd 0%, #f5cee7 100%) padding-box,
		linear-gradient(155deg, #d83333 0%, #f041ff 18%, #f5cee7 45%) border-box;
	border: 1px solid transparent;
	border-radius: 8px;
}

@media screen and (width <= 768px) {
	#container {
		display: flex;

		flex-direction: column;
	}

	#hero {
		display: block;

		padding-top: 10%;
	}

	h1 {
		line-height: 1.5;
	}
}
</style>
