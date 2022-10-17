import React from 'react'
import {FcGoogle} from "react-icons/all"
import {GoogleLogin} from 'react-google-login'
const google_id="62648359602-tdfiivql4f2hp30141lik8q2cfcht7fk.apps.googleusercontent.com";

export const BtnGoogle = ({onGoogle}) => {

    const onFailure=(res)=>{
        console.log('Login Failed',res);
    }

  return (
    <a href="" className='flex items-center justify-evenly relative mx-auto mb-4  text-center' >
        <GoogleLogin
            clientId={google_id}
            buttonText="Google"
            onSuccess={onGoogle}
            onFailure={onFailure}
            cookiePolicy={'single_host_origin'}
            isSignedIn={true}
        />
    </a>
  )
}
