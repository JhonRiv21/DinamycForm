<script lang="ts">

    import { darkMode } from '$lib/utils/darkmode';
    import { LogoDinamyc } from "$lib/index";

    export let logins: boolean = false;
    let menuOpen = false;
    let isOn = false;

    darkMode.subscribe(value => {
        isOn = value;
    });

    function toggle() {
        darkMode.update(n => !n);
    }

    function toggleMenu() {
        menuOpen = !menuOpen;
    }
</script>

<header class="w-full bg-black dark:bg-gray-50 py-6 md:py-4 px-5 sm:px-10 border-b border-white dark:border-black">
    <div class="w-full max-w-screen-2xl mx-auto flex flex-row justify-between items-center gap-x-2">

        <div class="flex flex-row items-center gap-x-2">
            <figure>
                <img class="w-11/12" src={LogoDinamyc} alt="DinamycForm">
            </figure>
            <h1 class="text-white dark:text-black text-3xl font-extrabold">DinamycForm</h1>
        </div>

        <div class="md:hidden">
            <button on:click={toggleMenu}>
                <span class="material-symbols-outlined text-white dark:text-black">menu</span>
            </button>
        </div>

        <div class="hidden md:flex flex-row gap-3">
            <span class="material-symbols-outlined text-white dark:text-black">dark_mode</span>    
            <button
                class={`w-12 h-6 flex items-center bg-gray-300 dark:bg-black rounded-full p-1 duration-1000 ease-in-out ${
                    isOn ? 'justify-end' : 'justify-start'
                }`}
                on:click={toggle}>
                <div class="w-4 h-4 bg-white rounded-full shadow"></div>
            </button>
            <span class="material-symbols-outlined text-white dark:text-black">brightness_7</span>
        </div>

        {#if logins}
        <div class="hidden md:block">
            <a href="/crear-cuenta" class="text-white dark:text-black text-xl font-extrabold hover:bg-green rounded-md px-5 py-3 duration-1000">Crear Cuenta</a>
            <a href="/login" class="text-white dark:text-black text-xl font-extrabold hover:bg-green rounded-md px-5 py-3 duration-1000">Ingresar</a>
        </div>
        {/if}
    </div>
</header>

{#if menuOpen}
    <div class=" top-full right-0 bg-black dark:bg-white dark:border-b dark:border-black text-white dark:text-black w-full z-50 md:hidden">
        <div class="flex flex-col items-center py-4">
            <div class="flex flex-row gap-3 mb-3">
                <span class="material-symbols-outlined text-white dark:text-black">dark_mode</span>    
                <button
                    class={`w-12 h-6 flex items-center bg-gray-300 rounded-full p-1 duration-1000 ease-in-out ${
                        isOn ? 'justify-end' : 'justify-start'
                    }`}
                    on:click={toggle}>
                    <div class="w-4 h-4 bg-white rounded-full shadow "></div>
                </button>
                <span class="material-symbols-outlined text-white dark:text-black">brightness_7</span>
            </div>

            {#if logins}
                <a href="/crear-cuenta" class="text-white dark:text-black text-xl font-extrabold hover:bg-green rounded-md px-5 py-3 duration-1000 mb-2">Crear Cuenta</a>
                <a href="/login" class="text-white dark:text-black text-xl font-extrabold hover:bg-green rounded-md px-5 py-3 duration-1000">Ingresar</a>
            {/if}
        </div>
    </div>
{/if}

        
