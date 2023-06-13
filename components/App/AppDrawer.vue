<template>
	<div ref="overlay">
		<div
			ref="drawer"
			class="h-full w-[250px] shadow-md bg-colorSurfaceLight text-colorOnSurfaceLight dark:bg-colorSurfaceDark dark:text-colorOnSurfaceDark"
		>
			<AppToolbar v-if="props.title" :title="props.title" />
			<slot />
		</div>
	</div>
</template>
<script setup>
	const props = defineProps({
		title: String,
	});
</script>
