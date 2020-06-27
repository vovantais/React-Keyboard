import React, { Component } from 'react';
import Textarea from './Textarea';
import Flex from './Flex';

class Container extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         value: '',
         flag: false,
      }
   }
   handelClick = (e) => {
      let sumbol = e.target.textContent;
      this.setState((prev) => {
         let str = prev.value + sumbol;
         if (sumbol === "Clear") {
            return {
               value: '',
            }
         }
         if (sumbol === "Tab") {
            return {
               value: '    ' + str.slice(0, -3),
            }
         }
         if (sumbol === "←") {
            return {
               value: str.slice(0, -2),
            }
         }
         if (sumbol === "") {
            return {
               value: str + " ",
            }
         }
         if (sumbol === "Enter") {
            return {
               value: str.slice(0, -5) + "\n",
            }
         }
         if (sumbol === "⬆ Caps") {
            return {
               value: str.slice(0, -100) + str.slice(0, -6).toUpperCase(),
            }
         }
         if (sumbol === "Shift") {
            let stroka = str.replace(/Shift/gi, '');
            let str2 = stroka.split('');
            let arr = [];
            arr.push(str2);
            let del= arr[0].length-1;
            return {
               value: stroka.slice(0, -1) + stroka.slice(del).toUpperCase(),
            }
         }

         if (sumbol === 'EN' || sumbol === 'RU') {
            this.setState({
               flag: !this.state.flag,
               value: str.slice(0,-2),
            });
         }
         return {
            value: str,
         }
      })
   }
   render() {
      return (
         <div className='Container'>
            <Textarea value={this.state.value} />
            <Flex event={this.handelClick}  open={this.state.flag}/>
         </div>
      );
   }
}

export default Container;
// ↩