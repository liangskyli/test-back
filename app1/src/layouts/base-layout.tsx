import type { FC } from 'react';
import type { GlobalModelState } from 'umi';
import { AppRouter, AppRoute } from '@ice/stark';
import styles from './base-layout.less';
import { SandboxProps } from '@ice/sandbox';

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
        <AppRouter
          // @ts-ignore
          fetch={async (url: any, ...args: any) => {
            if ((url as string).indexOf('//res.wx.qq.com/open/js/jweixin-1.6.0.js') > -1) {
              return {
                // @ts-ignore
                async text() {
                  return '';
                },
              };
            }

            return window.fetch(url, ...args);
          }}
        >
          <AppRoute
            rootId="root-h5"
            name="sub-zxkp-h5"
            activePath="/"
            entry="http://localhost:5001/sub-zxkp-h5/"
            sandbox={true}
            loadScriptMode="fetch"
            props={{
              getState: () => {
                return {
                  safeArea: {
                    // 渲染安全区域
                    top: 70,
                    bottom: 50,
                    left: 0,
                    right: 0,
                  },
                  level: 'building',
                  buildingId: 'buildingId211',
                };
              },
              observer: {
                addEventListener: (handle: string, e: any) => {
                  console.log('addEventListener:', handle, e);
                },
                dispatchEvent: (handle: string, payload?: any) => {
                  console.log('dispatchEvent:', handle, payload);
                },
              },
            }}
          />
        </AppRouter>
      </div>
    </div>
  );
};

export default BasicLayout;
