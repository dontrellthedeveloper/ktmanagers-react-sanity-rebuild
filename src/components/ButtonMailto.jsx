import React from 'react';
import { Link } from "react-router-dom";

const ButtonMailto = ({ mailto, label }) => {
    return (
        <Link

            onClick={(e) => {
                e.preventDefault();
                window.location.href = mailto;

            }}
            to='#'
        >
            {label}
        </Link>
    );
};

export default ButtonMailto;