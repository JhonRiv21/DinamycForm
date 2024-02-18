<script>
    import { GoogleIcon, LogoDinamyc } from '$lib/index';

    let passwordVisible = false;
    let newPassword = '';
    let confirmPasswordVisible = false;
    let confirmNewPassword = '';

    import { enhance } from '$app/forms';
    export let form;

</script>

<main
    class="min-h-screen h-full flex justify-center items-center bg-blackdinamyc py-4"
>
    <div class="px-5 sm:px-0">
        <a href="/" class="flex flex-row items-center justify-center">
            <figure>
                <img class="w-10/12" src="{LogoDinamyc}" alt="DinamycForm" />
            </figure>
            <h1 class="text-whitedinamyc text-3xl font-extrabold">DinamycForm</h1>
        </a>

        <hr class="border sm:w-full my-2 border-whitedinamyc" />

        
        <h1 class="text-4xl font-medium text-whitedinamyc py-3 text-center">
           Crear cuenta
        </h1>

        <form action="?/register" method="POST" use:enhance class="flex justify-start flex-col m-auto items-start mr-auto w-full gap-y-4 mb-2">
            
            <label class="flex flex-col justify-start items-start text-whitedinamyc text-lg w-full">Introduce tu correo electrónico
                <input required name="email" value={form?.email ?? ''} type="email" placeholder="Ingresar" class="w-full bg-white/10 py-2 px-2 mt-1 border border-whitedinamyc rounded-sm">
            </label>
            
            <label class="flex flex-col justify-start items-start text-whitedinamyc text-lg w-full">
                Introduce una contraseña:
                <div class="relative w-full">
                    {#if passwordVisible}
                        <input
                            type="text"
                            name="password"
                            required
                            bind:value={newPassword}
                            placeholder="Ingresar"
                            class="w-full bg-white/10 py-2 px-2 mt-1 border border-whitedinamyc rounded-sm" />
                    {:else}
                        <input
                            type="password"
                            name="password"
                            required
                            bind:value={newPassword}
                            placeholder="Ingresar"
                            class="w-full bg-white/10 py-2 px-2 mt-1 border border-whitedinamyc rounded-sm" />
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

            <label class="flex flex-col justify-start items-start text-whitedinamyc text-lg w-full">
                Confirmar contraseña:
                <div class="relative w-full">
                    {#if confirmPasswordVisible}
                        <input
                            type="text"
                            bind:value={confirmNewPassword}
                            placeholder="Ingresar"
                            class="w-full bg-white/10 py-2 px-2 mt-1 border border-whitedinamyc rounded-sm" />
                    {:else}
                        <input
                            type="password"
                            bind:value={confirmNewPassword}
                            placeholder="Ingresar"
                            class="w-full bg-white/10 py-2 px-2 mt-1 border border-whitedinamyc rounded-sm" />
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
            
            <button type="submit" class="bg-green w-full py-2.5 text-whitedinamyc text-xl rounded-md hover:bg-green/80 duration-1000 font-bold">Siguiente</button>
        
        </form>
        {#if form?.invalid}<mark>{form?.message}!</mark>{/if}
    </div>
</main>

<style>
    ::placeholder {
        color: gray;
    }
</style>
