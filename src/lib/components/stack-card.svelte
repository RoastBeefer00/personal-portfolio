<script>
	export let title;
	export let bg_color;
	export let img_url;

	let title_class = "rounded flex p-2 mb-4 " + bg_color;
	let body_class = "rounded p-4 " + bg_color;
</script>

<div class="rounded bg-overlay1 p-4 m-2 shadow-md shadow-overlay0">
	<div class={title_class}>
		<h2 class="flex-auto text-surface0 font-bold text-3xl m-2">
			{title}
		</h2>
		<img
			src={img_url}
			alt="img"
			class="max-h-12 max-w-12 right-0 flex-none"
		/>
	</div>
	<div class={body_class}>
		<slot />
	</div>
</div>
