import { cn } from '@/lib/utils';
import { CSSProperties, FC } from 'react';

export default function Line({
    color,
    height,
    width,
    style,
    className,
}: {
    color?: string;
    height?: string;
    width?: string;
    style?: CSSProperties;
    className?: string;
}) {
    return (
        <div
            className={cn('h-[1px] w-full bg-blue-100', className)}
            style={{ ...style, backgroundColor: color, width, height }}
        ></div>
    );
}
