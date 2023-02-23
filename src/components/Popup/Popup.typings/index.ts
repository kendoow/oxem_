import React from 'react'

export interface IPopupProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  isOpen?: boolean;
  className?: string;
  onClose?: () => any;
  initialElementRef: React.MutableRefObject<null | HTMLDivElement>;
}
