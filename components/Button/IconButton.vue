<template>
	<div
		v-if="props.icon"
		class="flex cursor-pointer noSelect h-12 w-12 rounded-full"
	>
		<Icon class="m-auto" :name="props.icon" size="24px" />
	</div>
</template>

<script setup lang="ts">
	const props = defineProps({
		icon: String,
		color: String,
	});
	const emit = defineEmits(["inFocus", "submit"]);
</script>
