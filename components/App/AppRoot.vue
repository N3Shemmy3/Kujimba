<template>
	<div
		class="relative h-full flex select-none bg-colorBackgroundLight text-colorOnBackgroundLight dark:bg-colorBackgroundDark dark:text-colorOnBackgroundDark"
	>
		<AppSplashScreen v-if="false" />
		<div
			v-else="!showSplashScreen"
			class="flex mx-auto w-full md:max-w-screen-2xl"
		>
			<slot />
		</div>
	</div>
</template>
<script setup>
	const showSplashScreen = ref(true);

	onMounted(() => {
		setTimeout(() => {
			showSplashScreen.value = false;
		}, 2000);
	});
</script>
