import React from 'react';
import ReactDOM from 'react-dom/client';

function Greeting() {
  return React.createElement('h2',{},"Hello")
}

function DivGreeting() {
  return React.createElement(
    'div',{},
    React.createElement('h1',{},'DIV')
  );
}

function Greeting1() {
  return (
    <div>
      <Person />
      <Message />
    </div>
  )
}

const Person = () => <h1>INTRON</h1>;
const Message = () => {
  return <p>This is a message</p>
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Greeting1/>);