import React from "react";

import {Row,Col} from 'antd'
import './page.less'

export default class Page extends React.Component{
  render() {
    return <Row className={'page-row'}>
        <Col width={200}>1</Col>
        <Col flex={1}>2</Col>
      </Row>
  }
}
