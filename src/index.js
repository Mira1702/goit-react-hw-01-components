import React from 'react';
import ReactDOM from 'react-dom';


// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

const link = React.createElement('a', { href: 'reactjs.org', target: '_blank' }, "ссылка");

const jsxLink = <a href='reactjs.org' target='_blank'>ссылка</a>;
console.log(link);
console.log(jsxLink);
// ReactDOM.render(link, document.getElementById('root'));
