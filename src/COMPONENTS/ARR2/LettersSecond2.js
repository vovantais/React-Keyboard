import React from "react";

class LetterSecond2 extends React.Component {

   render() {
      let arr = ["⬆ Caps", "ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "э", "Enter",];
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

export default LetterSecond2;