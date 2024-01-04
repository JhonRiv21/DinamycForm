<script>
    import { 
        BeneficiosImage,
        CheckIcon, 
        DemoImage, 
        HeroImage, 
        InterrogationIcon, 
        RegistroImage 
    } from "$lib";

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

<main class="w-full min-h-screen bg-black">

        
    <section class="flex flex-col lg:flex-row items-center justify-between w-full max-w-screen-2xl mx-auto">
        <div class="w-full">
            <div class="px-5 sm:px-10 text-center lg:text-left py-10 flex flex-col w-full gap-y-10">
                <h1 class="text-3xl sm:text-4xl lg:text-5xl font-medium text-white">Bienvenido a <span class="text-green">DynamicForm</span></h1>
                <p class="text-white text-2xl">Tu solución para <span class="text-green">formularios inteligentes y personalizados.</span></p>
                <p class="text-white text-2xl">
                    Crea, personaliza y gestiona <span class="text-green">formularios dinámicos</span> para capturar
                 la información que <span class="text-green">tu negocio</span> necesita. 
                </p>
                <h2 class="text-white text-3xl font-bold">¡Totalmente Gratuito!</h2>
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
            <div class="px-5 sm:px-10 py-20 lg:py-10 text-center lg:text-left max-w-xl lg:max-w-full flex flex-col w-full mx-auto gap-y-6">
                <h1 class="text-3xl lg:text-4xl text-white">Beneficios:</h1>
                
                <div class="flex flex-row items-center gap-x-4">
                    <img src={CheckIcon} alt="Check">
                    <p class="text-white text-lg text-left">Crea con Facilidad: Utiliza nuestra interfaz
                        intuitiva de arrastrar y soltar para diseñar
                        formularios.
                    </p>
                </div>

                <div class="flex flex-row items-center gap-x-4">
                    <img src={CheckIcon} alt="Check">
                    <p class="text-white text-lg text-left">Personalización: Adapta cada formulario a las
                        necesidades específicas de tu negocio.
                    </p>
                </div>

                <div class="flex flex-row items-center gap-x-4">
                    <img src={CheckIcon} alt="Check">
                    <p class="text-white text-lg text-left">Gestión Eficiente: Organiza tus formularios
                        fácilmente y accede a ellos cuando lo necesites.
                    </p>
                </div>

                <div class="flex flex-row items-center gap-x-4">
                    <img src={CheckIcon} alt="Check">
                    <p class="text-white text-lg text-left">Respuestas en Tiempo Real: Visualiza y gestiona
                        las respuestas de tus formularios en una sola
                        plataforma
                    </p>
                </div>

                <div class="flex flex-row items-center gap-x-4">
                    <img src={CheckIcon} alt="Check">
                    <p class="text-white text-lg text-left">Acceso Instantáneo: Genera una URL única
                        para cada formulario y compártela con tu 
                        audiencia.
                    </p>
                </div>
            </div>
        </div>
    </section>


    <section class="flex flex-col lg:flex-row items-center justify-between w-full max-w-screen-2xl mx-auto">
        <div class="w-full">
            <div class="px-5 sm:px-10 py-20 lg:py-10 text-center lg:text-left flex flex-col w-full gap-y-10">
                <h1 class="text-3xl lg:text-4xl font-medium text-white">¿Quieres ver <span class="text-green">DynamicForm</span> en acción?</h1>
                <p class="text-white text-2xl">
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
                <h1 class="text-3xl lg:text-4xl font-medium text-white max-w-lg mx-auto lg:mx-0">¿Listo para llevar tus <span class="text-green">formularios</span> al siguiente nivel?</h1>
                <p class="text-white text-2xl">
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
                <h1 class="text-3xl sm:text-4xl lg:text-6xl font-medium text-white max-w-md mx-auto lg:mx-0">Preguntas Frecuentes</h1>
            </div>
        </div>

        <div class="w-full space-y-5">
            {#each contentCards as card, index}
            <div class="flex flex-col w-full">
                <button on:click={() => cardOpen = index} class="flex flex-col text-white bg-white/10 w-full border rounded-lg">
                    
                    <div class="flex flex-row gap-4 items-center px-2 lg:px-5 py-2">
                        <div>
                            <img class="min-w-8" src={InterrogationIcon} alt="Interrogacion">
                        </div>
                        
                        <div class="flex flex-col items-start">
                            <div class="font-medium text-left">
                                {card.title}
                            </div>
                            
                            <div class="font-light text-left">
                                {#if cardOpen === index}
                                {card.desplegable}
                                {/if}
                            </div>
                        </div>
                    </div>

                </button>
            </div>
            {/each}
        </div>
    </section>


    <section class="flex flex-col justify-center items-center w-full px-5 pb-20 mx-auto">
        <h1 class="text-white text-3xl sm:text-4xl lg:text-5xl  font-medium text-center">Información de Contacto y Soporte</h1>
        <p class="text-white text-center max-w-4xl my-10 lg:text-lg">Nos encantaría escuchar tus opiniones y comentarios. Ya sean sugerencias, felicitaciones, dudas
            o reclamos, por favor compártelos con nosotros a través de este formulario. 
           Tu feedback es esencial para seguir mejorando.
        </p>

        <form class="flex flex-col gap-y-2 max-w-4xl w-full">
            <textarea class="min-h-52 text-white p-2 border border-white bg-white/10 rounded-md"></textarea>
            <button type="submit" class="bg-green hover:bg-green/80 duration-1000 text-2xl font-medium text-white w-full rounded-sm py-2">Enviar</button>
        </form>
    </section>

</main>