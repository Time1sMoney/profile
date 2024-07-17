import React, { forwardRef } from 'react';

interface Props {
  style?: React.CSSProperties;
  className?: string;
  onMouseDown?: (event: React.MouseEvent) => void;
  onMouseUp?: (event: React.MouseEvent) => void;
  onTouchEnd?: (event: React.TouchEvent) => void;
  children?: React.ReactNode;
}

const GridItem: React.ForwardRefRenderFunction<
  HTMLDivElement,
  Props
> = ({ children, ...props }, ref) => {
  return (
    <div {...props} ref={ref}>
      {children}
    </div>
  );
};

const CustomGridItemComponent = forwardRef(GridItem)

export default CustomGridItemComponent;
