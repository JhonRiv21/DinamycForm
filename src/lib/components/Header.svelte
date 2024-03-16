<script lang="ts">
    import { onMount, tick } from 'svelte';
    import { LogoDinamyc } from "$lib/index";

    export let logins: boolean = false;
    export let redirectUrl = '#';

    let menuOpen = false;
    let isOn = false;

    onMount(async () => {
        const isDarkMode = localStorage.getItem('darkMode') === 'true';
        document.documentElement.classList.toggle('dark', isDarkMode);
        isOn = isDarkMode;
        await tick();
    });

    function toggleDarkMode() {
        const isDarkMode = document.documentElement.classList.toggle('dark');
        localStorage.setItem('darkMode', String(isDarkMode));
        isOn = isDarkMode;
    }

    function toggleMenu() {
        menuOpen = !menuOpen;
    }
</script>

<header class="w-full bg-blackdinamyc dark:bg-whitedinamyc py-6 md:py-4 px-5 sm:px-10 border-b border-whitedinamyc dark:border-blackdinamyc">
    <div class="w-full max-w-screen-2xl mx-auto flex flex-row justify-between items-center">

        <a href={redirectUrl} class="flex flex-row items-center">
            <figure>
                <img class="w-[75%]" src={LogoDinamyc} alt="DinamycForm">
            </figure>
            <h1 class="text-whitedinamyc dark:text-blackdinamyc text-3xl font-extrabold -ml-3">DinamycForm</h1>
        </a>

        <div class="md:hidden">
            <button on:click={toggleMenu}>
                <span class="material-symbols-outlined text-whitedinamyc dark:text-blackdinamyc">menu</span>
            </button>
        </div>

        <div class="hidden md:flex flex-row gap-3">
            <span class="material-symbols-outlined text-whitedinamyc dark:text-blackdinamyc">dark_mode</span>    
            <button
                class={`w-12 h-6 flex items-center ${
                    isOn ? 'bg-blackdinamyc' : 'bg-gray-300'
                } rounded-full p-1 duration-300 ease-in-out ${
                    isOn ? 'justify-end' : 'justify-start'
                }`}
                on:click={toggleDarkMode}>
                <div class="w-4 h-4 bg-white rounded-full shadow"></div>
            </button>
            <span class="material-symbols-outlined text-whitedinamyc dark:text-blackdinamyc">brightness_7</span>
        </div>

        {#if logins}
        <div class="hidden md:block space-x-2">
            <a href="/create-account" class="text-whitedinamyc dark:text-blackdinamyc hover:text-whitedinamyc text-xl font-extrabold hover:bg-green rounded-md px-5 py-3 duration-1000">Sign Up</a>
            <a href="/login" class="text-whitedinamyc text-xl font-extrabold bg-green rounded-md px-5 py-3 duration-1000">Sign In</a>
        </div>
        {/if}
    </div>
</header>

{#if menuOpen}
    <div class=" top-full right-0 border-b bg-blackdinamyc dark:bg-whitedinamyc dark:border-b dark:border-blackdinamyc text-whitedinamyc dark:text-blackdinamyc w-full z-50 md:hidden">
        <div class="flex flex-col items-center py-4">
            <div class="flex flex-row gap-3 mb-3">
                <span class="material-symbols-outlined text-whitedinamyc dark:text-blackdinamyc">dark_mode</span>    
                <button
                    class={`w-12 h-6 flex items-center ${
                        isOn ? 'bg-blackdinamyc' : 'bg-gray-300'
                    } rounded-full p-1 duration-300 ease-in-out ${
                        isOn ? 'justify-end' : 'justify-start'
                    }`}
                    on:click={toggleDarkMode}>
                    <div class="w-4 h-4 bg-white rounded-full shadow"></div>
                </button>
                <span class="material-symbols-outlined text-whitedinamyc dark:text-blackdinamyc">brightness_7</span>
            </div>

            {#if logins}
                <a href="/create-account" class="text-whitedinamyc dark:text-blackdinamyc text-xl font-extrabold hover:bg-green rounded-md px-5 py-3 duration-1000 mb-2">Sign Up</a>
                <a href="/login" class="text-whitedinamyc dark:text-blackdinamyc text-xl font-extrabold bg-green rounded-md px-5 py-3 duration-1000">Sign In</a>
            {/if}
        </div>
    </div>
{/if}

        
