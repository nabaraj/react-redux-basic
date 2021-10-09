// import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ApiTest from '../components/ApiTest';
import Counter from '../components/Counter';
import TextInputWithFocusButton from '../components/UseRefExample';
import User from '../components/UseRef2';
import useAddLibrary from '../components/AddLibrary';
import ChildComp from './../components/RenderProps';

export default function Home() {
  // const result: any = useSelector(selector: Function, equalityFn ?: Function)
  let postData = useSelector(state => state.sampleReducer);
  const [scriptLoaded] = useAddLibrary('https://code.jquery.com/jquery-3.6.0.min.js', 'jQuery');
  return (
    <div className="container">
    {scriptLoaded && <span>{typeof jQuery}</span>}
      {/* {postData} */}
      <h1>Home</h1>
      <ChildComp name={() => [ "nnamdi", "chidume" ]} />
      <div className="pb-5"><Counter initialCount={0} /></div>
      {/* <ApiTest /> */}
      {/* <TextInputWithFocusButton/> */}
      <User/>
    </div>
  )
}
