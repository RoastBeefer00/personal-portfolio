<script type="module">
    import { onMount } from 'svelte';
    import init from './wasm/bevy_snake.js'

    onMount(() => init().catch((error) => {
      if (!error.message.startsWith("Using exceptions for control flow, don't mind me. This isn't actually an error!")) {
        throw error;
      }
    }));
    
</script>

<canvas class="mt-14 mx-auto w-[800px] h-[800px]" id="snake-canvas"></canvas>
