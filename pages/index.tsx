import type { NextPage } from 'next'
import axios from 'axios'
import {Video} from '../types';
import VideoCard from '../components/VideoCard'
import NoResults from '../components/NoResults'



interface Iprops {

  videos: Video[],
}


const Home = ({ videos }: Iprops) => {

  console.log('videos', videos)
  return (
    <div className='flex flex-col gap-10 videos h-full'>
      {videos.length ? (
        videos.map((videos: Video) => (
          <VideoCard  post={videos} key={videos._id}/>
        ))
      ): (
        
        <NoResults  text={'No videos'}/>
      )}
       
  </div>
  )
}



export const getServerSideProps = async  () => {

  const {data} = await axios.get(`http://localhost:3000/api/post`)


  return {
    props: {
      videos: data
    }
  }
}

export default Home
