import React from "react";

class LetterFirst extends React.Component {

   render() {
      let arr = ["Tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "{", "}", "|",];
      return (
         <div class="Border ">
            <ul>
               {
                  arr.map((item, index) => (
                     <li key ={index}>
                        {item}
                     </li>
                  ))
               }
            </ul>
         </div>
      );
   }
}

export default LetterFirst;