import React from "react";
import {Link} from "react-router-dom";

const book = (props) => {
   return(
       <tr>
           <th scope={"col"}>{props.book.name}</th>
           <th scope={"col"}>{props.book.category}</th>
           <th scope={"col"}>{props.book.author.name} {props.book.author.surname}</th>
           <th scope={"col"}>{props.book.availableCopies}</th>
           <th scope={"col"} className={"text-right"}>
               <button
                   title={"Mark as taken"}
                   className={"btn btn-primary ml-2 m-1"}
                     onClick={() => {
                         props.onMarkAsTaken(props.book.id)
                     }}
               >
                   Mark as taken
               </button>

               <Link className={"btn btn-info ml-2 m-1"}
                     onClick={() => {
                         props.onEdit(props.book.id)
                     }}
                     to={`/books/edit/${props.book.id}`}
               >
                   Edit
               </Link>
               <button
                   title={"Delete"}
                   className={"btn btn-danger ml-2 m-1"}
                   onClick={() => {
                       props.onDelete(props.book.id)
                   }}
               >
                   Delete
               </button>
           </th>
       </tr>
   )
}
export default book;