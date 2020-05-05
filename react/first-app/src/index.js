import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HelloBox from './helloBox';


ReactDOM.render(
  <div>
    <HelloBox name = "John Doe" para = "I am freelancer and music enthusiast" email = "johndoe@gmail.com"/>
    <HelloBox name = "Julius Caeser" para = "I am front-end Developer and have a curious eye for design" email = "juliusbrutus@gmail.com"/>
    <HelloBox name = "Ricky" para = "I am aspiring data scientist and love to bring out meaning from numbers" email = "rickmorty@gmail.com"/>
    <HelloBox name = "Shane dock" para = "I am back-end developer and a security enthusiast" email = "dock24shane@gmail.com"/>

  </div>,
  document.getElementById('root')

)