<template>
	<h-table
		:rows="tableRows"
		:columns="columns"
		row-key="instanceId"
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
			<q-btn color="primary" label="新建数据库实例" :to="toCreate" />
		</template>

		<template #body-cell-dbType="props">
			<q-td key="dbType" :props="props">
				{{ parseDatabase(props.row) }}
			</q-td>
		</template>

		<template #body-cell-actions="props">
			<q-td key="actions" :props="props">
				<h-dense-icon-button color="brown" icon="mdi-database-plus" tooltip="关联数据库" :to="toAuthorize(props.row)"></h-dense-icon-button>
				<h-edit-button :to="toEdit(props.row)"></h-edit-button>
				<h-delete-button v-if="!props.row.reserved" @click="deleteItemById(props.row.instanceId)"></h-delete-button>
			</q-td>
		</template>
	</h-table>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

import type { QTableProps } from 'quasar';
import type { DatabaseInstance, DatabaseInstanceConditions } from '/@/lib/declarations';

import { ComponentNameEnum } from '/@/lib/enums';

import { useCmdbApi } from '/@/apis';
import { useTableItems, useDatabaseDisplay } from '/@/hooks';

import { HDenseIconButton, HDeleteButton, HEditButton, HTable } from '/@/components';

export default defineComponent({
	name: ComponentNameEnum.DATABASE_INSTANCE,

	components: {
		HDeleteButton,
		HDenseIconButton,
		HEditButton,
		HTable,
	},

	setup() {
		const api = useCmdbApi();
		const { tableRows, totalPages, pagination, loading, toEdit, toCreate, toAuthorize, findItems, deleteItemById } = useTableItems<
			DatabaseInstance,
			DatabaseInstanceConditions
		>(api.dbInstance, ComponentNameEnum.DATABASE_INSTANCE);

		const { parseDatabase } = useDatabaseDisplay();

		const selected = ref([]);

		const columns: QTableProps['columns'] = [
			{ name: 'assetServer.actualIp', field: 'assetServer.actualIp', align: 'center', label: 'IP地址' },
			{ name: 'dbType', field: 'dbType', align: 'center', label: '数据库类型' },
			{ name: 'dbVersion', field: 'dbVersion', align: 'center', label: '数据库版本' },
			{ name: 'dbPorts', field: 'dbPorts', align: 'center', label: '数据库端口' },
			{ name: 'purpose', field: 'purpose', align: 'center', label: '用途' },
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
			parseDatabase,
		};
	},
});
</script>
