import { Cell } from '@/components/common/Table/ui/Cell';
import { Row } from '@/components/common/Table/ui/Row';
import { TBody } from '@/components/common/Table/ui/TBody';
import { THead } from '@/components/common/Table/ui/THead';
import { Table } from '@/components/ui/table';

export const ClinicSmsTable = () => {
  return (
    <Table>
      <THead>
        <Row>
          <Cell className="first:w-10 first:min-w-10" tag="th">
            №
          </Cell>
          <Cell tag="th">Номер</Cell>
          <Cell tag="th">Страна</Cell>
          <Cell tag="th">Город</Cell>
          <Cell tag="th">Когда был запрос</Cell>
          <Cell tag="th">Действие</Cell>
          <Cell tag="th">Время отправки</Cell>
          <Cell tag="th">Вид</Cell>
        </Row>
      </THead>
      <TBody>
        <Row>
          <Cell className="w-10 min-w-10 shadow-md odd:bg-blue-100" tag="td">
            1
          </Cell>
          <Cell tag="td">+777777777777</Cell>
          <Cell tag="td">Россия</Cell>
          <Cell tag="td">Воронеж</Cell>
          <Cell tag="td">03.07 12:21</Cell>
          <Cell tag="td">
            <AdminClinicTypeText variant="error">
              Не отправлено
            </AdminClinicTypeText>
          </Cell>
          <Cell tag="td">03.07 12:22</Cell>
          <Cell tag="td">
            <Badge className={styles.badge}>Регистрация</Badge>
          </Cell>
        </Row>
        <Row>
          <Cell className={styles.numberTd} tag="td">
            1
          </Cell>
          <Cell tag="td">+777777777777</Cell>
          <Cell tag="td">Россия</Cell>
          <Cell tag="td">Воронеж</Cell>
          <Cell tag="td">03.07 12:21</Cell>
          <Cell tag="td">
            <AdminClinicTypeText variant="error">
              Не отправлено
            </AdminClinicTypeText>
          </Cell>
          <Cell tag="td">03.07 12:22</Cell>
          <Cell tag="td">
            <Badge className={styles.badge}>Регистрация</Badge>
          </Cell>
        </Row>
        <Row>
          <Cell className={styles.numberTd} tag="td">
            1
          </Cell>
          <Cell tag="td">+777777777777</Cell>
          <Cell tag="td">Россия</Cell>
          <Cell tag="td">Воронеж</Cell>
          <Cell tag="td">03.07 12:21</Cell>
          <Cell tag="td">
            <AdminClinicTypeText variant="error">
              Не отправлено
            </AdminClinicTypeText>
          </Cell>
          <Cell tag="td">03.07 12:22</Cell>
          <Cell tag="td">
            <Badge className={styles.badge}>Регистрация</Badge>
          </Cell>
        </Row>
      </TBody>
    </Table>
  );
};
