import React from "react";

class LetterThird extends React.Component {

   render() {
      let arr = ["Shift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "?","<",">"];
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

export default LetterThird;