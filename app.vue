<template>
	<AppRoot>
		<AppDrawer
			v-if="isHomePage"
			title="Kujimba"
			:isShown="isDrawerVisible"
			@update:isShown="(state) => (isDrawerVisible = state)"
		>
		</AppDrawer>
		<AppContainer style="padding-top: 56px">
			<AppToolbar
				:title="$route.meta.title"
				@onClickMenuItem="(name) => (isDrawerVisible = true)"
			/>
			<NuxtLayout>
				<NuxtLoadingIndicator color="#376a1f" />
				<NuxtPage />
			</NuxtLayout>
		</AppContainer>
	</AppRoot>
</template>
<script setup lang="ts">
	const route = useRoute();
	const showDrawer = ref(true);
	const isDrawerVisible = ref(false);

	function onClickMenuItem(name: String) {
		switch (name) {
			case "navIcon":
				break;
			default:
				break;
		}
	}
	const isTabletMode = computed(() => {
		return window.innerWidth > 600;
	});
	const isHomePage = computed(() => {
		return route.name == "index";
	});

	useHead({
		title: route.meta.name,
	});

	useSeoMeta({
		ogTitle: "Kujimba",
	});
</script>
<style scoped>
	html,
	body {
		@apply bg-colorBackgroundDark;
		height: 100vh;
		width: 100%;
		user-select: none;
	}
	.icon {
		pointer-events: none;
	}
</style>
