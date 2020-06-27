import React from "react";

class LetterSecond extends React.Component {

   render() {
      let arr = ["⬆ Caps", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "Enter",];
      return (
         <div class="Border big">
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

export default LetterSecond;