import { ColumnDef } from '@tanstack/react-table';

export type ProTableProps<TData> = {
  data: TData[];
  columns: ColumnDef<TData, any>[];
};
