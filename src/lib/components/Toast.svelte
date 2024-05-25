<script lang="ts">
	import { toast } from 'store/store';
	import { slide } from 'svelte/transition';
	import { X } from 'lucide-svelte';

	// Estilos según el tipo de toast
	const toastStyles = {
		error: 'border-[1.5px] border-[#E60003] bg-[#FFF0F2] text-[#E60003]',
		warning: 'border-[1.5px] border-[#A36100] bg-[#FFF9DB] text-[#A36100]',
		success: 'border-[1.5px] border-[#267536] bg-[#EBFBEE] text-[#267536]',
		info: 'border-[1.5px] border-[#1971C2] bg-[#E7F5FF] text-[#1971C2]'
	};

	function closeToast() {
		toast.close();
	}
</script>

{#if $toast.open}
	<div class="fixed top-20 inset-x-0 lg:left-[0%] z-50 pointer-events-none flex justify-center">
		<div
			transition:slide
			class={`pointer-events-auto w-11/12 lg:w-1/2 max-w-[500px] ${toastStyles[$toast.type]} px-8 py-2 flex items-center gap-4 rounded-xl`}
		>
			<div class="flex-grow">
				<h4 class="font-semibold text-lg first-letter:uppercase">
					{$toast.title}
				</h4>
				<p class="text-xs first-letter:uppercase">{$toast.message}</p>
			</div>
			<button on:click={closeToast} class="pointer-events-auto">
				<X class="w-6 h-6" />
			</button>
		</div>
	</div>
{/if}
