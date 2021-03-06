<template>
	<h-center-form-layout :entity="editedItem" :title="title" :operation="operation" @save="onSave()">
		<h-text-field
			v-model="editedItem.roleName"
			label="角色名称 *"
			placeholder="请输入角色名称"
			:error="v.editedItem.roleName.$error"
			:error-message="v.editedItem.roleName.$errors[0] ? v.editedItem.roleName.$errors[0].$message : ''"
			@blur="v.editedItem.roleName.$validate()"
		></h-text-field>

		<h-text-field
			v-model="editedItem.roleCode"
			name="roleCode"
			label="角色代码 * "
			placeholder="请输入角色代码"
			debounce="5000"
			:error="v.editedItem.roleCode.$error"
			:error-message="v.editedItem.roleCode.$errors[0] ? v.editedItem.roleCode.$errors[0].$message : ''"
			@change="v.editedItem.roleCode.$validate()"
		></h-text-field>
	</h-center-form-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import useVuelidate from '@vuelidate/core';
import { required, helpers } from '@vuelidate/validators';

import type { SysRole } from '/@/lib/declarations';

import { useTableItem } from '/@/hooks';
import { useSecurityApi } from '/@/apis';
import { HCenterFormLayout, HTextField } from '/@/components';

export default defineComponent({
	name: 'SysRoleContent',

	components: {
		HTextField,
		HCenterFormLayout,
	},

	setup(props) {
		const api = useSecurityApi();
		const { editedItem, operation, title, saveOrUpdate } = useTableItem<SysRole>(api.role);

		const unique = () => {
			let roleCode = editedItem.value.roleCode;

			return new Promise((resolve, reject) => {
				if (roleCode) {
					api.role.fetchByRoleCode(roleCode).then((result) => {
						let role = result.data as SysRole;
						resolve(!(role && role.roleCode));
					});
				} else {
					reject(false);
				}
			});
		};

		const rules = {
			editedItem: {
				roleName: {
					required: helpers.withMessage('角色名称不能为空', required),
				},
				roleCode: {
					required: helpers.withMessage('角色代码不能为空', required),
					unique: helpers.withMessage('角色代码已存在，请使用其它代码', helpers.withAsync(unique)),
				},
			},
		};

		const v = useVuelidate(rules, { editedItem }, { $lazy: true });

		const onSave = () => {
			v.value.$validate().then((result) => {
				if (result) {
					saveOrUpdate();
				}
			});
		};

		return {
			editedItem,
			operation,
			title,
			v,
			onSave,
		};
	},
});
</script>
