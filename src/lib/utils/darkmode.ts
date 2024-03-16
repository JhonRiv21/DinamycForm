// src/lib/utils/darkMode.ts
import { writable } from 'svelte/store';

function createDarkModeStore() {
  const { subscribe, set } = writable<boolean>(false); // Predeterminado a false significa modo oscuro

  return {
    subscribe,
    set, // Exponer set para cambios directos si es necesario
    initialize: () => {
      const isDarkMode = localStorage.getItem('darkMode') === 'true';
      document.documentElement.classList.toggle('dark', !isDarkMode); // Invierte la lógica aquí para modo claro
      set(isDarkMode);
    },
    toggle: () => {
      const current = localStorage.getItem('darkMode') === 'true';
      localStorage.setItem('darkMode', String(!current));
      document.documentElement.classList.toggle('dark', !current); // Usa `dark` para el modo claro
      set(!current);
    }
  };
}

export const darkMode = createDarkModeStore();
