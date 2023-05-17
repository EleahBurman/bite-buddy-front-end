//modules
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

//services
import * as profileService from '../../services/profileService'

//component
import BoardCard from '../../components/BoardCard/BoardCard'

//css
import styles from './ProfileDetails.module.css'

const ProfileDetails = () => {
  const { profileId } = useParams()
  const [profile, setProfile] = useState(null)

  useEffect(() => {
    const fetchProfile = async () => {
      const profileData = await profileService.show(profileId)
      setProfile(profileData)
    }
    fetchProfile()
  }, [profileId])

console.log(profile)
  return (
    <main className={`${styles.container} ${styles.main}`}>
      <h1>Hello, I'm the profile details</h1>
      {profile.boards.map((board)=>(
          (board.recipes.length > 0 ? <BoardCard key={board._id} board={board}/> : <h3 key={board._id}>No Recipes Yet!</h3>)
          ))}
    </main>
  )

}

export default ProfileDetails