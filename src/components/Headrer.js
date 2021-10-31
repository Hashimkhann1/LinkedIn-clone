import React from 'react'
import LinkedinImage from '../assets/images/Linkedin.png'
import '../assets/style/Header.css'
import SearchIcon from '@material-ui/icons/Search';
import Headeroption from './Headeroption'
import HomeIcon from '@material-ui/icons/Home';
import PeopleIcon from '@material-ui/icons/People';
import WorkIcon from '@material-ui/icons/Work';
import SmsIcon from '@material-ui/icons/Sms';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '../assets/images/pro.jpeg'
import {auth} from '../server/firestore'
import {useDispatch , useSelector } from 'react-redux'
import {logout , selectUser} from '../features/Userslice'

const Header = () => {

	const dispatch = useDispatch();
	const user = useSelector(selectUser)
	const   signoutHandler = () => {
		auth.signOut();
		dispatch(logout())
	}

	console.log(user);
	return(
		<div className="main-header">
			<div className="header_left">
				<img src={LinkedinImage} alt="Linkedin logo" />
				<div className="header_search">
					<SearchIcon/>
					<input type="text" placeholder="Search" />
				</div>
			</div>
			<div className="header_right">
				<Headeroption Icon={HomeIcon} title="Home" path='/'/>
				<Headeroption Icon={PeopleIcon} title="My Network" path='/Network'/>
				<Headeroption Icon={WorkIcon} title="Jobs" path='/Jobs'/>
				<Headeroption Icon={SmsIcon} title="Messaging" path='/Messaging'/>
				<Headeroption Icon={NotificationsIcon} title="Notification" path='/Notification'/>
				<Headeroption  Avatar={user.ProfileUrl == null ? Avatar : user.ProfileUrl} Signout={signoutHandler} />

			</div>
		</div> 
	)
}

export default Header;