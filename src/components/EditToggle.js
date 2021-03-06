import React from 'react';

export default function EditToggle({update}) {
  return (
    <select className="dropDownContainer ml0" onChange={e=>update('allowEdit', e.target.value)}>
      <option value="true"> Allow Edit </option>
      <option value="false"> Disable Edit </option>
    </select>
  )
}