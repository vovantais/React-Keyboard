import React from "react";

class Letterlast2 extends React.Component {

   render() {
      let arr = ["RU", "Clear", "", "Shift",];
      return (
         <div class="Border bigSpace">
            <ul>
               {
                  arr.map((item, index) => (
                     <li key={index}>
                        {item}
                     </li>
                  ))
               }
            </ul>
         </div>
      );
   }
}

export default Letterlast2;