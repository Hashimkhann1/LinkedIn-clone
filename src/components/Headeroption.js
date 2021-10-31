import React from 'react'
import '../assets/style/Header.css'
import {Link} from 'react-router-dom'

const Headeroption = ({title , Icon , Avatar , Signout , path}) => {
	return (
		<>
		<div className="headerItem">
			<Link to={path}>
				{Icon && <Icon/>}
				{title && <p>{title}</p>}
			{Avatar && <img src={Avatar} alt='Avatar' onClick={Signout}/>}
			</Link>
			
		</div>
		</>
	)
}

export default Headeroption
