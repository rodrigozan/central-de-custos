import React from 'react';

function Input(props) {
  return (
    <div class="mb-3">
      <label for={props.id} class="form-label">{props.label}</label>
      <input value={props.value} type={props.type} class="form-control" id={props.id} />
    </div>
  )
}

export default Input