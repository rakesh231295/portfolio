import React from 'react';

const Myheading = (props) => {
//javascript writte into the curly braket

const a = 123;

  return (
    <div>
        <h1>{props.name} {a}!</h1>
        <p>{props.text}</p>
        <MyHeadinglittle />
    </div>
    
  )
};

const MyHeadinglittle =() => <h2>Rakesh kumar</h2>
const MyHeadinglittle2 =() => <h2>Rajesh kumar</h2>
const MyHeadinglittle3 =() => <h2>Siku kumar</h2>
const MyHeadinglittle4 =() => <h2>Piku kumar</h2>

export default Myheading;
export {MyHeadinglittle, MyHeadinglittle2, MyHeadinglittle3, MyHeadinglittle4};