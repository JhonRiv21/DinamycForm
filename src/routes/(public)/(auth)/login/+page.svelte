<script>
    import Header from '$lib/components/Header.svelte'
    import { GoogleIcon, LogoDinamyc } from "$lib/index";
    
    let passwordVisible = false;
    let password = '';

    import { enhance } from '$app/forms';
    // export let form;
</script>

<Header logins={true} redirectUrl={'/'} />

<main class="lg:min-h-screen flex justify-center items-center bg-blackdinamyc dark:bg-whitedinamyc py-14">
    
    <div class="px-5 sm:px-0">

        <a href="/" class="flex flex-row items-center justify-center">
            <figure>
                <img class="w-10/12" src={LogoDinamyc} alt="DinamycForm">
            </figure>
            <h1 class="text-whitedinamyc dark:text-blackdinamyc text-3xl font-extrabold">DinamycForm</h1>
        </a>

        <hr class="border sm:w-full my-2 border-whitedinamyc dark:border-blackdinamyc">
        
        <h1 class="text-4xl font-medium text-whitedinamyc dark:text-blackdinamyc py-3 text-center">Log in</h1>

        <form action="?/login" method="POST" use:enhance class="flex justify-start flex-col m-auto items-start mr-auto w-full gap-y-4 mb-2">

            <label class="flex flex-col justify-start items-start text-whitedinamyc dark:text-blackdinamyc text-lg w-full">Enter your email
                <input name="email" value="" required type="email" placeholder="Insert" class="w-full bg-white/10 py-2 px-2 mt-1 border border-whitedinamyc dark:border-blackdinamyc rounded-sm">
            </label>

            <label class="flex flex-col justify-start items-start text-whitedinamyc dark:text-blackdinamyc text-lg w-full">
                Enter a password:
                <div class="relative w-full">
                    {#if passwordVisible}
                        <input
                            type="text"
                            name="password"
                            required
                            bind:value={password}
                            placeholder="Insert"
                            class="w-full bg-white/10 py-2 px-2 mt-1 border border-whitedinamyc dark:border-blackdinamyc rounded-sm" />
                    {:else}
                        <input
                            type="password"
                            name="password"
                            required
                            bind:value={password}
                            placeholder="Insert"
                            class="w-full bg-white/10 py-2 px-2 mt-1 border border-whitedinamyc dark:border-blackdinamyc rounded-sm" />
                    {/if}
                    <button
                        type="button"
                        on:click={() => passwordVisible = !passwordVisible}
                        class="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
                        <span class="material-symbols-outlined">
                            {passwordVisible ? 'visibility_off' : 'visibility'}
                        </span>
                    </button>
                </div>
            </label>

            <button type="submit" class="bg-green w-full py-2.5 text-whitedinamyc text-xl rounded-md hover:bg-green/80 duration-1000 font-bold">Continue</button>
        </form>

        <a href="/recover-account" class="text-whitedinamyc dark:text-blackdinamyc text-xl hover:text-green hover:underline duration-200">Did you forget your password?</a>

        <hr class="border sm:w-full my-2 border-whitedinamyc dark:border-blackdinamyc">

        <button type="button" class="w-full rounded-md flex justify-start gap-x-3 items-center bg-[#2B63F4]">
            <div class="bg-white rounded-sm m-1">
                <img src={GoogleIcon} class="p-1" alt="google">
            </div>

            <p class="text-whitedinamyc text-lg font-medium">Log in with Google</p>
        </button>

        <p class="text-whitedinamyc dark:text-blackdinamyc text-center text-lg mt-2 max-w-sm">Do you still not have a DinamycForm account? <a href="/create-account" class="text-green hover:underline font-medium">Create it here!</a></p>
        
    </div>
</main>

<style>
    ::placeholder {
        color: gray
    }
</style>