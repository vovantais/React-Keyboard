import React from "react";

class Numbers extends React.Component {

   render() {
      let arr = ["ё", 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "-", "=", "←"];
      return (
         <div class="Border" onClick={this.handelClick}>
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

export default Numbers;