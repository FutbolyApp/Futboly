import { CustomButton } from '../custom/custom-button';
import { ColumnsProps, CustomTable, RowsProps } from '../custom/custom-table';
import { EditTeamModal } from '../modal/edit-team-modal';

type AdminColumnKeysProps = 'INDEX' | 'TEAM' | 'OWNER' | 'PLAYERS' | 'ACTIONS';

export const AdminTabTeams = () => {
  const rows: RowsProps<AdminColumnKeysProps> = [
    { INDEX: 1, TEAM: 'Team1', OWNER: 'gpinto8', PLAYERS: 49 },
  ].map((row) => ({
    ...row,
    ACTIONS: (
      <div className="flex gap-1">
        <EditTeamModal row={row} />
        <CustomButton label="Delete" style="error" className="!w-1/4 !h-1/4" />
      </div>
    ),
  }));

  const columns: ColumnsProps<AdminColumnKeysProps> = [
    { label: '#', id: 'INDEX', minWidth: 30 },
    { label: 'Team', id: 'TEAM', minWidth: 100 },
    { label: 'Owner', id: 'OWNER', minWidth: 100 },
    { label: 'Players', id: 'PLAYERS', align: 'center', minWidth: 50 },
    { label: 'Actions', id: 'ACTIONS', align: 'center', minWidth: 200 },
  ];

  return (
    <div className="h-[400px] ">
      TODO
      <CustomTable<AdminColumnKeysProps>
        rows={rows}
        columns={columns}
        maxWidth={1000}
        elevation={0}
      />
    </div>
  );
};
