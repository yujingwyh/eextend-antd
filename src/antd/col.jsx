import React from 'react'
import AntdCol from 'antd/lib/col/index';


function CustomAntdCol(props) {
  const {style = {}, width, ...otherProps} = props;

  if (width !== undefined) {
    style.width = width;
  }

  return <AntdCol {...otherProps} style={style}>{props.children}</AntdCol>
}


export default CustomAntdCol;
