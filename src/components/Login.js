import React, {useState} from 'react'
import  linkedin from '../assets/images/linked.png'
import '../assets/style/login.css'
import {auth} from '../server/firestore'
import {useDispatch} from 'react-redux'
import {login} from '../features/Userslice'
const Login = () => {
	
	const dispatch = useDispatch();

	const [Login , setLogin] = useState(true)
	const [Fullname , setFullname] = useState('')
	const [ProfileUrl , setProfileUrl] = useState('')
	const [Email , setEmail] = useState('')
	const [Password , setPassword] = useState('')
	const [LoginEmail , setLoginEmail] = useState('')
	const [LoginPassword , setLoginPassword] = useState('')

	const singuphandler = () => {
		// console.log(Fullname);
		// console.log(ProfileUrl);
		// console.log(Email);
		// console.log(Password);
		if(Fullname !== '' && Email !== '' && Password !== ''){
			auth.createUserWithEmailAndPassword(Email , Password)
			.then((userAuth) => userAuth.user.updateProfile({
				displayName:Fullname,
				photoURL:ProfileUrl
			})).then(() => dispatch(login({
				Email:Email,
				Fullname:Fullname,
				ProfileUrl:ProfileUrl,
			}))).catch(err=>console.log(err))
		}

		}
		const LoginHandler = () => {
				auth.signInWithEmailAndPassword(LoginEmail , LoginPassword).then(userAuth =>
					dispatch(login({
						Email: userAuth.email,
						Fullname: userAuth.displayName,
						ProfileUrl:userAuth.photoURL,
				}))).catch(err => console.log(err))
		}
	

	return (
		<div className='LoginContainer'>
			<img src={linkedin} alt="Linked in" />
			{Login ? (<>
				<form action="">
				<input type="email" value={LoginEmail} onChange={e => setLoginEmail(e.target.value)} placeholder='Enter Email' />
				<input type="password" value={LoginPassword} onChange={e => setLoginPassword(e.target.value)} placeholder='Password' />
			</form>
			<button onClick={LoginHandler}>Login</button>
			<p>Are you a new user ? <span className='register_link' onClick={() => setLogin(false)}>Register Now</span></p>
			</>)
			: (<>
			<form>
				<input type="text" placeholder='Full Name' value={Fullname} onChange={(e) =>setFullname(e.target.value)} />
				<input type="text" placeholder='Enter profile photo url' value={ProfileUrl} onChange={(e) => setProfileUrl(e.target.value)} />
				<input type="email" placeholder='Enter Email' value={Email} onChange={(e) => setEmail(e.target.value)}/>
				<input type="password" placeholder='Password' value={Password} onChange={(e) => setPassword(e.target.value)}/>
			</form>
			<button onClick={singuphandler}>Sign up</button>
			<p>Go back to the {" "} <span className='register_link' onClick={() => setLogin(true)}>Login Page</span></p>
			</>)}
		</div>

	)
}

export default Login
