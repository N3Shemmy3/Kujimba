<template>
	<div
		v-if="props.name"
		class="flex cursor-pointer noSelect h-12 w-12 rounded-full hover:bg-colorPrimaryContainerLight dark:hover:bg-colorPrimaryContainerDark"
	>
		<Icon class="m-auto" :name="props.name" size="24px" />
	</div>
</template>

<script setup lang="ts">
	const props = defineProps({
		name: String,
		color: String,
	});
	const emit = defineEmits(["inFocus", "submit"]);
</script>
