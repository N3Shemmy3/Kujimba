<template>
	<AppLayout>
		<div v-for="n in items">
			<NuxtLink to="auth/login" class="h-14">#List Item</NuxtLink>
		</div>
	</AppLayout>
</template>

<script setup lang="ts">
	const items = ref([""]);
	onMounted(() => {
		for (let i = 0; i < 20; i++) {
			items.value.push("List Item");
		}
	});
	definePageMeta({
		title: "Kujimba",
	});
</script>
