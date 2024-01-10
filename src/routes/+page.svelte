<script lang="ts">
    import { 
        BeneficiosImage,
        CheckIcon, 
        DemoImage, 
        HeroImage, 
        InterrogationIcon, 
        RegistroImage 
    } from "$lib";

    import Header from "$lib/components/Header.svelte";
    import Footer from "$lib/components/Footer.svelte";
    import { darkMode } from "$lib/utils/darkmode";

    let isWhiteMode: boolean;
    
    $: isWhiteMode = $darkMode;

    let cardOpen = 0;

    let contentCards = [
        {
            title: '¿Qué es DynamicForm y cómo funciona?',
            desplegable: 'Responde a las preguntas más comunes que los usuarios puedan tener sobre DynamicForm.',
        },
        {
            title: '¿Es realmente gratuito usar DynamicForm?',
            desplegable: 'Responde a las preguntas más comunes que los usuarios puedan tener sobre DynamicForm.',
        },
        {
            title: '¿Cómo puedo crear mi primer formulario?',
            desplegable: 'Responde a las preguntas más comunes que los usuarios puedan tener sobre DynamicForm.',
        },
        {
            title: '¿Qué tipos de campos y elementos puedo incluir en mis formularios?',
            desplegable: 'Responde a las preguntas más comunes que los usuarios puedan tener sobre DynamicForm.',
        },
        {
            title: '¿Cómo puedo ver y gestionar las respuestas de mis formularios?',
            desplegable: 'Responde a las preguntas más comunes que los usuarios puedan tener sobre DynamicForm.',
        },
        {
            title: '¿Cómo asegura DynamicForm la seguridad y privacidad de los datos?',
            desplegable: 'Responde a las preguntas más comunes que los usuarios puedan tener sobre DynamicForm.',
        },
        {
            title: '¿Qué sucede si encuentro un problema o error en la aplicación?',
            desplegable: 'Responde a las preguntas más comunes que los usuarios puedan tener sobre DynamicForm.',
        },
    ]


</script>

<Header logins={true} />

