import React, { Component } from 'react';
import Sns from './Sns';


class App extends Component {
  render() {
    return(
    <>
    <Sns name='victoria' age={13} city='seoul'></Sns>
    <Sns name='sun' age={34} city='busan'></Sns>
    <Sns name='johseb' age={25} city='busan'></Sns>
    <Sns name='syleemomo' age={9} city='seoul'></Sns>
    <Sns name='hannah' age={41} city='deagu'></Sns>
    <Sns name='shara' age={37} city='seoul'></Sns>
    <Sns name='martin' age={28} city='deagu'></Sns>
    <Sns name='gorgia' age={39} city='seoul'></Sns>
    <Sns name='nana' age={24} city='busan'></Sns>
    <Sns name='dannel' age={19} city='seoul'></Sns>
    </>
  )
  }
}
export default App;

/*
{name:'victoria',age:13,city:'seoul'},
    {name:'sun',age:34,city:'busan'},
    {name:'johseb',age:25,city:'busan'},
    {name:'syleemomo',age:9,city:'seoul'},
    {name:'hannah',age:41,city:'deagu'},
    {name:'shara',age:37,city:'seoul'},
    {name:'martin',age:28,city:'deagu'},
    {name:'gorgia',age:39,city:'seoul'},
    {name:'nana',age:24,city:'busan'},
    {name:'dannel',age:19,city:'seoul'}
    
    <Sns name='sun' age={34} city='busanl'></Sns>
    <Sns name='johseb' age={25} city='busanl'></Sns>
    <Sns name='syleemomo' age={9} city='seoul'></Sns>
    <Sns name='hannah' age={41} city='deagu'></Sns>
    <Sns name='shara' age={37} city='seoul'></Sns>
    <Sns name='martin' age={28} city='deagu'></Sns>
    <Sns name='gorgia' age={39} city='seoul'></Sns>
    <Sns name='nana' age={24} city='busan'></Sns>
    <Sns name='dannel' age={19} city='seoul'></Sns>
    
    */