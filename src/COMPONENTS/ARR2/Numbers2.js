import React from "react";

class Numbers2 extends React.Component {

   render() {
      let arr = ["`", '!', '@', '#', '$', '%', '^', '&', '*', '(', ")", "_", "+", "←"];
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

export default Numbers2;