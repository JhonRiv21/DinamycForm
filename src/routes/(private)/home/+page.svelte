<script lang="ts">

    import Header from "$lib/components/Header.svelte";
    import CaptureForm from '$lib/assets/captura-form.png'
    import { onMount } from "svelte";

    interface Form {
        id: string;
        name: string;
        lastEdit: string;
    }

    let formsData = [
        { id: 'aaa', name: 'Form 1', lastEdit: '2023-01-01' },
    ];
    let filteredForms = formsData;
    let searchTerm = "";
    let isMounted = false;
    let modalCreateOpen = false;

    export let data;
    console.log(data)

    onMount(() => {
        isMounted = true;
        filterForms("");
    });

    function clearSearch() {
        searchTerm = "";
        filterForms("");
    }

    function filterForms(searchTerm: string) {
        filteredForms = formsData.filter((form) =>
            form.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }

    function handleInput(event: Event) {
        const target = event.target as HTMLInputElement;
        filterForms(target.value);
    }

    function handleCreateForm(event: any) {
        event.preventDefault(); 
        console.log('Creating form...');
        modalCreateOpen = false;
    }
</script>

<Header redirectUrl={'#'}  />

<main class="w-full bg-blackdinamyc dark:bg-whitedinamyc min-h-screen p-5 sm:p-10">
    
    <section class="w-full max-w-screen-2xl mx-auto">

        <div class="w-full flex flex-wrap gap-5 justify-between items-center">
            <p class="text-whitedinamyc dark:text-blackdinamyc text-2xl">Directory</p>

            <div class="flex flex-wrap gap-5 items-center">
                <button on:click={() => modalCreateOpen = !modalCreateOpen} class="flex items-center gap-3 text-whitedinamyc text-lg bg-[#165F83] hover:bg-[#165F83]/80 duration-500 font-medium px-5 py-3 rounded-md">
                    <span class="material-symbols-outlined">add</span>
                    Create Form
                </button>

                <button class="flex items-center gap-3 text-whitedinamyc text-lg bg-green hover:bg-green/80 duration-500 font-medium px-5 py-3 rounded-md">
                    <span class="material-symbols-outlined">upload</span>
                    Import Form
                </button>
            </div>
        </div>
        
            
        {#if isMounted}
            {#if formsData.length > 0}
            <div class="relative max-w-max my-6 flex items-center border-2 border-whitedinamyc dark:border-black rounded-md">
                <input
                    type="text"
                    placeholder="Search"
                    class="input-with-icon bg-blackdinamyc dark:bg-whitedinamyc w-full text-whitedinamyc dark:text-blackdinamyc sm:w-[260px] rounded-md py-2.5 pr-10 pl-12 text-xl"
                    bind:value={searchTerm}
                    on:input={handleInput} 
                />

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


            {#if filteredForms.length}
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
                            src={CaptureForm}
                            alt="Formulario"
                            />
                        </figure>
                    </div>
                    <div class="border-t bg-[#003352] text-whitedinamyc text-left border-gray-500 w-full py-1.5 rounded-b-xl px-4">
                    <p class="font-medium capitalize text-lg break-words">Untiled</p>
                    <p class="my-0.5 text-sm">Last edition:</p>
                    </div>
                </button>
            </div>
            {/if}

            {#if filteredForms.length < 1}
            <section class="flex justify-center items-center w-full pt-[10%] sm:pt-[5%]">
                <div class="w-full flex items-center flex-col p-5 sm:p-10 max-w-2xl rounded-lg text-center gap-10 justify-center border-2 border-whitedinamyc">
                    <h3 class="text-whitedinamyc text-2xl sm:text-4xl">Welcome to DynamicForm!</h3>
                    <p class="text-whitedinamyc sm:text-lg">
                        Start creating your first form now,
                        It's easy and fast. Once ready it generates
                        a unique URL to share with your clients.
                        This way, they will be able to respond in a simple and direct way.
                    </p>

                    <p class="text-whitedinamyc sm:text-lg">Start capturing valuable information today!</p>
                </div>
            </section>
            {/if}
        {/if}
    </section>

</main>

{#if modalCreateOpen}
    <button on:click={() => modalCreateOpen = !modalCreateOpen} class="fixed cursor-default inset-0 bg-gray-600 bg-opacity-50 z-20 overflow-y-auto h-full w-full flex items-center justify-center"></button>
        
    <form method="post" action="?/create" class="bg-white fixed z-50 p-5 rounded-md shadow-lg w-10/12 max-w-2xl border-2 border-gray-300 left-1/2 top-1/2" style="transform: translate(-50%, -50%);">
        <h1 class="text-2xl font-bold">Are you sure about creating a new form?</h1>
        <p class="mt-2 mb-4 text-lg">Enter the name of the new form</p>

        <div class="border rounded-lg mt-2 p-4 space-y-5">
            <div class="flex flex-col">
                <label for="name">Name</label>
                <input name="name" id="name" placeholder="Enter (maximum 30 digits)" minlength="5" maxlength="30" required class="border rounded-full px-5 py-2.5 w-full">
            </div>
        </div>

        <div class="flex flex-wrap justify-end gap-2 mt-4">
            <button type="button" on:click={() => modalCreateOpen = false} class="px-6 py-2.5 bg-gray-300 rounded-full hover:bg-gray-400">Cancel</button>
            <button type="submit" class="px-12 py-2.5 bg-blue-500 text-white rounded-full hover:bg-blue-700">Create</button>
        </div>
    </form>
{/if}

<style>
    ::placeholder {
        color: rgb(140, 140, 140);
    }
</style>