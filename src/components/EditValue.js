import React from 'react';

/**
 * Edit the value
 */
export const EditValue = ({value,className,onChange,id}) =>(
    <div className={className}>
        <label htmlFor={id}>Set Value</label>
        <input id={id} value={value} onChange={onChange} />
    </div>
);