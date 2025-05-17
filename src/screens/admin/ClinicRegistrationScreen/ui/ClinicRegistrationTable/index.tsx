import { Table } from '@/components/common/Table';
import { Cell } from '@/components/common/Table/ui/Cell';
import { Row } from '@/components/common/Table/ui/Row';
import { TableButton } from '@/components/common/Table/ui/TableButton';
import { TBody } from '@/components/common/Table/ui/TBody';
import { THead } from '@/components/common/Table/ui/THead';
import { cn } from '@/lib/utils';
import { HTMLAttributes } from 'react';
import { tableTitles } from './data';
import { AdminClinicStatusPopover } from '@/features/admin-clinic/AdminClinicStatusPopover';
import { StatusBadge } from '@/components/common/StatusBadge';
import { ClinicRegistrationActionsPopover } from '@/features/admin-clinic/ClinicRegistrationActionsPopover';

interface Props extends HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export const ClinicRegistrationTable = ({ className }: Props) => {
  return (
    <Table className={cn(className)}>
      <THead>
        <Row>
          {tableTitles.map((title) => (
            <Cell className="first:w-10 first:min-w-10" key={title} tag="th">
              {title}
            </Cell>
          ))}
        </Row>
      </THead>
      <TBody>
        <Row>
          <Cell className="w-10 min-w-10 shadow-md odd:bg-blue-100">1</Cell>
          <Cell>Title</Cell>
          <Cell>Type title</Cell>
          <Cell>10.10.2025</Cell>
          <Cell>100 км²</Cell>
          <Cell>100</Cell>
          <Cell>100</Cell>
          <Cell>Russia</Cell>
          <Cell>City</Cell>
          <Cell>Address</Cell>
          <Cell>0</Cell>
          <Cell>
            <AdminClinicStatusPopover>
              <StatusBadge className="m-auto cursor-pointer" type={'success'} />
            </AdminClinicStatusPopover>
          </Cell>
          <Cell>
            <AdminClinicStatusPopover>
              <StatusBadge className="m-auto cursor-pointer" type={'success'} />
            </AdminClinicStatusPopover>
          </Cell>
          <Cell>
            пн 10:00 <br />
            вт 10:00 <br />
            ср 10:00 <br />
            чт 10:00 <br />
            пт 10:00 <br />
            сб 10:00 <br />
            вс 10:00
          </Cell>
          <Cell> - </Cell>
          <Cell> - </Cell>
          <Cell>
            <TableButton> - </TableButton>
          </Cell>
          <Cell>Russian</Cell>
          <Cell>
            <AdminClinicStatusPopover>
              <StatusBadge className="m-auto cursor-pointer" type={'success'} />
            </AdminClinicStatusPopover>
          </Cell>
          <Cell>10</Cell>
          <Cell>10</Cell>
          <Cell>
            <TableButton> - </TableButton>
          </Cell>
          <Cell>
            <ClinicRegistrationActionsPopover>
              <TableButton>Выбрать</TableButton>
            </ClinicRegistrationActionsPopover>
          </Cell>
        </Row>
      </TBody>
    </Table>
  );
};
