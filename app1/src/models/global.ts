export type GlobalModelState = {};
export type GlobalModelType = {
  namespace: string;
  state: GlobalModelState;
  effects: {};
  reducers: {};
};

const GlobalModel: GlobalModelType = {
  namespace: 'global',
  state: {},
  effects: {},
  reducers: {},
};
export default GlobalModel;
