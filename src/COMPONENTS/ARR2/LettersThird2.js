import React from "react";

class LetterThird2 extends React.Component {

   render() {
      let arr = ["Shift", "я", "ч", "с", "м", "и", "т", "ь", "б", "ю", "/", "?","<",">"];
      return (
         <div class="Border bigShift">
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

export default LetterThird2;