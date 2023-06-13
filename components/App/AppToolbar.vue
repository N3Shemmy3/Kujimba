<template>
	<div class="flex w-full max-h-14 px-4 py-2 space-x-2 items-center">
		<Icon name="ic:outline-menu" /> <div> </div>
		<h1 class="text-lg">{{ props.title }}</h1>
	</div>
</template>

<script setup>
	const props = defineProps({
		title: String,
	});
</script>
