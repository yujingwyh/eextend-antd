import React from "react";
import ReactDom from "react-dom";

import {ConfigProvider} from "antd";
import zhCN from "antd/lib/locale-provider/zh_CN";

import Page from './page'

function App() {
  return (
    <ConfigProvider autoInsertSpaceInButton={false}
                    locale={zhCN}>
      <Page/>
    </ConfigProvider>
  );
}

const render = () => ReactDom.render(
  <App/>,
  document.getElementById("app")
);

render();
if (module.hot) {
  module.hot.accept('./page', render)
}
