import React from 'react';
import styles from './index.less';

// 正确：项目里使用
import '../resource/index';

// 错误：引用包
import { MyIcon } from "package-test";

export default function Page() {

  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
        <div>
            <div>正确：项目里使用</div>
            <i className="iconfont-common-1 icon-bangzhu ykheader-icon-help"></i>
        </div>
        <div>
            <div>错误：引用包(和上面相同图标)</div>
            <MyIcon/>
        </div>
    </div>
  );
}
