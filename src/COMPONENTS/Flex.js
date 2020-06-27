import React from "react";
import Numbers from "./Numbers";
import LetterFirst from "./LettersFirst";
import LetterSecond from "./LettersSecond";
import LetterThird from "./LettersThird";
import Letterlast from "./LettersLast";
import Numbers2 from "./ARR2/Numbers2";
import LetterFirst2 from "./ARR2/LettersFirst2";
import LetterSecond2 from "./ARR2/LettersSecond2";
import LetterThird2 from "./ARR2/LettersThird2";
import Letterlast2 from "./ARR2/LettersLast2";

class Flex extends React.Component {
   render() {
      return (
         this.props.open ? 
         <div className="Flex" onClick={this.props.event} >
               <div>
                  <Numbers />
               </div>
               <div>
                  <LetterFirst />
               </div>
               <div>
                  <LetterSecond />
               </div>
               <div>
                  <LetterThird />
               </div>
               <div>
                  <Letterlast />
               </div>
         </div>
         :
            <div className="Flex" onClick={this.props.event} >
               <div>
                  <Numbers2/>
               </div>
               <div>
                  <LetterFirst2/>
               </div>
               <div>
                  <LetterSecond2/>
               </div>
               <div>
                  <LetterThird2/>
               </div>
               <div>
                  <Letterlast2/>
               </div>
            </div>
      );
   }
}

export default Flex;