<main class="w-full min-h-screen bg-black dark:bg-gray-50">

        
    <section class="flex flex-col lg:flex-row items-center justify-between w-full max-w-screen-2xl mx-auto">
        <div class="w-full">
            <div class="px-5 sm:px-10 text-center lg:text-left py-10 flex flex-col w-full gap-y-10">
                <h1 class="text-3xl sm:text-4xl lg:text-5xl font-medium text-white dark:text-black">Bienvenido a <span class="text-green">DynamicForm</span></h1>
                <p class="text-white dark:text-black text-2xl dark:font-medium">Tu solución para <span class="text-green">formularios inteligentes y personalizados.</span></p>
                <p class="text-white dark:text-black text-2xl dark:font-medium">
                    Crea, personaliza y gestiona <span class="text-green">formularios dinámicos</span> para capturar
                 la información que <span class="text-green">tu negocio</span> necesita. 
                </p>
                <h2 class="text-white dark:text-black text-3xl font-bold">¡Totalmente Gratuito!</h2>
            </div>
        </div>

        <figure class="w-full">
            <img class="w-full" src={HeroImage} alt="DinamycForm">
        </figure>
    </section>

        
    <section class="flex flex-col-reverse lg:flex-row items-center justify-between w-full max-w-screen-2xl mx-auto">
        <figure class="w-full">
            <img class="w-full bg-cover" src={BeneficiosImage} alt="Beneficios">
        </figure>
        
        <div class="w-full">
            <ul class="px-5 sm:px-10 py-20 lg:py-10 text-center lg:text-left max-w-xl lg:max-w-full flex flex-col w-full mx-auto gap-y-6">
                <h1 class="text-3xl lg:text-4xl text-white dark:text-black dark:font-medium">Beneficios:</h1>
                
                <li class="flex flex-row items-center gap-x-4">
                    <img class="w-6" src={CheckIcon} alt="Check">
                    <p class="text-white dark:text-black text-lg text-left dark:font-medium">Crea con Facilidad: Utiliza nuestra interfaz
                        intuitiva de arrastrar y soltar para diseñar
                        formularios.
                    </p>
                </li>

                <li class="flex flex-row items-center gap-x-4">
                    <img class="w-6" src={CheckIcon} alt="Check">
                    <p class="text-white dark:text-black text-lg text-left dark:font-medium">Personalización: Adapta cada formulario a las
                        necesidades específicas de tu negocio.
                    </p>
                </li>

                <li class="flex flex-row items-center gap-x-4">
                    <img class="w-6" src={CheckIcon} alt="Check">
                    <p class="text-white dark:text-black text-lg text-left dark:font-medium">Gestión Eficiente: Organiza tus formularios
                        fácilmente y accede a ellos cuando lo necesites.
                    </p>
                </li>

                <li class="flex flex-row items-center gap-x-4">
                    <img class="w-6" src={CheckIcon} alt="Check">
                    <p class="text-white dark:text-black text-lg text-left dark:font-medium">Respuestas en Tiempo Real: Visualiza y gestiona
                        las respuestas de tus formularios en una sola
                        plataforma
                    </p>
                </li>

                <li class="flex flex-row items-center gap-x-4">
                    <img class="w-6" src={CheckIcon} alt="Check">
                    <p class="text-white dark:text-black text-lg text-left dark:font-medium">Acceso Instantáneo: Genera una URL única
                        para cada formulario y compártela con tu 
                        audiencia.
                    </p>
                </li>
            </ul>
        </div>
    </section>


    <section class="flex flex-col lg:flex-row items-center justify-between w-full max-w-screen-2xl mx-auto">
        <div class="w-full">
            <div class="px-5 sm:px-10 py-20 lg:py-10 text-center lg:text-left flex flex-col w-full gap-y-10">
                <h1 class="text-3xl lg:text-4xl font-medium text-white dark:text-black">¿Quieres ver <span class="text-green">DynamicForm</span> en acción?</h1>
                <p class="text-white dark:text-black text-2xl dark:font-medium">
                    Prueba nuestra demostración interactiva y descubre
                    lo fácil que es crear formularios personalizados.
                    <br><br>
                    ¡Sin necesidad de registro!
                </p>
                
                <a href="#s" class="text-white font-bold bg-green px-8 lg:px-16 hover:bg-green/70 duration-500 py-3 rounded-md max-w-max mx-auto text-2xl">¡Prueba ahora!</a>
            </div>
        </div>

        <figure class="w-full">
            <img class="w-full" src={DemoImage} alt="Demo">
        </figure>
    </section>


    <section class="flex flex-col-reverse lg:flex-row items-center justify-between w-full max-w-screen-2xl mx-auto">
        <figure class="w-full">
            <img class="w-full" src={RegistroImage} alt="Registro">
        </figure>

        <div class="w-full">
            <div class="px-5 sm:px-10 py-20 lg:py-10 text-center lg:text-left flex flex-col w-full gap-y-10">
                <h1 class="text-3xl lg:text-4xl font-medium text-white dark:text-black max-w-lg mx-auto lg:mx-0">¿Listo para llevar tus <span class="text-green">formularios</span> al siguiente nivel?</h1>
                <p class="text-white dark:text-black text-2xl dark:font-medium">
                    Únete a <span class="text-green">DynamicForm:</span> crea, comparte y gestiona 
                    formularios con total <span class="text-green">seguridad.</span> Nuestra plataforma 
                    combina <span class="text-green">flexibilidad, facilidad de uso y protección 
                    de datos avanzada.</span> Tu información, totalmente 
                    segura con nosotros.                    
                </p>
                
                <a href="#s" class="text-white font-bold bg-green px-8 lg:px-16 hover:bg-green/70 duration-500 py-3 rounded-md max-w-max mx-auto text-2xl">Registrarse ahora</a>
            </div>
        </div>
    </section>


    <section class="flex flex-col lg:flex-row items-start px-5 lg:px-10 py-20 justify-between w-full max-w-screen-2xl mx-auto">
        <div class="w-full">
            <div class="text-center lg:text-left flex flex-col w-full gap-y-10 pb-10">
                <h1 class="text-3xl sm:text-4xl lg:text-6xl font-medium text-white dark:text-black max-w-md mx-auto lg:mx-0">Preguntas Frecuentes</h1>
            </div>
        </div>

        <ul class="w-full space-y-5">
            {#each contentCards as card, index}
            <li class="flex flex-col w-full">
                <button on:click={() => cardOpen = index} class="flex flex-col text-white dark:text-black bg-white/10 w-full border dark:border-black rounded-lg">
                    
                    <div class="flex flex-row gap-4 items-center px-2 lg:px-5 py-2">
                        <div>
                            {#if isWhiteMode}
                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22.7311 13.8227L19.4803 14.6938C18.6093 11.443 20.0527 9.89481 21.0704 8.92526C21.4458 8.5924 21.7128 8.28858 21.8715 8.01379C22.2681 7.32681 21.8481 6.62635 21.6817 6.43867C21.1534 5.76725 20.1916 5.21197 18.7829 5.58943C16.5073 6.19917 16.6256 8.37416 16.7417 8.8076L13.3747 9.24521C13.0979 7.34501 13.7942 3.44195 17.9118 2.33862C20.4041 1.67081 22.9488 2.49879 24.3674 4.32536C25.6195 5.96424 25.817 8.00184 24.8651 9.65058C24.4685 10.3376 23.9054 10.8369 23.4507 11.3071C22.6207 12.1102 22.4408 12.7391 22.7311 13.8227ZM24.144 16.9284C24.2278 17.2152 24.2535 17.516 24.2196 17.8129C24.1856 18.1098 24.0927 18.397 23.9462 18.6575C23.7997 18.918 23.6027 19.1466 23.3667 19.3299C23.1306 19.5133 22.8603 19.6476 22.5717 19.725C22.283 19.8024 21.9818 19.8214 21.6857 19.7808C21.3896 19.7402 21.1046 19.6409 20.8474 19.4886C20.5903 19.3364 20.3661 19.1343 20.1881 18.8942C20.0101 18.6541 19.8819 18.3809 19.8109 18.0906C19.6717 17.521 19.761 16.9195 20.0598 16.4149C20.3585 15.9103 20.8429 15.5428 21.4092 15.3909C21.9756 15.239 22.5789 15.3148 23.09 15.6022C23.6011 15.8895 23.9794 16.3656 24.144 16.9284Z" fill="black"/>
                                <path d="M7.51171 15.3845L10.7059 14.3245C11.766 17.5186 10.4157 19.1487 9.45655 20.1763C9.10133 20.5305 8.85259 20.8495 8.71031 21.1331C8.35462 21.8422 8.81492 22.5168 8.99206 22.6944C9.55883 23.3337 10.5515 23.8317 11.9356 23.3723C14.1716 22.6303 13.9261 20.4659 13.7847 20.0401L17.1203 19.4059C17.508 21.2866 17.0416 25.2237 12.9957 26.5665C10.5468 27.3792 7.958 26.7018 6.43485 24.9615C5.08884 23.3988 4.77222 21.3763 5.62587 19.6746C5.98156 18.9655 6.51439 18.4341 6.94075 17.938C7.72232 17.0876 7.86507 16.4492 7.51171 15.3845ZM5.91929 12.367C5.81877 12.0856 5.77548 11.7869 5.79199 11.4885C5.80849 11.1901 5.88444 10.8979 6.01539 10.6293C6.14633 10.3607 6.32963 10.1209 6.55452 9.92404C6.77941 9.7272 7.04136 9.57728 7.32498 9.48307C7.60861 9.38886 7.9082 9.35227 8.20617 9.37544C8.50413 9.39861 8.79446 9.48108 9.06012 9.618C9.32577 9.75491 9.56139 9.94353 9.75315 10.1728C9.94491 10.402 10.0889 10.6672 10.1768 10.9529C10.3491 11.5134 10.2952 12.119 10.0266 12.6402C9.75794 13.1615 9.29594 13.5568 8.73946 13.7416C8.18299 13.9265 7.57627 13.8861 7.04918 13.6292C6.52209 13.3723 6.11652 12.9192 5.91929 12.367Z" fill="black"/>
                            </svg>
                            {:else}
                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22.7311 13.8227L19.4803 14.6938C18.6093 11.443 20.0527 9.89481 21.0704 8.92526C21.4458 8.5924 21.7128 8.28858 21.8715 8.01379C22.2681 7.32681 21.8481 6.62635 21.6817 6.43867C21.1534 5.76725 20.1916 5.21197 18.7829 5.58943C16.5073 6.19917 16.6256 8.37416 16.7417 8.8076L13.3747 9.24521C13.0979 7.34501 13.7942 3.44195 17.9118 2.33862C20.4041 1.67081 22.9488 2.49879 24.3674 4.32536C25.6195 5.96424 25.817 8.00184 24.8651 9.65058C24.4685 10.3376 23.9054 10.8369 23.4507 11.3071C22.6207 12.1102 22.4408 12.7391 22.7311 13.8227ZM24.144 16.9284C24.2278 17.2152 24.2535 17.516 24.2196 17.8129C24.1856 18.1098 24.0927 18.397 23.9462 18.6575C23.7997 18.918 23.6027 19.1466 23.3667 19.3299C23.1306 19.5133 22.8603 19.6476 22.5717 19.725C22.283 19.8024 21.9818 19.8214 21.6857 19.7808C21.3896 19.7402 21.1046 19.6409 20.8474 19.4886C20.5903 19.3364 20.3661 19.1343 20.1881 18.8942C20.0101 18.6541 19.8819 18.3809 19.8109 18.0906C19.6717 17.521 19.761 16.9195 20.0598 16.4149C20.3585 15.9103 20.8429 15.5428 21.4092 15.3909C21.9756 15.239 22.5789 15.3148 23.09 15.6022C23.6011 15.8895 23.9794 16.3656 24.144 16.9284Z" fill="white"/>
                                <path d="M7.51171 15.3845L10.7059 14.3245C11.766 17.5186 10.4157 19.1487 9.45655 20.1763C9.10133 20.5305 8.85259 20.8495 8.71031 21.1331C8.35462 21.8422 8.81492 22.5168 8.99206 22.6944C9.55883 23.3337 10.5515 23.8317 11.9356 23.3723C14.1716 22.6303 13.9261 20.4659 13.7847 20.0401L17.1203 19.4059C17.508 21.2866 17.0416 25.2237 12.9957 26.5665C10.5468 27.3792 7.958 26.7018 6.43485 24.9615C5.08884 23.3988 4.77222 21.3763 5.62587 19.6746C5.98156 18.9655 6.51439 18.4341 6.94075 17.938C7.72232 17.0876 7.86507 16.4492 7.51171 15.3845ZM5.91929 12.367C5.81877 12.0856 5.77548 11.7869 5.79199 11.4885C5.80849 11.1901 5.88444 10.8979 6.01539 10.6293C6.14633 10.3607 6.32963 10.1209 6.55452 9.92404C6.77941 9.7272 7.04136 9.57728 7.32498 9.48307C7.60861 9.38886 7.9082 9.35227 8.20617 9.37544C8.50413 9.39861 8.79446 9.48108 9.06012 9.618C9.32577 9.75491 9.56139 9.94353 9.75315 10.1728C9.94491 10.402 10.0889 10.6672 10.1768 10.9529C10.3491 11.5134 10.2952 12.119 10.0266 12.6402C9.75794 13.1615 9.29594 13.5568 8.73946 13.7416C8.18299 13.9265 7.57627 13.8861 7.04918 13.6292C6.52209 13.3723 6.11652 12.9192 5.91929 12.367Z" fill="white"/>
                            </svg>
                            {/if}
                        </div>
                        
                        <div class="flex flex-col items-start">
                            <div class="font-medium text-left">
                                {card.title}
                            </div>
                            
                            <div class="font-light dark:font-normal text-left">
                                {#if cardOpen === index}
                                {card.desplegable}
                                {/if}
                            </div>
                        </div>
                    </div>

                </button>
            </li>
            {/each}
        </ul>
    </section>


    <section class="flex flex-col justify-center items-center w-full px-5 pb-20 mx-auto">
        <h1 class="text-white dark:text-black text-3xl sm:text-4xl lg:text-5xl  font-medium text-center">Información de Contacto y Soporte</h1>
        <p class="text-white dark:text-black text-center max-w-4xl my-10 lg:text-lg">Nos encantaría escuchar tus opiniones y comentarios. Ya sean sugerencias, felicitaciones, dudas
            o reclamos, por favor compártelos con nosotros a través de este formulario. 
           Tu feedback es esencial para seguir mejorando.
        </p>

        <form class="flex flex-col gap-y-2 max-w-4xl w-full">
            <textarea placeholder="Escribir" class="min-h-52 text-white dark:text-black p-2 border border-white dark:border-black bg-white/10 rounded-md"></textarea>
            <button type="submit" class="bg-green hover:bg-green/80 duration-1000 text-2xl font-medium text-white w-full rounded-sm py-2">Enviar</button>
        </form>
    </section>

</main>

<Footer />