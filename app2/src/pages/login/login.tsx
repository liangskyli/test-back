import { Fragment } from 'react';
import type { LoginModelState, ConnectRC } from 'umi';
import { connect } from 'umi';

type PageProps = {
  login: LoginModelState;
};

const LoginPage: ConnectRC<PageProps> = ({ }) => {
  return (
    <Fragment>
      <div id="wrap" className="fz32 pos-r">
        login2
      </div>
    </Fragment>
  );
};
export default connect(({ login }: { login: LoginModelState }) => ({
  login,
}))(LoginPage);
