import React from 'react'
// import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import '../assets/style/sidebar.css'
import Code from '../assets/images/code.jpeg'
import {useSelector} from 'react-redux'
import { selectUser } from '../features/Userslice'
import { Avatar } from '@material-ui/core';




const Sidebar = () => {

	const user = useSelector(selectUser)

	const RecentItem = ({item}) => {
		return(
			<div className='main_recent'>
				<p className='recent_text'><span className='r_span'>#</span> {item}</p>
			</div>
		)
	}
	return (
		<div className="sidebarleft_main">
		<div className='sidebarLeft'>
			<img src={Code} alt="bg_code" />
			<div className='avatar_icon'>
				{user.Fullname !== undefined && user.ProfileUrl !== undefined ? (<Avatar src={user.ProfileUrl}></Avatar>):null}
			{/* <Avatar src={user.ProfileUrl !== '' ? user.ProfileUrl : user.Fullname[0]}>{user.Fullname[0]}</Avatar> */}

			</div>
			<h4>{user.Fullname}</h4>
			<p>{user.Email}</p>
			<div className='sidebarLeft_stats'>
				<p className='display_stats'>Who Viewed your Profile</p>
				<span className='num_stats'>50</span>
			</div>
			<div className='sidebarLeft_stats_2'>
				<p className='display_stats'>Views of your post</p>
				<span className='num_stats'>138</span>
			</div>
			</div>
			
			<div className="main_recentitem">
				<h5 className='recent_heading'>Recent</h5>
				<RecentItem item=' Career join'/>
				<RecentItem item=' dubai Recruitment'/>
				<RecentItem item=' Recruitment'/>
				<RecentItem item=' Islamabad'/>
				<RecentItem item=' ios'/>
			</div>
		</div>
	)
}

export default Sidebar
