import React from "react";

class Textarea extends React.Component {
   render() {
      return (
         <div>
            <textarea className='Textarea' placeholder="Enter text ... " value={this.props.value} id="area"></textarea>
         </div>
      );
   }
}

export default Textarea;