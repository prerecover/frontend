import { FC } from 'react';

import styles from './styles.module.scss';

export interface ISwitchProps {
    onChange?: (e?: React.ChangeEvent<HTMLInputElement>) => void;
}
export const Switch: FC<ISwitchProps> = ({ onChange }) => {
    return (
        <label className={styles.switch}>
            <input type='checkbox' onChange={onChange} />
            <span className={styles.slider}></span>
        </label>
    );
};
