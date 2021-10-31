import React from 'react'
import '../assets/style/feeds.css'
const Feedsinputoption = ({Title , Icon , color}) => {
	return (
		<div className='feeds_item'>
			{Icon && (<Icon  className='f_icon' style={{color:color}}/>)}
			{Title && <h5>{Title}</h5>}
		</div>
	)
}

export default Feedsinputoption
