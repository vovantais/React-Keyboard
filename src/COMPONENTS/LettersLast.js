import React from "react";

class Letterlast extends React.Component {

   render() {
      let arr = ["EN", "Clear", "", "Shift",];
      return (
         <div class="Border bigSpace">
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

export default Letterlast;