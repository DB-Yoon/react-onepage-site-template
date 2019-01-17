import React from 'react';

// rest 쪽에는 onChange, type, name, value, placeholder 등의 input 에서 사용 하는 값들을 넣어줄수 있다.
//const InputWithLabel = ({label, ...rest}) => (
const InputWithLabel = ({...rest}) => (
    <div className='input-wrap'>
        <input {...rest} />
    </div>
);

export default InputWithLabel;