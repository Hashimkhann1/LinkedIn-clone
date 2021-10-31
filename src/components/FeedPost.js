import React, {forwardRef} from 'react'
import { Avatar } from '@material-ui/core';
import Feedsinputoption from './Feedsinputoption'
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';
import SendIcon from '@mui/icons-material/Send';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';








const FeedPost = forwardRef(({AvatarUrl , Message , Name , Description}, ref) => {
	return (
		<div ref={ref} className='feedpostcontainer'>
		<div className="fp-header">
			<h3 className='fp_avatar'>{AvatarUrl === '' ? <Avatar/> : <Avatar src={AvatarUrl}/> }</h3>
		<div className="fp_heading">
			<h5>{Name}</h5>
			<p>{Description}</p>
		</div>
		</div>
		<p className='message'>{Message}</p>
		<div className="feeds_option">
			<Feedsinputoption Title='Like' Icon={ThumbUpAltIcon}/>
	     		<Feedsinputoption Title='Comment' Icon={CommentIcon} />
			<Feedsinputoption Title='Share' Icon={ShareIcon} />
			<Feedsinputoption Title='Sent' Icon={SendIcon} />
		</div>
		</div>
	)
})

export default FeedPost
