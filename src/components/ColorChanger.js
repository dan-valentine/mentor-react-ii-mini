import React from 'react';

export default function ColorChanger({allowEdit, update}) {
  return (
    <select disabled={!allowEdit} className="dropDownContainer" onChange={e=>update('fontColor', e.target.value)}>
      <option value="black"> Black </option>
      <option value="blue"> Blue </option>
      <option value="green"> Green </option>
    </select>
  )
}