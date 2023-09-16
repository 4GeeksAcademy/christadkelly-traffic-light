import PropTypes from "prop-types";
import React, { useState } from "react";

const Light = (prop) => {
    const classList = prop.classList;
    const [light, selectLight] = useState(classList);

    return (
        <div onClick={() => selectLight(prop.color)} className={'light ' + prop.color +(light == prop.color ? ' shine' : '')}>
            
        </div>
    );
};

Light.propTypes = {
    color: PropTypes.string
}

export default Light;
