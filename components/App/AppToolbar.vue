<template>
	<div
		class="fixed top-0 z-50 flex w-full max-h-14 px-2 py-2 space-x-2 items-center bg-colorSurfaceLight text-colorOnSurfaceLight dark:bg-colorSurfaceDark dark:text-colorOnSurfaceDark"
	>
		<IconButton
			name="ic:outline-menu"
			@click="$emit('onClickMenuItem', 'navIcon')"
		/>
		<h1 class="text-lg">{{ props.title }}</h1>
	</div>
</template>

<script setup>
	import IconButton from "../Button/IconButton.vue";

	const props = defineProps({
		title: String,
	});
	const emit = defineEmits(["onClickMenuItem", "submit"]);
</script>
