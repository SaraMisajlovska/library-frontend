import React from "react";
import Category from "./Category/Category";


const categories = (props) =>{
    return (
        <div className={"container mm-4 mt-5"}>
            <div className={"row"}>
                <div className={"table-responsive"}>
                    <table className={"table table-striped text-center"}>
                        <thead>
                        <tr >
                            <th scope={"col"}>Category</th>
                        </tr>
                        </thead>
                        <tbody>
                        {props.categories.map((category) =>{
                           return(
                               <Category category={category} />
                           );
                        })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default categories;