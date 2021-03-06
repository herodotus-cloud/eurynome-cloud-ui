<template>
	<h-table
		:rows="tableRows"
		:columns="columns"
		row-key="applicationId"
		selection="single"
		v-model:selected="selected"
		v-model:pagination="pagination"
		v-model:pageNumber="pagination.page"
		:totalPages="totalPages"
		:loading="loading"
		status
		reserved
		@request="findItems"
	>
		<template #top-left>
			<q-btn color="primary" label="新建应用系统" :to="toCreate" />
		</template>

		<template #body-cell-actions="props">
			<q-td key="actions" :props="props">
				<h-dense-icon-button color="brown" icon="mdi-application-cog" tooltip="分配服务器" :to="toAuthorize(props.row)"></h-dense-icon-button>
				<h-edit-button :to="toEdit(props.row)"></h-edit-button>
				<h-delete-button v-if="!props.row.reserved" @click="deleteItemById(props.row.applicationId)"></h-delete-button>
			</q-td>
		</template>
	</h-table>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

import type { QTableProps } from 'quasar';
import type { AssetApplication, AssetApplicationConditions } from '/@/lib/declarations';

import { ComponentNameEnum } from '/@/lib/enums';

import { useCmdbApi } from '/@/apis';
import { useTableItems } from '/@/hooks';

import { HDenseIconButton, HDeleteButton, HEditButton, HTable } from '/@/components';

export default defineComponent({
	name: ComponentNameEnum.ASSET_APPLICATION,

	components: {
		HDeleteButton,
		HDenseIconButton,
		HEditButton,
		HTable,
	},

	setup() {
		const api = useCmdbApi();
		const { tableRows, totalPages, pagination, loading, toEdit, toCreate, toAuthorize, findItems, deleteItemById } = useTableItems<
			AssetApplication,
			AssetApplicationConditions
		>(api.application, ComponentNameEnum.ASSET_APPLICATION);

		const selected = ref([]);

		const columns: QTableProps['columns'] = [
			{ name: 'applicationName', field: 'applicationName', align: 'center', label: '应用系统名称' },
			{ name: 'department', field: 'department', align: 'center', label: '管理部门' },
			{ name: 'employee', field: 'employee', align: 'center', label: '管理部门负责人' },
			{ name: 'protectionGrade', field: 'protectionGrade', align: 'center', label: '等保定级' },
			{ name: 'protectionFilingNo', field: 'protectionFilingNo', align: 'center', label: '等保备案编号' },
			{ name: 'reserved', field: 'reserved', align: 'center', label: '保留数据' },
			{ name: 'status', field: 'status', align: 'center', label: '状态' },
			{ name: 'actions', field: 'actions', align: 'center', label: '操作' },
		];

		return {
			selected,
			pagination,
			columns,
			tableRows,
			totalPages,
			loading,
			toCreate,
			toEdit,
			toAuthorize,
			findItems,
			deleteItemById,
		};
	},
});
</script>
