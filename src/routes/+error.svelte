<script lang="ts">

    import { page } from "$app/stores";
    import { LogoDinamyc } from "$lib/index";
</script>

<div class="h-screen w-full bg-blackdinamyc flex items-center justify-center">
	<div class="flex flex-col md:flex-row items-center justify-center px-5 gap-10">
        <div class="max-w-lg">
            <img src={LogoDinamyc} alt="DinamycForm" class="w-56"/>
        </div>
        <div class="max-w-md">
            <div class="flex flex-col items-center sm:items-start justify-center">
                <h1 class="text-4xl sm:text-6xl font-bold tracking-widest text-whitedinamyc">
                    {$page.status}
                </h1>
                <p class="text-2xl md:text-3xl font-light text-whitedinamyc tracking-wide mb-8">
                    {$page.error?.message ? $page.error?.message : "Internal server Error."}
                </p>
                <a href="/" class="px-6 py-2 font-medium text-lg shadow text-whitedinamyc transition-colors duration-150 border rounded-md focus:outline-none focus:shadow-outline-blue bg-green active:bg-green/80 hover:bg-green/80">
                    Volver al inicio
                </a>
            </div>
        </div>
    </div>
</div>
