import { axiosRequest } from "@liangskyli/axios-request";

const request = axiosRequest({
  loadingMiddlewareConfig: {
    showLoading: () => {
      console.log("showLoading");
    },
    hideLoading: () => {
      console.log("hideLoading");
    },
  },
  serializedResponseMiddlewareConfig:{
    serializedResponseSuccessCode: 0,
  },
  ShowErrorMiddlewareConfig: {
    showError: (err, ctx) => {
      console.log("showError:", err, ctx);
    },
  },
});

export default function Page() {
  const getHttp = async () => {
    await request({ url: "/api/a" })
      .then((result) => {
        console.log("result:", result);
      })
      .catch((e) => {
        console.log("e:", e);
      });
  };

  return (
    <div>
      <h1>Page index</h1>
      <button onClick={getHttp}>ajax</button>
    </div>
  );
}
