import React from 'react'
import Sidebar from '../components/Sidebar'
// import Feeds from './components/Feeds'
import Feeds from '../components/Feeds'
import '../App.css'

const Home = () => {
	return (
		<div className="app_body">
			<Sidebar/>
			<Feeds/>
		</div>
	)
}

export default Home
