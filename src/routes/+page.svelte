<script>
    import StackCard from "../lib/components/stack-card.svelte";
</script>

<div class="justify-center text-center">
    <h1 class="text-4xl text-green m-4">Hi, I'm <b>Jake Jasmin</b></h1>
</div>

<div
    class="rounded bg-surface0 p-2 sm:p-4 mx-auto justify-center w-5/6 sm:w-3/4"
>
    <div class="justify-center text-center">
        <h1 class="text-text">My tech stack:</h1>
    </div>
    <div
        class="justify-center mx-auto p-2 sm:p-4 grid grid-cols-1 sm:grid-cols-3"
    >
        <StackCard title="Rust" bg_color="bg-red" img_url="rust.png">
            <p>
                Currently addicted to Rust. I <i>love</i> creating CLIs, TUIs, and
                websites with Rust! At work I've created multiple CLIs in Rust to
                help automate tasks and make key information more easily accessible.
            </p>
        </StackCard>
        <StackCard title="Linux" bg_color="bg-rosewater" img_url="linux.png">
            <p>
                Linux is home. I use Linux for ALL of my personal computers and
                I really wish I could use Linux at work. I've tried many
                different distros and desktop environments but I always come
                back to the Hyprland window manager on Arch linux.
            </p>
        </StackCard>
        <StackCard title="Helix" bg_color="bg-mauve" img_url="helix.png">
            <p>
                Currently addicted to Rust. I love creating CLIs, TUIs, and
                websites with Rust!
            </p>
        </StackCard>
        <StackCard title="Svelte" bg_color="bg-peach" img_url="svelte.png">
            <p>
                Svelte has been my main tool for learning web design. I find it
                to be very intuitive and simple to use. TailwindCSS is the CSS
                framework I've grown most used to in combination with Svelte.
            </p>
            <br />
            <p>
                I've combined Svelte with a Python FastAPI as well as a Rust
                backedn compiled to WebAssembly.
            </p>
        </StackCard>
        <StackCard title="Terraform" bg_color="bg-blue" img_url="terraform.png">
            <p>
                I utilize Terraform at work to deploy and manage infrastructure
                in Google Cloud Platform.
            </p>
        </StackCard>
        <StackCard title="Python" bg_color="bg-green" img_url="python.png">
            <p>
                Python helped kickstart my coding journey and was one of the
                first langauges I learned.
            </p>
            <p>
                Currently I use Python within Azure Pipelines and Jupyter
                Notebooks.
            </p>
        </StackCard>
    </div>
</div>
