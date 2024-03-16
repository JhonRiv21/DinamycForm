<script>
    
</script>

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