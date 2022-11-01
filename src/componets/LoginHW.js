import { Button, Input, Text } from '@chakra-ui/react' 
import React from 'react'
import { useNavigate } from "react-router-dom"


function LoginHW() {
      const [names, setNames] = React.useState({ fName: "", lName: "" })

      let navigate = useNavigate();
      const LogIn = () => {
      if (names. fName. length =="" || names. lName. length =="") {
      alert ("required")
      } else if (names. fName. length == "" && names. lName. length =="" ) {
      alert ("required")
      } else {
      alert (` welcome ${names. fName} `)
      }
      }
      const Submit = () => {
      LogIn()
      navigate('/RayefStory');
      }
      return (
      <div>
      <Input w={40} m={3} value={names. fName} onChange={r => { setNames ({ ...names, fName: r.target. value }) }}></Input>
       <Input w={40} m={3} value={names. lName} onChange={e => { setNames ({ ...names, lName: e.target. value }) }}></Input> 
       <br />
      <Button m={3} onClick={Submit}>Sub</Button>
      <Text>{names. lName}</Text>
      <Text>{names. fName}</Text><br /> 
      </div>
  )
}

export default LoginHW