import { MicroApp } from 'umi';
import style from './index.less';

const IndexPage = () => {
  const onClick = () => {
    console.log('index1 click');
  };
  return (
    <div id="wrap" className="fz32">
      <div onClick={onClick}>index1</div>
      <MicroApp name="sub-demo2" className={style.app2} />
    </div>
  );
};
export default IndexPage;
