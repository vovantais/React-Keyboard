import React from "react";

class LetterFirst2 extends React.Component {

   render() {
      let arr = ["Tab", "й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ъ", "/",];
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

export default LetterFirst2;