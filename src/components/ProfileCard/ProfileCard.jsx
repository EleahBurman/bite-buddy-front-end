//npm modules
import { Link } from 'react-router-dom'

//assets
import tacoman from '../../assets/icons/tacoman.png'

//css
import styles from './ProfileCard.module.css'

const ProfileCard = ({ profile }) => {
  const photo = profile.photo ? profile.photo : tacoman
  if (profile.image) {
    return (
      <Link to={`/profiles/${profile._id}`}>
        <main className={`${styles.profilecardcontainer}`}>
          <div className={`${styles.profileimage}`}>
            <img style={{width: '200px', height: '200px'}} src={photo} alt="Profile Photo" />
          </div>
          <div className={`${styles.nameandboards}`}>
            <h3>{profile.name}</h3>
            <h4>{profile.boards.length} Boards</h4>
          </div>
        </main>
      </Link>
    )
  } else {
    return (
      <Link to={`/profiles/${profile._id}`} >
        <main className={`${styles.profilecardcontainer}`}>
          <div className={`${styles.noprofileimage}`}>
            <img style={{width: '200px', height: '200px'}} src={photo} alt="Taco Man" />
          </div>
          <div className={`${styles.nameandboards}`}>
            <h3>{profile.name}</h3>
            <h4>{profile.boards.length} Boards</h4>
          </div>
        </main>
      </Link>
    )
  }
}

export default ProfileCard