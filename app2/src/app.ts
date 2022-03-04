
//(window as any).__INJECTED_PUBLIC_PATH_BY_QIANKUN__ = 'http://localhost:7001/sub-demo2';
console.log('sub:',(window as any).__INJECTED_PUBLIC_PATH_BY_QIANKUN__,window.location.href);
console.log('qiankun __POWERED_BY_QIANKUN__:',(window as any).__POWERED_BY_QIANKUN__);
console.log('qiankun __QIANKUN_DEVELOPMENT__:',(window as any).__QIANKUN_DEVELOPMENT__);
console.log('qiankun Zone:',(window as any).Zone);


export const qiankun = {
  // 应用加载之前
  async bootstrap(props:any) {
    console.log('app1 bootstrap', props);
  },
  // 应用 render 之前触发
  async mount(props:any) {
    console.log('app1 mount', props);
  },
  // 应用卸载之后触发
  async unmount(props:any) {
    console.log('app1 unmount', props);
  },
};

export const dva = {
  config: {
    onError(err: ErrorEvent) {
      console.error(err);
    },
  },
};
