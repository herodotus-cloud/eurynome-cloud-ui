<template>
	<q-card>
		<q-card-section>
			<h-label size="h6" text="手机验证码登录" align="left"></h-label>
		</q-card-section>

		<q-separator inset />

		<q-card-section class="q-gutter-y-lg">
			<h-text-field v-model="mobile" bottom-slot label="用户名" placeholder="请输入用户名" dense>
				<template #before>
					<q-icon color="primary" name="mdi-cellphone" />
				</template>
			</h-text-field>
			<h-text-field v-model="verificationCode" label="密码" placeholder="请输入密码" dense>
				<template #before>
					<q-icon color="primary" name="mdi-android-messages" />
				</template>
			</h-text-field>

			<q-btn rounded unelevated color="primary" class="full-width" label="登录" />

			<q-btn rounded unelevated outline class="full-width" label="返回" @click="application.switchToAccountPanel()" />
		</q-card-section>
	</q-card>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

import { useApplicationStore } from '/@/stores';

export default defineComponent({
	name: 'MobilePanel',

	setup(props) {
		const application = useApplicationStore();

		const mobile = ref('');
		const verificationCode = ref('');

		return {
			application,
			mobile,
			verificationCode,
		};
	},
});
</script>
