// src/store/ToastStore.ts
import { writable } from 'svelte/store';
import type { ToastInterface, ToastType } from 'localTypes';

function createToast() {
	const { subscribe, set, update } = writable<ToastInterface>({
		type: 'success',
		title: '',
		message: '',
		open: false
	});
	let autoCloseTimer: number | undefined | any;

	function show(type: ToastType, title: string, message: string) {
		clearTimeout(autoCloseTimer); // Limpia cualquier temporizador anterior
		set({ type, title, message, open: true });
		// Configura el cierre automático
		autoCloseTimer = setTimeout(() => {
			update((n) => ({ ...n, open: false }));
		}, 5000);
	}

	return {
		subscribe,
		show,
		close: () => {
			clearTimeout(autoCloseTimer); // Cancela el cierre automático
			update((n) => ({ ...n, open: false }));
		},
		error: (title: string, message: string) => show('error', title, message),
		warning: (title: string, message: string) => show('warning', title, message),
		success: (title: string, message: string) => show('success', title, message),
		info: (title: string, message: string) => show('info', title, message)
	};
}

export const toast = createToast();
