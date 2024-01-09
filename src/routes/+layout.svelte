<script>
    import "../app.css";
    import { darkMode } from '$lib/utils/darkmode';

    $: classDark = $darkMode ? 'dark' : '';
</script>

<div class="{classDark}">
    <slot />
</div>
