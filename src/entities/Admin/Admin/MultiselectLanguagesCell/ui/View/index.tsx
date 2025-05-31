import { FC } from 'react';
import { TMultiselectView } from '@/shared/types/Admin/shared/Cells/Multiselect';
import { EnLanguages } from '@/shared/types/Admin/Clinics/Entities/Languages';

interface Props {
  data: TMultiselectView<string, EnLanguages>;
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
