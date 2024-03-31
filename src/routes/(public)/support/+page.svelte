<script lang="ts">

    import Header from "$lib/components/Header.svelte";

</script>

<Header redirectUrl={'/'} />

<main class="bg-blackdinamyc dark:bg-whitedinamyc flex justify-center items-center min-h-screen h-full">

    <section class="w-11/12 md:w-1/2 border-2 border-whitedinamyc dark:border-blackdinamyc rounded-md max-w-screen-2xl mx-auto">

        <div class="border-b-2 border-whitedinamyc dark:border-blackdinamyc text-white p-5">
            <p class="text-3xl font-semibold text-whitedinamyc dark:text-blackdinamyc">Support form</p>
        </div>

        <form class="p-5">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                <label class="col-span-2 md:col-span-1">
                    <p class="text-whitedinamyc dark:text-blackdinamyc">First name*</p>    
                    <input required class="bg-white/10 text-whitedinamyc dark:text-blackdinamyc w-full p-2 rounded-md border border-whitedinamyc dark:border-blackdinamyc" placeholder="Insert">
                </label>
                
                <label class="col-span-2 md:col-span-1">
                    <p class="text-whitedinamyc dark:text-blackdinamyc">Last name (optional)</p>    
                    <input class="bg-white/10 text-whitedinamyc dark:text-blackdinamyc w-full p-2 rounded-md border border-whitedinamyc dark:border-blackdinamyc" placeholder="Insert">
                </label>

                <label class="col-span-2 md:col-span-1">
                    <p class="text-whitedinamyc dark:text-blackdinamyc">Email*</p>    
                    <input required class="bg-white/10 text-whitedinamyc dark:text-blackdinamyc w-full p-2 rounded-md border border-whitedinamyc dark:border-blackdinamyc" placeholder="Insert">
                </label>
                
                <label class="col-span-2 md:col-span-1">
                    <p class="text-whitedinamyc dark:text-blackdinamyc">Country (optional)</p>    
                    <input class="bg-white/10 text-whitedinamyc dark:text-blackdinamyc w-full p-2 rounded-md border border-whitedinamyc dark:border-blackdinamyc" placeholder="Insert">
                </label>
                
                <label class="col-span-2 md:col-span-2">
                    <p class="text-whitedinamyc dark:text-blackdinamyc">Request*</p>    
                    <textarea required class="bg-white/10 text-whitedinamyc dark:text-blackdinamyc min-h-[80px] w-full p-2 rounded-md border border-whitedinamyc dark:border-blackdinamyc" placeholder="Insert"></textarea>
                </label>

                <button class="bg-green col-span-2 hover:bg-green/70 duration-500 text-2xl font-medium text-whitedinamyc w-full text-center rounded-md py-2">Submit</button>
            </div>
        </form>
        
        
        
    </section>

</main>