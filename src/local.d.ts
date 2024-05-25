//Toast
export type ToastType = 'error' | 'warning' | 'success' | 'info';

export interface ToastInterface {
	type: ToastType;
	title: string;
	message: string;
	open: boolean;
}

export { ToastType, ToastInterface };
