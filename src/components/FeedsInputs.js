import React, {useState} from 'react'
import Feedsinputoption from './Feedsinputoption'
import '../assets/style/feeds.css'
// import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import YouTubeIcon from '@material-ui/icons/YouTube';
import EventNoteIcon from '@material-ui/icons/EventNote';
import DescriptionIcon from '@material-ui/icons/Description';
import PhotoIcon from '@material-ui/icons/Photo';
import {db} from '../server/firestore'
import firebase from 'firebase'
import {useSelector} from 'react-redux'
import { selectUser } from '../features/Userslice'
import { Avatar } from '@material-ui/core';


const FeedsInputs = () => {

	const user = useSelector(selectUser)
	const [EnterPost , setEnterPost] = useState('')

	const InputChangeHandler = (event) => {
		setEnterPost(event.target.value)
	}

	const createposthandler = (e) => {
		e.preventDefault()
		db.collection('posts').add({
			Name: user.Fullname,
			Description: user.Email,
			Message: EnterPost,
			Avatar: user.ProfileUrl == null ? '' : user.ProfileUrl,
			publishment: firebase.firestore.FieldValue.serverTimestamp(),
		}).catch(() => alert('ERROR'))

		setEnterPost('')

	}
	return (
		<div className='feedsInput_container'>
			<div className='feedsinput_writeplace'>
					<Avatar src={user.ProfileUrl} className='avatar'></Avatar>

				<div className='feedsinputs_textcontainer'>
					<form action="">
						<input type="text" placeholder='Start a Post' className='feed_input' value={EnterPost} onChange={InputChangeHandler}/>
						<input type='submit' onClick={createposthandler} style={{display:'none'}}/>
				
					</form>
					
				</div>
			</div>
			<div className="feeds_option">
				<Feedsinputoption Title='Photo' Icon={PhotoIcon} color='#70b5f9'/>
	  	     		<Feedsinputoption Title='Video' Icon={YouTubeIcon} color='#7fc15e'/>
				<Feedsinputoption Title='Event' Icon={EventNoteIcon} color='#e7a33e'/>
				<Feedsinputoption Title='Write article' Icon={DescriptionIcon} color='#fc9295'/>
			</div> 
		</div>
	)
}

export default FeedsInputs
        