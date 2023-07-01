import { ReactNode } from 'react';

export interface PortalProps {
  children: ReactNode;
  visible: boolean;
  onClose: () => void;
  bodyClassName?: string;
  containerClassName?: string;
  bodyStyle?: Object;
  containerStyle?: Object;
}
