import React from 'react';

export default function SizeChanger({allowEdit, update}) {
  return (
    <select disabled={!allowEdit} className="dropDownContainer" onChange={e=>update('fontSize', e.target.value)}>
      <option value="12"> 12 </option>
      <option value="13"> 13 </option>
      <option value="14"> 14 </option>
    </select>
  )
}