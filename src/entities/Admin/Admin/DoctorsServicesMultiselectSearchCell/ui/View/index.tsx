import { FC } from 'react';
import { TViewData } from '../../types/Data';

interface Props {
  data: TViewData;
}

const View: FC<Props> = ({ data }) => {
  return (
    <p>
      {data.map((props, index) => {
        if (props.isSelected) {
          return `${props.data}${index + 1 === data.length ? '' : ','} `;
        }
        return null;
      })}
    </p>
  );
};

export { View };
