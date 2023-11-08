<script>
    import StackCard from "../lib/components/stack-card.svelte";
</script>

<div class="justify-center text-center">
    <h1 class="text-4xl text-blue m-4">Hi, I'm Jake Jasmin</h1>
</div>

<div class="justify-center text-center">
    <h1 class="text-text">My tech stack:</h1>
</div>
<div class="justify-center mx-auto p-4 grid grid-cols-3 w-3/4">
    <StackCard title="Rust" />
    <StackCard title="Svelte" />
    <StackCard title="Terraform" />
    <StackCard title="Python" />
    <StackCard title="Stuff" />
    <StackCard title="Other things" />
</div>
