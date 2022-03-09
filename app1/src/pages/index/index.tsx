//import { MicroApp, MicroAppWithMemoHistory } from 'umi';
//import style from './index.less';

const IndexPage = () => {
  const onClick = () => {
    console.log('index1 click');
  };
  return (
    <div id="wrap" className="fz32">
      <div onClick={onClick}>index1</div>
      {/*<MicroApp name="sub-demo2" className={style.app2} />*/}
      {/*<MicroApp name="sub-zxkp-h5" base="/sub-zxkp-h5" className={style.app2} />*/}
      {/*<MicroAppWithMemoHistory
        name="sub-demo2"
        url="/index"
        current={2}
        pageSize={5}
      />*/}
    </div>
  );
};
export default IndexPage;
