<template>
	<AppRoot>
		<AppDrawer
			v-if="showDrawer"
			:isShown="isDrawerVisible"
			@update:isShown="(state) => (isDrawerVisible = state)"
		>
			<li
				v-for="item in menuItems"
				class="flex w-full min-h-[48px] p-4 py-2 space-x-4 items-center"
			>
				<Icon name="ic:outline-menu" size="24px" />
				<h1>{{ item.name }}</h1>
			</li>
		</AppDrawer>
		<AppContainer style="padding-top: 56px" class="max-w-screen-md h-screen">
			<AppToolbar
				:title="$router.currentRoute.value.name"
				@onClickMenuItem="(name) => onClickMenuItem(name)"
			/>
			<NuxtLayout>
				<NuxtLoadingIndicator color="#984062" />
				<NuxtPage />
			</NuxtLayout>
		</AppContainer>
	</AppRoot>
</template>
<script setup lang="ts">
	const showDrawer = ref(true);
	const isDrawerVisible = ref(false);
	const menuItems = [
		{
			name: "Kettlebell",
			icon: "kettlebell",
		},
		{
			name: "Dumbbell",
			icon: "dumbbell",
		},
		{
			name: "Barbell",
			icon: "barbell",
		},
		{
			name: "Stability ball",
			icon: "stability-ball",
		},
		{
			name: "Treadmill",
			icon: "treadmill",
		},
		{
			name: "Jump rope",
			icon: "jump-rope",
		},
		{
			name: "Medicine ball",
			icon: "medicine-ball",
		},
		{
			name: "Resistance band",
			icon: "resistance-band",
		},
		{
			name: "Bench",
			icon: "bench",
		},
		{
			name: "Stationary bicycle",
			icon: "stationary-bicycle",
		},
		{
			name: "Rowing machine",
			icon: "rowing-machine",
		},
		{
			name: "Power rack",
			icon: "power-rack",
		},
		{
			name: "Smith machine",
			icon: "smith-machine",
		},
		{
			name: "Suspension training",
			icon: "suspension-training",
		},
	];
	function onClickMenuItem(name: String) {
		switch (name) {
			case "navIcon":
				isDrawerVisible.value = !isDrawerVisible.value;
				break;

			default:
				break;
		}
	}
	onBeforeRouteUpdate((from, to) => {});
	onUpdated(() => {
		if (!isTabletMode) return;
		showDrawer.value = false;
	});
	const isTabletMode = computed(() => {
		return window.innerWidth > 600;
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
</style>
