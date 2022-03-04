import { history } from 'umi';
import styles from './index.less';

const IndexPage = () => {
  const onClick = () => {
    console.log('index2 click');
  };
  const onClick2 = () => {
    console.log('index22 click');
    history.push('/login');
  };
  return (
    <div id="wrap" className="fz32">
      <div onClick={onClick} className={styles.click2}>index2</div>
      <div onClick={onClick2} className={styles.click22}>index22</div>
    </div>
  );
};
export default IndexPage;
