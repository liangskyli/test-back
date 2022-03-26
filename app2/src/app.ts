
//(window as any).__INJECTED_PUBLIC_PATH_BY_QIANKUN__ = 'http://localhost:7001/sub-demo2';
/*console.log('sub:',(window as any).__INJECTED_PUBLIC_PATH_BY_QIANKUN__,window.location.href);
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
};*/


import ReactDOM from 'react-dom';
import { isInIcestark, getMountNode, registerAppEnter, registerAppLeave } from '@ice/stark-app';

// 在 icestark 中修改渲染的节点
export function modifyClientRenderOpts(memo: any) {
  console.log('getMountNode:',memo);
  const rootElement: any = memo.rootElement;
  /*if(isInIcestark() ) {
    const appElement = document.getElementById('root-h5')!;
    let shadow: ShadowRoot;

    if (appElement.attachShadow) {
      shadow = appElement.attachShadow({ mode: 'open' });
    } else {
      // createShadowRoot was proposed in initial spec, which has then been deprecated
      shadow = (appElement as any).createShadowRoot();
    }
    rootElement = shadow;
  }else{
    rootElement = memo.rootElement;
  }*/
  return {
    ...memo,
    rootElement: rootElement,//isInIcestark() ? getMountNode('root2') : memo.rootElement
  };
}

// 为 icestark 注册生命周期
export function render (oldRender: any) {
  if (isInIcestark()) {
    registerAppEnter((props) => {
      console.log('props:',props);
      /*const appElement = typeof props.container ==='string' ? document.getElementById(props.container)! :props.container;
      const { innerHTML } = appElement;
      appElement.innerHTML = '';
      let shadow: ShadowRoot;

      if (appElement.attachShadow) {
        shadow = appElement.attachShadow({ mode: 'open' });
      } else {
        // createShadowRoot was proposed in initial spec, which has then been deprecated
        shadow = (appElement as any).createShadowRoot();
      }
      shadow.innerHTML = innerHTML;*/
      //rootElement = shadow;
      //console.log('oldRender',oldRender);
      oldRender();
    });
    registerAppLeave(() => {
      //ReactDOM.unmountComponentAtNode(getMountNode('root2'));
      ReactDOM.unmountComponentAtNode(getMountNode());
    });
  } else {
    oldRender();
  }
}

export const dva = {
  config: {
    onError(err: ErrorEvent) {
      console.error(err);
    },
  },
};
