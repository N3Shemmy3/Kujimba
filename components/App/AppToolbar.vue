<template>
	<div
		class="fixed top-0 z-50 flex w-full shadow-sm h-14 px-2 py-2 space-x-2 items-center bg-colorSurfaceLight text-colorOnSurfaceLight dark:bg-colorSurfaceDark dark:text-colorOnSurfaceDark"
	>
		<IconButton
			v-if="$route.name == 'index'"
			:icon="isTabletMode ? '' : 'ic:outline-menu'"
			@click="emit('onClickMenuItem', 'navIcon')"
		/>
		<IconButton v-else icon="ic:round-arrow-back" @click="goBack" />
		<h1 class="text-lg">{{ props.title }}</h1>
	</div>
</template>

<script setup>
	import IconButton from "../Icon/IconButton.vue";

	const router = useRouter();
	const route = useRoute();
	const props = defineProps({
		title: String,
	});
	const emit = defineEmits(["onClickMenuItem", "submit"]);
	const isTabletMode = computed(() => {
		return window.innerWidth > 600;
	});
	const goBack = () => {
		router.back();
	};
</script>
