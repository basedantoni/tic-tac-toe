/* eslint-disable */
import React from 'react';

const Square = (props) => {
    const { value } = props;
    const style = {
      width: 50, 
      height: 50, 
      background: '#fff', 
      border: '1px solid #999', 
      marginLeft: -1,
      marginTop: -1,
      float: 'left',
      textAlign: 'center',
      fontSize: 30,
      fontWeight: 'bold'
    }

    return (
      <button 
        className="square" 
        onClick={ props.onClick }
        style={ style }
      >
        { value }
      </button>
    );
}

export default Square;
