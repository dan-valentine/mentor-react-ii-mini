import React from 'react';

export default function FamilyChanger({allowEdit, update}) {
  return (
    <select disabled={!allowEdit} className="dropDownContainer" onChange={e=>update('fontFamily', e.target.value)}>
      <option value="monospace"> Monospace </option>
      <option value="arial"> Arial </option>
      <option value="courier"> Courier </option>
    </select>
  )
}