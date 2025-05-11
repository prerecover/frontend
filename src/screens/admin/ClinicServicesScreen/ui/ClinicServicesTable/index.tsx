import { Cell } from '@/components/common/Table/ui/Cell';
import { Row } from '@/components/common/Table/ui/Row';
import { TBody } from '@/components/common/Table/ui/TBody';
import { THead } from '@/components/common/Table/ui/THead';
import { Table } from '@/components/ui/table';
import { tableTitles } from './data';
import { TableButton } from '@/components/common/Table/ui/TableButton';
import { AdminClinicPaymentPopover } from '@/features/admin-clinic/AdminClinicPaymentPopover';

export const ClinicServicesTable = () => {
  return (
    <Table>
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
        {new Array(10).fill(1).map((_, index) => (
          <Row key={index}>
            <Cell className="w-10 min-w-10 shadow-md odd:bg-blue-100">1</Cell>
            <Cell>ЛОР</Cell>
            <Cell>Консультация</Cell>
            <Cell>Онлайн</Cell>
            <Cell>Покупаешь мозги и все дальше легче будет жить....</Cell>
            <Cell>от 18 000 до 22 0000</Cell>
            <Cell>
              <AdminClinicPaymentPopover>
                <TableButton>Выбрать</TableButton>
              </AdminClinicPaymentPopover>
            </Cell>
            <Cell>2 часа 30 минут</Cell>
            <Cell>все</Cell>
            <Cell>
              <TableButton>2</TableButton>
            </Cell>
            <Cell>
              <TableButton>Выбрать</TableButton>
            </Cell>
          </Row>
        ))}
      </TBody>
    </Table>
  );
};
