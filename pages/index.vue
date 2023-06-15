<template>
	<AppLayout>
		<div v-for="n in items" class="h-14">#List Item</div>
	</AppLayout>
</template>

<script setup lang="ts">
	const items = ref([""]);
	onMounted(() => {
		for (let i = 0; i < 20; i++) {
			items.value.push("List Item");
		}
	});
</script>
