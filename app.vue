<template>
	<AppRoot>
		<AppDrawer
			:isShown="isDrawerVisible"
			@update:isShown="(state) => (isDrawerVisible = state)"
		>
			<li
				v-for="n in 10"
				class="flex w-full min-h-[48px] p-4 py-2 space-x-4 items-center"
			>
				<Icon name="ic:outline-menu" size="24px" />
				<h1>Menu Item</h1>
			</li>
		</AppDrawer>
		<AppContainer style="padding-top: 56px">
			<AppToolbar
				title="Toolbar"
				@onClickMenuItem="(name) => onClickMenuItem(name)"
			/>
			<NuxtPage />
		</AppContainer>
	</AppRoot>
</template>
<script setup lang="ts">
	const isDrawerVisible = ref(false);

	function onClickMenuItem(name: String) {
		switch (name) {
			case "navIcon":
				isDrawerVisible.value = !isDrawerVisible.value;
				break;

			default:
				break;
		}
	}
</script>
<style scoped>
	html,
	body {
		@apply bg-colorBackgroundDark;
		height: 100vh;
		width: 100%;
	}
</style>
