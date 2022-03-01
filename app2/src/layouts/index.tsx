import type { GlobalModelState } from 'umi';
import { connect } from 'umi';
import BasicLayout from '@/layouts/base-layout';

export default connect(
  ({
    global,
  }: {
    global: GlobalModelState;
  }) => ({
    global,
  }),
)(BasicLayout);
