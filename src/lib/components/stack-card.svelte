<script>
	export let title;
	export let link;
	export let bg_color;
	export let img_url;
</script>

<div class="rounded p-2 {bg_color} shadow-md shadow-crust m-2">
	<div class="flex border-b-2 border-surface0">
		<h2 class="flex-auto text-crust font-bold text-3xl m-2">
			<a href={link}>{title}</a>
		</h2>
		<img
			src={img_url}
			alt="img"
			class="max-h-12 max-w-12 right-0 flex-none"
		/>
	</div>
	<div class="p-2">
		<slot />
	</div>
</div>
