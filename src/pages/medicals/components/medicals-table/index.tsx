import DataTable from '@/components/shared/data-table';
import { columns } from './columns';
import MedicalTableActions from './medical-table-action';

type TMedicalsTableProps = {
  users: any;
  page: number;
  totalUsers: number;
  pageCount: number;
};

export default function MedicalsTable({
  users,
  pageCount
}: TMedicalsTableProps) {
  return (
    <>
      <MedicalTableActions />
      {users && (
        <DataTable columns={columns} data={users} pageCount={pageCount} />
      )}
    </>
  );
}
