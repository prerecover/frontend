import { FC } from 'react';
import { TWorkTimeView } from '@/shared/types/Admin/shared/Cells/WorkTime';

interface Props {
  data: TWorkTimeView;
}

const View: FC<Props> = ({
  data: { Friday, Monday, Sunday, Thursday, Tuesday, Wednesday, Saturday },
}) => {
  return (
    <div className="">
      {Monday !== null ? (
        <p>
          пн{' '}
          {`${convertSecondsToDay(Monday[0])}-${convertSecondsToDay(Monday[1])}`}
        </p>
      ) : null}
      {Tuesday !== null ? (
        <p>
          вт{' '}
          {`${convertSecondsToDay(Tuesday[0])}-${convertSecondsToDay(Tuesday[1])}`}
        </p>
      ) : null}
      {Wednesday !== null ? (
        <p>
          ср{' '}
          {`${convertSecondsToDay(Wednesday[0])}-${convertSecondsToDay(Wednesday[1])}`}
        </p>
      ) : null}
      {Thursday !== null ? (
        <p>
          чт{' '}
          {`${convertSecondsToDay(Thursday[0])}-${convertSecondsToDay(Thursday[1])}`}
        </p>
      ) : null}
      {Friday !== null ? (
        <p>
          пт{' '}
          {`${convertSecondsToDay(Friday[0])}-${convertSecondsToDay(Friday[1])}`}
        </p>
      ) : null}
      {Sunday !== null ? (
        <p>
          сб{' '}
          {`${convertSecondsToDay(Sunday[0])}-${convertSecondsToDay(Sunday[1])}`}
        </p>
      ) : null}
      {Saturday !== null ? (
        <p>
          вс{' '}
          {`${convertSecondsToDay(Saturday[0])}-${convertSecondsToDay(Saturday[1])}`}
        </p>
      ) : null}
    </div>
  );
};

export { View };
