import { CSSProperties, FC, ReactNode } from 'react';

interface TextProps {
    type: 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    children: ReactNode;
    position?: 'start' | 'end' | 'left' | 'right' | 'center' | 'justify' | 'match-parent';
    fz?: string | number;
    color?: string;
    fw?: number;
    onClick?: () => void;
    style?: CSSProperties;
    className?: string;
}
export const Text: FC<TextProps> = ({
    type = 'p',
    children,
    position = 'start',
    color,
    fw,
    onClick,
    style,
    className,
}) => {
    switch (type) {
        case 'h1':
            return (
                <h1
                    className={`${className} `}
                    onClick={onClick}
                    style={{
                        ...style,
                        textAlign: position,

                        color: color,
                        fontWeight: fw,
                    }}>
                    {children}
                </h1>
            );
        case 'h2':
            return (
                <h2
                    className={`${className} `}
                    onClick={onClick}
                    style={{
                        ...style,
                        textAlign: position,
                        color: color,
                        fontWeight: fw,
                    }}>
                    {children}
                </h2>
            );
        case 'h3':
            return (
                <h3
                    className={`${className} `}
                    onClick={onClick}
                    style={{
                        ...style,
                        textAlign: position,
                        color: color,
                        fontWeight: fw,
                    }}>
                    {children}
                </h3>
            );
        case 'h4':
            return (
                <h4
                    className={`${className} `}
                    onClick={onClick}
                    style={{
                        ...style,
                        textAlign: position,
                        color: color,
                        fontWeight: fw,
                    }}>
                    {children}
                </h4>
            );
        case 'h5':
            return (
                <h5
                    className={`${className} `}
                    onClick={onClick}
                    style={{
                        ...style,
                        textAlign: position,
                        color: color,
                        fontWeight: fw,
                    }}>
                    {children}
                </h5>
            );
        case 'h6':
            return (
                <h6
                    className={`${className} `}
                    onClick={onClick}
                    style={{
                        ...style,
                        textAlign: position,
                        color: color,
                        fontWeight: fw,
                    }}>
                    {children}
                </h6>
            );
        default:
            return (
                <p
                    className={`${className} `}
                    onClick={onClick}
                    style={{
                        ...style,
                        textAlign: position,
                        color: color,
                        fontWeight: fw,
                    }}>
                    {children}
                </p>
            );
    }
};
