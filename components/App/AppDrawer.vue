<template>
	<Transition name="slide-fade">
		<div
			v-show="isDrawerShown"
			ref="overlay"
			@click="
				$event.target == overlay
					? $emit('update:isShown', false)
					: $emit('update:isShown', isDrawerShown)
			"
			class="fixed z-[80] top-0 left-0 md:z-0 overflow-hidden md:relative h-full md:w-[250px] w-full bg-opacity-30 bg-black"
		>
			<div
				ref="drawer"
				class="fixed h-full overflow-hidden w-[250px] shadow-md md:shadow-none bg-colorSurfaceLight text-colorOnSurfaceLight dark:bg-colorSurfaceDark dark:text-colorOnSurfaceDark"
			>
				<AppToolbar v-if="props.title" :title="props.title" />
				<slot />
			</div>
		</div>
	</Transition>
</template>
<script setup>
	const props = defineProps({
		title: String,
		isShown: Boolean,
	});
	const emit = defineEmits(["update:isShown"]);
	const overlay = ref();
	const drawer = ref();

	const isDrawerShown = computed(() => {
		return window.innerWidth > 600 ? true : props.isShown;
	});
	onMounted(() => {});
</script>
<style scoped>
	.slide-side-enter-active,
	.slide-side-leave-active {
		transition: all 0.3s ease-out;
	}

	.slide-fade-leave-active {
		transition: right 0.5s cubic-bezier(0.82, 0.085, 0.395, 0.895);
	}

	.slide-fade-enter-from,
	.slide-fade-leave-to {
		transform: translateX(-100%);
	}
</style>
