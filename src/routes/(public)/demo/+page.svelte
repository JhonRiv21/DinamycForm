<script lang="ts">
    import Header from "$lib/components/Header.svelte";
    import { onMount } from "svelte";

    //@ts-ignore
    import { FormEditor } from "@bpmn-io/form-js";
  
    let formContainer: HTMLDivElement;
    let formEditor: FormEditor;
  
    onMount(async () => {
      formEditor = new FormEditor({ container: formContainer });

      setTimeout(() => {
        const div = document.querySelector('.fjs-powered-by');
        if (div) {
          //@ts-ignore
            div.style.display = 'none';
        }
        }, 100);
    
      const initialSchema = {
        components: [],
        schemaVersion: 14,
        exporter: {
          name: "form-js (https://demo.bpmn.io)",
          version: "1.6.1"
        },
        type: "default",
        id: "exampleForm"
      };
      await formEditor.importSchema(initialSchema);
    });
  
   
</script>

<Header logins={true} redirectUrl={'/'} />
  
<div class="form-editor-container" bind:this={formContainer}></div>
  