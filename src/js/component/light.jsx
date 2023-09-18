import PropTypes from "prop-types";
import React from "react";

const Light = (prop) => {

    return (
        <div id={prop.color} className={'light ' + prop.color +(prop.selected === prop.color ? ' shine' : '')} onClick={e => prop.changeLight(e)}>
            
        </div>
    );
};

Light.propTypes = {
    color: PropTypes.string,
    selected: PropTypes.string,
}

export default Light;

