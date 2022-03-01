import {Subscription} from "@@/plugin-dva/connect";

export type GlobalModelState = {};
export type GlobalModelType = {
  namespace: string;
  state: GlobalModelState;
  effects: {};
  reducers: {};
  subscriptions: { setup: Subscription };
};

const GlobalModel: GlobalModelType = {
  namespace: 'global',
  state: {},
  effects: {},
  reducers: {},
  subscriptions: {
    setup({ history }) {
      // 监听 history 变化
      console.log(history)
      return history.listen(() => {

      });
    }
  }
};
export default GlobalModel;
