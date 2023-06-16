<template>
	<AppRoot>
		<AppDrawer
			v-if="true"
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
		<AppContainer style="padding-top: 56px">
			<AppToolbar
				:title="$route.meta.title"
				@onClickMenuItem="(name) => onClickMenuItem(name)"
			/>
			<NuxtLayout>
				<NuxtLoadingIndicator color="#376a1f" />
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
	];
	function onClickMenuItem(name: String) {
		switch (name) {
			case "navIcon":
				isDrawerVisible.value = !isDrawerVisible.value;
				break;

			case "backIcon":
				if (router.getRoutes.length <= 1) break;
			default:
				break;
		}
	}
	onUpdated(() => {
		//if (!isTabletMode) return;
		showDrawer.value = false;
	});
	const isTabletMode = computed(() => {
		return window.innerWidth > 600;
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
</style>
