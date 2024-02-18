<script lang="ts">

    import Header from "$lib/components/Header.svelte";
    import CapturaForm from '$lib/assets/captura-form.png'
    import { onMount } from "svelte";

    let formsData = true;
    let filteredForms: any;
    let searchTerm = "";
    let isMounted = false;

    onMount(() => {
        isMounted = true;
    });
    

    function clearSearch() {
        searchTerm = "";
        // filterForms("");
    }

    // function filterForms(searchTerm: string) {
    //     filteredForms = formsData?.filter((form) =>
    //     form.name.toLowerCase().includes(searchTerm.toLowerCase())
    //     );
    // }

    
</script>

<Header redirectUrl={'#'}  />

<main class="w-full bg-blackdinamyc dark:bg-whitedinamyc min-h-screen p-5 sm:p-10">

    <section class="w-full max-w-screen-2xl mx-auto">

        <div class="w-full flex flex-wrap gap-5 justify-between items-center">
            <p class="text-whitedinamyc dark:text-blackdinamyc text-2xl">Directorio</p>

            <div class="flex flex-wrap gap-5 items-center">
                <button class="flex items-center gap-3 text-whitedinamyc text-lg bg-[#165F83] hover:bg-[#165F83]/80 duration-500 font-medium px-5 py-3 rounded-md">
                    <span class="material-symbols-outlined">add</span>
                    Crear Formulario
                </button>

                <button class="flex items-center gap-3 text-whitedinamyc text-lg bg-green hover:bg-green/80 duration-500 font-medium px-5 py-3 rounded-md">
                    <span class="material-symbols-outlined">upload</span>
                    Importar Formulario
                </button>
            </div>
        </div>
        
        {#if isMounted}

            {#if formsData}
            <div class="relative max-w-max my-6 flex items-center border-2 border-whitedinamyc dark:border-black rounded-md">
                <input
                    type="text"
                    placeholder="Buscador"
                    class="input-with-icon bg-blackdinamyc dark:bg-whitedinamyc w-full text-whitedinamyc dark:text-blackdinamyc sm:w-[260px] rounded-md py-2.5 pr-10 pl-12 text-xl"
                    bind:value={searchTerm}
                />
                <!--on:input={(e) => filterForms(e.target.value)}-->
                <span class="absolute inset-y-0 left-2 flex items-center">
                <span class="material-symbols-outlined text-whitedinamyc dark:text-blackdinamyc">search</span>
                </span>
                {#if searchTerm}
                <button
                    type="button"
                    class="material-symbols-outlined text-whitedinamyc dark:text-blackdinamyc cursor-pointer clear-icon absolute inset-y-0 right-2 flex items-center"
                    on:click={clearSearch}
                >
                    close
                </button>
                {/if}
            </div>
            {/if}


            {#if formsData}
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 w-full pt-[5%] sm:pt-[2%]">
                
                <button on:dblclick={() => window.location.href= "/form/aaa"} class="border border-gray-300 rounded-xl bg-white card shadow-md transform hover:scale-105 duration-300">
                    <div class="relative">
                        <button
                            class="absolute flex items-center justify-center p-2 rounded-md text-[#F3877C] right-14 hover:bg-gray-100 top-2 duration-300 hover-button">
                            <span class="material-symbols-outlined">delete</span>
                        </button>

                        <button on:click={() => window.location.href= "/form/aaa"} class="absolute flex items-center justify-center p-2 rounded-md text-green right-2 hover:bg-gray-100  top-2 duration-300 hover-button">
                            <span class="material-symbols-outlined">edit</span>
                        </button>

                        <figure class="w-auto h-36 mx-auto p-1">
                            <img
                            class="rounded-lg mx-auto w-full h-full bg-cover"
                            src={CapturaForm}
                            alt="Formulario"
                            />
                        </figure>
                    </div>
                    <div class="border-t bg-[#003352] text-whitedinamyc text-left border-gray-500 w-full py-1.5 rounded-b-xl px-4">
                    <p class="font-medium capitalize text-lg break-words">Sin título</p>
                    <p class="my-0.5 text-sm">Ultima edición:</p>
                    </div>
                </button>
                
            </div>
            {:else}
            <section class="flex justify-center items-center w-full pt-[10%] sm:pt-[5%]">
                <div class="w-full flex items-center flex-col p-5 sm:p-10 max-w-2xl rounded-lg text-center gap-10 justify-center border-2 border-whitedinamyc">
                    <h3 class="text-whitedinamyc text-2xl sm:text-4xl">¡Bienvenido a DynamicForm!</h3>
                    <p class="text-whitedinamyc sm:text-lg">
                        Empieza ahora a crear tu primer formulario,
                        Es fácil y rápido. Una vez que esté listo genera
                        una URL única para compartir con tus clientes.
                        Así, podrán responder de manera sencilla y directa.
                    </p>

                    <p class="text-whitedinamyc sm:text-lg">¡Comienza a capturar información valiosa hoy mismo!</p>
                </div>
            </section>
            {/if}

        {/if}
    </section>

</main>

<style>
    ::placeholder {
        color: rgb(140, 140, 140);
    }
</style>