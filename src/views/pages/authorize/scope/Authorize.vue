<template>
	<h-authorize-layout :title="title" :overlay="overlay">
		<h-table
			:rows="tableRows"
			:columns="columns"
			:row-key="rowKey"
			selection="multiple"
			v-model:selected="selectedItems"
			v-model:pagination="pagination"
			:loading="loading"
			show-all
			class="q-mr-md"
		>
			<template #body-cell-requestMethod="props">
				<q-td key="requestMethod" :props="props">
					<h-swagger-column :method="props.row.requestMethod" :url="props.row.url" :description="props.row.authorityName"></h-swagger-column>
				</q-td>
			</template>
		</h-table>

		<template #right>
			<h-authorize-list
				v-model="selectedItems"
				prepend-title="requestMethod"
				append-title="url"
				prepend-subtitle="authorityName"
				http-method
				http-method-key="requestMethod"
				:row-key="rowKey"
				class="q-ml-md"
				@save="onSave()"
			></h-authorize-list>
		</template>
	</h-authorize-layout>
</template>

<script lang="ts">
import { defineComponent, ref, Ref, onMounted } from 'vue';

import type { QTableProps } from 'quasar';
import type { SysAuthority, SysAuthorityConditions, OAuth2Scope } from '/@/lib/declarations';

import { ComponentNameEnum } from '/@/lib/enums';

import { useSecurityApi, useAuthorizeApi } from '/@/apis';
import { useTableItem, useTableItems } from '/@/hooks';

import { HAuthorizeList, HSwaggerColumn, HTable, HAuthorizeLayout } from '/@/components';

export default defineComponent({
	name: 'OAuth2ScopeAuthorize',

	components: {
		HAuthorizeList,
		HAuthorizeLayout,
		HSwaggerColumn,
		HTable,
	},

	setup(props) {
		const authorityApi = useSecurityApi();
		const authorizeApi = useAuthorizeApi();

		const { editedItem, title, assign, overlay } = useTableItem<OAuth2Scope>(authorizeApi.scope);
		const { tableRows, pagination, loading } = useTableItems<SysAuthority, SysAuthorityConditions>(
			authorityApi.authority,
			ComponentNameEnum.SYS_AUTHORITY,
			true,
			{ direction: 'ASC', properties: ['url'] }
		);

		const selectedItems = ref([]) as Ref<Array<SysAuthority>>;
		const rowKey = 'authorityId' as keyof SysAuthority;

		const columns: QTableProps['columns'] = [
			{ name: 'requestMethod', field: 'requestMethod', align: 'center', label: '服务接口' },
			{ name: 'authorityCode', field: 'authorityCode', align: 'center', label: '权限代码' },
			{ name: 'serviceId', field: 'serviceId', align: 'center', label: '服务ID' },
		];

		onMounted(() => {
			selectedItems.value = editedItem.value.authorities;
		});

		const onSave = () => {
			let scopeId = editedItem.value.scopeId;
			let authorities = selectedItems.value.map((item) => item[rowKey]);
			assign({ scopeId: scopeId, authorities: authorities });
		};

		return {
			selectedItems,
			pagination,
			columns,
			tableRows,
			loading,
			overlay,
			title,
			rowKey,
			onSave,
		};
	},
});
</script>
