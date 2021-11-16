import React from 'react';

function Button(props) {
  return (
    <button type={props.type} class={props.class}>{props.name}</button>
  )
}

export default Button