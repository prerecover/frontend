import { FC } from 'react';
import { TViewData } from '../../types/Data';

interface Props {
  data: TViewData;
}

const View: FC<Props> = ({ data }) => {
  let selectedIndex = 0;

  return (
    <p>
      {data.map((props, index) => {
        if (props.isSelected) {
          selectedIndex++;
          return `${props.data.name}${selectedIndex + 1 === data.length ? '' : ','} `;
        }
        return null;
      })}
    </p>
  );
};

export { View };
