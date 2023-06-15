<template>
	<AppLayout class="md:flex">
		<div class="space-y-8 w-full">
			<div class="px-3">
				<h1 class="text-3xl">Welcome back</h1>
				<p class="text-base">Login to continue</p>
			</div>
			<form class="space-y-8">
				<TextInput
					label="Email"
					type="email"
					placeholder="name@gmail.com"
					:text="credentials.email"
				/>
				<TextInput
					label="Password"
					type="password"
					placeholder="Password"
					v-model="credentials.password"
				/>
			</form>
			<ButtonFilledButtton type="submit" class="w-full h-14" text="Login" />
		</div>
		<div v-if="isTabletMode" class="flex w-full">
			<AppIcon size="20vh" class="m-auto animate-pulse animate-ping" />
		</div>
	</AppLayout>
</template>
<script setup lang="ts">
	const client = useSupabaseAuthClient();
	const router = useRouter();
	const user = useSupabaseUser();
	const credentials = reactive({
		email: "",
		password: "",
	});
	async function login() {
		const { email, password } = credentials;
		const { error } = await client.auth.signInWithPassword({ email, password });
		if (!error) return router.push("/");
		console.log(error);
	}

	watchEffect(async () => {
		if (user.value) {
			await router.push("/");
		}
	});
	const isTabletMode = computed(() => {
		return window.innerWidth > 600;
	});
</script>
