<script>
    import "../app.css";
    import { fade } from "svelte/transition";

    export let data;
    let selected = 0;

    let class_unselected =
        "text-text p-2 font-bold hover:bg-sapphire hover:text-crust hover:rounded-t";
    let class_selected =
        "bg-blue rounded-t text-crust p-2 font-bold hover:bg-sapphire hover:rounded-t";
</script>

<div class="flex border-b-2 border-blue top-0 left-0 sticky bg-base">
    <ul class={selected == 0 ? class_selected : class_unselected}>
        <a href="/" on:click={() => (selected = 0)}>Home</a>
    </ul>
    <ul class={selected == 1 ? class_selected : class_unselected}>
        <a href="/projects" on:click={() => (selected = 1)}>Projects</a>
    </ul>
</div>
{#key data.pathname}
    <div in:fade={{ duration: 300, delay: 400 }} out:fade={{ duration: 300 }}>
        <slot />
    </div>
{/key}
