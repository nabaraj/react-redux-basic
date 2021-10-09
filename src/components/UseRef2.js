import {useRef, useState, useEffect} from 'react';
function UserAvatar (props) {
  return <img src={props.src} />
}

function Username (props) {
  return <span>{props.name}</span>
}

export default function User () {
  const user = useRef({
    name: "Aleem Isiaka",
    avatarURL: "https://icotar.com/avatar/jake.png?bg=e91e63",
  })

  const [, setForceUpdate] = useState(Date.now());
  
  useEffect(() => {
    setTimeout(() => {
      user.current = {
        name: "Isiaka Aleem",
        avatarURL: "https://icotar.com/avatar/craig.png?s=50", // a new image
      };
      
      setForceUpdate();
    },5000)
  })
  console.log(user);
  return (<div>
    <Username name={user.current.name} />
      <UserAvatar src={user.current.avatarURL} />
  </div>);
}