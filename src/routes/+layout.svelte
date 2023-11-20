<script>
    import "../app.css";
    import { fade } from "svelte/transition";

    export let data;

    let class_unselected =
        "text-text p-2 font-bold hover:bg-blue hover:text-crust hover:rounded-t";
    let class_selected =
        "bg-blue rounded-t text-crust p-2 font-bold hover:bg-blue hover:rounded-t";
</script>

<div class="flex border-b-2 border-blue top-0 left-0 sticky bg-base">
    <ul class={data.pathname == "/" ? class_selected : class_unselected}>
        <a href="/">Home</a>
    </ul>
    <ul class={data.pathname == "/about" ? class_selected : class_unselected}>
        <a href="/about">About</a>
    </ul>
    <ul
        class={data.pathname == "/projects" ? class_selected : class_unselected}
    >
        <a href="/projects">Projects</a>
    </ul>
</div>
{#key data.pathname}
    <div in:fade={{ duration: 300, delay: 400 }} out:fade={{ duration: 300 }}>
        <slot />
    </div>
{/key}
