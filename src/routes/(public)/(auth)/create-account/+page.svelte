<script>
    import { GoogleIcon, LogoDinamyc } from '$lib/index';
    import Header from '$lib/components/Header.svelte';
    import { enhance } from '$app/forms';

    let passwordVisible = false;
    let newPassword = '';
    let confirmPasswordVisible = false;
    let confirmNewPassword = '';

    export let form;

</script>

<Header logins={true} redirectUrl={'/'} />

<main class="min-h-screen h-full flex justify-center items-center bg-blackdinamyc dark:bg-whitedinamyc">
    <div class="px-5 sm:px-0 w-[28.5%]">
        <a href="/" class="flex flex-row items-center justify-center">
            <figure>
                <img class="w-10/12" src="{LogoDinamyc}" alt="DinamycForm" />
            </figure>
            <h1 class="text-whitedinamyc dark:text-blackdinamyc text-3xl font-extrabold">DinamycForm</h1>
        </a>

        <hr class="border sm:w-full my-2 border-whitedinamyc dark:border-blackdinamyc" />

        
        <h1 class="text-4xl font-medium text-whitedinamyc dark:text-blackdinamyc py-3 text-center">
           Sign Up
        </h1>

        <form action="?/signup" method="POST" use:enhance class="flex justify-start flex-col m-auto items-start mr-auto w-full gap-y-4 mb-2">
            
            <label class="flex flex-col justify-start items-start text-whitedinamyc dark:text-blackdinamyc text-lg w-full">Enter your email
                <input required name="email" value="" type="email" placeholder="Insert" class="w-full bg-white/10 py-2 px-2 mt-1 border border-whitedinamyc dark:border-blackdinamyc rounded-sm">
            </label>
            
            <label class="flex flex-col justify-start items-start text-whitedinamyc dark:text-blackdinamyc text-lg w-full">
                Enter a password:
                <div class="relative w-full">
                    {#if passwordVisible}
                        <input
                            type="text"
                            name="password"
                            required
                            bind:value={newPassword}
                            placeholder="Insert"
                            class="w-full bg-white/10 py-2 px-2 mt-1 border border-whitedinamyc dark:border-blackdinamyc rounded-sm" />
                    {:else}
                        <input
                            type="password"
                            name="password"
                            required
                            bind:value={newPassword}
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

            <label class="flex flex-col justify-start items-start text-whitedinamyc dark:text-blackdinamyc text-lg w-full">
                Confirm Password:
                <div class="relative w-full">
                    {#if confirmPasswordVisible}
                        <input
                            type="text"
                            bind:value={confirmNewPassword}
                            placeholder="Insert"
                            class="w-full bg-white/10 py-2 px-2 mt-1 border border-whitedinamyc dark:border-blackdinamyc rounded-sm" />
                    {:else}
                        <input
                            type="password"
                            bind:value={confirmNewPassword}
                            placeholder="Insert"
                            class="w-full bg-white/10 py-2 px-2 mt-1 border border-whitedinamyc dark:border-blackdinamyc rounded-sm" />
                    {/if}
                    <button
                        type="button"
                        on:click={() => confirmPasswordVisible = !confirmPasswordVisible}
                        class="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
                        <span class="material-symbols-outlined">
                            {confirmPasswordVisible ? 'visibility_off' : 'visibility'}
                        </span>
                    </button>
                </div>
            </label>
            
            <button type="submit" class="bg-green w-full py-2.5 text-whitedinamyc text-xl rounded-md hover:bg-green/80 duration-1000 font-bold">Continue</button>
        
        </form>
        <!-- {#if form?.invalid}<mark>{form?.message}!</mark>{/if} -->
    </div>
</main>

<style>
    ::placeholder {
        color: gray;
    }
</style>
