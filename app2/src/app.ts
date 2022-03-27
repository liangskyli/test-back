

console.log('window.__MICRO_APP_BASE_ROUTE__',window.__MICRO_APP_BASE_ROUTE__);


export const dva = {
  config: {
    onError(err: ErrorEvent) {
      console.error(err);
    },
  },
};
