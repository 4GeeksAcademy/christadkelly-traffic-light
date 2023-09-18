import React from "react";

const Button = (prop) => {
    return (
        <div>
            <button type="button" className="btn btn-dark mt-2 btnStyles" onClick={() => prop.cycleLights(prop.selected)}>Light Cycle</button>
        </div>
    );
};

export default Button;