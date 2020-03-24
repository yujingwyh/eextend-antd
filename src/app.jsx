import React from "react";
import {render} from "react-dom";

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

render(<App/>, document.getElementById("app"));
