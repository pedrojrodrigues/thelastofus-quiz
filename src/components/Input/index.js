import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const InputBase = styled.input`
    width: 100%;
    padding: 15px;
    font-size: 14px;
    margin-bottom: 25px;
    border: 1px solid #7690A5;
    background-color: #162029;
    color: #fff;
    outline: 0;
`;

export default function Input({ onChange, placeholder, ...props }) {
    return (
        <div>
            <InputBase
                placeholder={placeholder} 
                onChange={onChange}
                {...props} 
            />
        </div>
    );
}

Input.defaultProps = {
    value: '',
};

Input.PropTypes = {
    onChange : PropTypes.func.isRequired,
    placeholder: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
};