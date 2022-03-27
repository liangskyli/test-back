import type { FC } from 'react';
import type { GlobalModelState } from 'umi';
import styles from './base-layout.less';

export type IBasicLayout = {
  global: GlobalModelState;
  [key: string]: any;
};
const BasicLayout: FC<IBasicLayout> = (props) => {
  const {
    children,
    location: { pathname },
  } = props;
  const onClick = () => {
    console.log('layout1 click');
  };

  return (
    <div key={pathname}>
      <div className={styles.layout} onClick={onClick}>
        layout1
      </div>
      <div className={styles.app2}>
        {children}
      </div>
    </div>
  );
};

export default BasicLayout;
