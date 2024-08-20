'use client';

import React, { useMemo } from 'react';
import { getCoreRowModel, useReactTable } from '@tanstack/react-table';
import { ProTableProps } from './types';

const ProTable = <TData, TSort>({ data, columns }: ProTableProps<TData>) => {
  const dataMemoised = useMemo(() => data, [data]);
  const columnsMemoised = useMemo(() => columns, [columns]);

  const table = useReactTable({
    data: dataMemoised,
    columns: columnsMemoised,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div>
      <h2>Pro Table</h2>
      <table>Pro Table</table>
    </div>
  );
};

export default ProTable;
