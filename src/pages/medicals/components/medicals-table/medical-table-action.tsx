import PopupModal from '@/components/shared/popup-modal';
import TableSearchInput from '@/components/shared/table-search-input';
import MedicalCreateForm from '../medical-forms/medical-create-form';

export default function MedicalTableActions() {
  return (
    <div className="flex items-center justify-between gap-2 py-5">
      <div className="flex flex-1 gap-4">
        <TableSearchInput placeholder="Search People Here" />
      </div>
      <div className="flex gap-3">
        <PopupModal
          renderModal={(onClose) => <MedicalCreateForm modalClose={onClose} />}
        />
      </div>
    </div>
  );
}
