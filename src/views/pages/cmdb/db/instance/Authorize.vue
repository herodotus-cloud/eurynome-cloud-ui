<template>
	<h-authorize-layout :title="title" :overlay="overlay">
		<q-table
			:rows="tableRows"
			:columns="columns"
			:row-key="rowKey"
			selection="multiple"
			v-model:selected="selectedItems"
			v-model:pagination="pagination"
			:loading="loading"
			class="q-mr-md"
		>
		</q-table>

		<template #right>
			<h-authorize-list
				v-model="selectedItems"
				prepend-title="catalogId"
				append-title="catalogName"
				:row-key="rowKey"
				class="q-ml-md"
				@save="onSave()"
			></h-authorize-list>
		</template>
	</h-authorize-layout>
</template>

<script lang="ts">
import { defineComponent, Ref, ref, onMounted } from 'vue';

import type { QTableProps } from 'quasar';
import type { DatabaseCatalog, DatabaseCatalogConditions, DatabaseInstance } from '/@/lib/declarations';

import { ComponentNameEnum } from '/@/lib/enums';

import { useCmdbApi } from '/@/apis';
import { useTableItem, useTableItems } from '/@/hooks';

import { HAuthorizeList, HAuthorizeLayout } from '/@/components';

export default defineComponent({
	name: 'DatabaseInstanceAuthorize',

	components: {
		HAuthorizeList,
		HAuthorizeLayout,
	},

	setup(props) {
		const api = useCmdbApi();

		const { editedItem, title, assign, overlay } = useTableItem<DatabaseInstance>(api.dbInstance);
		const { tableRows, pagination, loading } = useTableItems<DatabaseCatalog, DatabaseCatalogConditions>(
			api.dbCatalog,
			ComponentNameEnum.DATABASE_CATALOG,
			true
		);

		const selectedItems = ref([]) as Ref<Array<DatabaseCatalog>>;
		const rowKey = 'catalogId' as keyof DatabaseCatalog;

		const columns: QTableProps['columns'] = [{ name: 'catalogName', field: 'catalogName', align: 'center', label: '数据库名称' }];

		onMounted(() => {
			selectedItems.value = editedItem.value.catalogs;
		});

		const onSave = () => {
			let instanceId = editedItem.value.instanceId;
			let catalogs = selectedItems.value.map((item) => item[rowKey]);
			assign({ instanceId: instanceId, catalogs: catalogs });
		};

		return {
			title,
			overlay,
			tableRows,
			columns,
			rowKey,
			selectedItems,
			pagination,
			loading,
			onSave,
		};
	},
});
</script>
