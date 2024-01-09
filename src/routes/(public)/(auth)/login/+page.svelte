<script>
    import { GoogleIcon, LogoDinamyc } from "$lib/index";
    
    let passwordVisible = false;
    let password = '';

</script>

<main class="min-h-screen h-full flex justify-center items-center bg-black py-4">
    <div class="px-5 sm:px-0">

        <a href="/" class="flex flex-row items-center justify-center">
            <figure>
                <img class="w-10/12" src={LogoDinamyc} alt="DinamycForm">
            </figure>
            <h1 class="text-white text-3xl font-extrabold">DinamycForm</h1>
        </a>

        <hr class="border sm:w-full my-2 border-white">
        
        <h1 class="text-4xl font-medium text-white py-3 text-center">Crear cuenta</h1>

        <form class="flex justify-start flex-col m-auto items-start mr-auto w-full gap-y-4 mb-2">

            <label class="flex flex-col justify-start items-start text-white text-lg w-full">Introduce tu correo electrónico
                <input type="email" placeholder="Ingresar" class="w-full bg-white/10 py-2 px-2 mt-1 border border-white rounded-sm">
            </label>

            <label class="flex flex-col justify-start items-start text-white text-lg w-full">
                Introduce tu contraseña:
                <div class="relative w-full">
                    {#if passwordVisible}
                        <input
                            type="text"
                            bind:value={password}
                            placeholder="Ingresar"
                            class="w-full bg-white/10 py-2 px-2 mt-1 border border-white rounded-sm" />
                    {:else}
                        <input
                            type="password"
                            bind:value={password}
                            placeholder="Ingresar"
                            class="w-full bg-white/10 py-2 px-2 mt-1 border border-white rounded-sm" />
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

            <button class="bg-green w-full py-2.5 text-white text-xl rounded-md hover:bg-green/80 duration-1000 font-bold">Iniciar sesión</button>
        </form>

        <a href="/recuperar-cuenta" class="text-white text-xl hover:text-green hover:underline duration-200">¿Olvidaste tu contraseña?</a>

        <hr class="border sm:w-full my-2 border-white">

        <button class="w-full rounded-sm flex justify-start gap-x-3 items-center bg-[#2B63F4]">
            <div class="bg-white m-0.5">
                <img src={GoogleIcon} class="p-1" alt="google">
            </div>

            <p class="text-white text-lg font-medium">Inicia sesión con Google</p>
        </button>

        <p class="text-white text-center text-lg mt-2 max-w-sm">¿Aún no tienes cuenta en DinamycForm? <a href="/crear-cuenta" class="text-green hover:underline font-medium">¡Créala aquí!</a></p>
        
    </div>
</main>

<style>
    ::placeholder {
        color: gray
    }
</style>