import { cn } from '@/lib/utils';
import { FC, HTMLAttributes, ReactNode } from 'react';
import { EnMode } from '../types/Mode';

interface Props extends HTMLAttributes<HTMLTableElement> {
  headItems: string[];
  bodyItems: ReactNode[][];
  mode: EnMode;
}

const MainTable: FC<Props> = ({
  bodyItems,
  headItems,
  className,
  ...props
}) => {
  return (
    <table className={cn('border-collapse', className)} {...props}>
      <thead className="font-medium">
        <tr>
          {headItems.map((header, index) => (
            <>
              {index === 0 ? (
                <th
                  className="bg-blue-100 border-blue-400 border min-w-10 h-16 font-normal text-xs text-blue-500"
                  key={index - 1}
                >
                  <p>No</p>
                </th>
              ) : null}
              <th
                className="text-sm min-w-48 font-medium bg-blue-100 border-blue-400 border whitespace-pre-wrap"
                key={index}
              >
                <div>{header}</div>
              </th>
            </>
          ))}
        </tr>
      </thead>
      <tbody className="">
        {bodyItems.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <>
                {cellIndex === 0 ? (
                  <td
                    key={cellIndex - 1}
                    className="bg-blue-100 border-blue-400 border min-w-10 text-xs text-blue-500 h-24"
                  >
                    <p className="w-max mx-auto">{cellIndex + 1}</p>
                  </td>
                ) : null}
                <td
                  key={cellIndex}
                  className="border-blue-100 border font-normal"
                >
                  <div className="w-max mx-auto">{cell}</div>
                </td>
              </>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export { MainTable };
