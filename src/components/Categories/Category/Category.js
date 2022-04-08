import React from "react";
import {Link} from "react-router-dom";

const category = (props) =>{
    return(
        <tr>
            <th scope={"col"}>{props.category}</th>
        </tr>
    );
}

export default category;