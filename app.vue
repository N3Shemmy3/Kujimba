<template>
	<AppRoot>
		<AppDrawer
			:isShown="isDrawerVisible"
			@update:isShown="(state) => (isDrawerVisible = state)"
			>Drawer</AppDrawer
		>
		<AppContainer style="padding-top: 56px">
			<AppToolbar
				title="Toolbar"
				@onClickMenuItem="(name) => onClickMenuItem(name)"
			/>
			<NuxtPage class="overflow-y" />
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
		overflow: hidden;
	}
</style>
