declare module 'react-reveal/Bounce' {
  import { FC, ReactNode } from 'react';
  interface BounceProps {
    children?: ReactNode;
    [key: string]: any;
  }
  const Bounce: FC<BounceProps>;
  export default Bounce;
}