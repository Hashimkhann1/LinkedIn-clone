import React, {useEffect , useState} from 'react';
import FeedsInputs from './FeedsInputs';
import FeedPost from './FeedPost';
import '../assets/style/feeds.css';
import { db } from '../server/firestore'
import FlipMove from "react-flip-move";

const Feeds = () => {

	const [Posts , setPosts] = useState([])
	useEffect(() => {
		db.collection('posts').orderBy('publishment' , 'desc').onSnapshot(snapshot=>setPosts(snapshot.docs.map((doc) => ({
			Avatar: doc.data().Avatar,
			Name: doc.data().Name,
			Description: doc.data().Description,
			Message: doc.data().Message,
			id:doc.id
		}))))
		// db.collection('posts')
		// .get().then((result) => result.docs).then((docs) => docs.map((doc) => ({
		// 	Avatar: doc.data().Avatar,
		// 	Name: doc.data().Name,
		// 	Description: doc.data().Description,
		// 	Message: doc.data().Message,
		// }))).then(Posts=>setPosts(Posts))
		// .catch(err=>console.log(err))
	},[])
	console.log(Posts);
 
	return (
		<div className='feedscontainer'>
			<FeedsInputs/>
			<FlipMove>
			{Posts && Posts.map((Posts , index) =>
				<FeedPost key={Posts.id} AvatarUrl={Posts.Avatar} Message={Posts.Message} Name={Posts.Name} Description={Posts.Description}/>
			)}
			</FlipMove>
		</div>
	)
}

export default Feeds
