<script>
    import StackCard from "../lib/components/stack-card.svelte";
</script>

<div
    class="bg-blue rounded justify-center text-center flex mx-auto m-6 p-6 sm:w-1/2"
>
    <div class="flex-auto">
        <h1 class="text-2xl sm:text-4xl text-crust">Hi, I'm</h1>
        <h1 class="text-4xl sm:text-6xl text-crust flex-none">
            <b>Jake Jasmin</b>
        </h1>
        <p class="text-crust mt-5">"I'm in all the movies!"</p>
    </div>
    <img
        src="jake.png"
        class="rounded-full max-w-40 max-h-40 float-right flex-none"
    />
</div>

<div class="rounded bg-surface0 sm:p-4 mx-auto justify-center sm:w-5/6">
    <div
        class="justify-center text-center bg-overlay0 rounded w-1/3 mx-auto mb-2"
    >
        <h1 class="text-text font-bold underline p-2">My tech stack</h1>
    </div>
    <div class="justify-center mx-auto grid grid-cols-1 sm:grid-cols-3">
        <StackCard
            title="Rust"
            link="https://www.rust-lang.org/"
            bg_color="bg-red"
            img_url="rust.png"
        >
            <p>
                Currently addicted to Rust. I <i>love</i> creating CLIs, TUIs, and
                websites with Rust! At work I've created multiple CLIs in Rust to
                help automate tasks and make key information more easily accessible.
            </p>
        </StackCard>
        <StackCard
            title="Linux"
            link="https://archlinux.org/"
            bg_color="bg-rosewater"
            img_url="linux.png"
        >
            <p>
                Linux is home. I use Linux for ALL of my personal computers and
                I really wish I could use Linux at work. I've tried many
                different distros and desktop environments but I always come
                back to the <a href="https://hyprland.org/" class="underline"
                    >Hyprland
                </a>window manager on Arch linux.
            </p>
        </StackCard>
        <StackCard
            title="Helix"
            link="https://helix-editor.com/"
            bg_color="bg-mauve"
            img_url="helix.png"
        >
            <p>
                Helix is my current text editor of choice. It is similar to
                Vim/Neovim in the sense that it is a modal editor that utilizes
                vim motions. Helix takes a slightly different approach with its
                command patterns, allows for multi-cursor, and - most
                importantly - is written in Rust!
            </p>
            <p>
                If you leave the terminal or touch your mouse you've already
                lost!
            </p>
        </StackCard>
        <StackCard
            title="Svelte"
            link="https://svelte.dev/"
            bg_color="bg-peach"
            img_url="svelte.png"
        >
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
        <StackCard
            title="Terraform"
            link="https://www.terraform.io/"
            bg_color="bg-blue"
            img_url="terraform.png"
        >
            <p>
                I utilize Terraform at work to deploy and manage infrastructure
                in Google Cloud Platform.
            </p>
            <p>
                I have experience using both Terraform Enterprise (TFE) and
                Terraform Open Source (TFO).
            </p>
        </StackCard>
        <StackCard
            title="Python"
            link="https://www.python.org/"
            bg_color="bg-green"
            img_url="python.png"
        >
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
