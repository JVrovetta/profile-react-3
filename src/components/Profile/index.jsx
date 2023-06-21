import styles from './styles.module.scss'

function Profile({ avatar, name, bio, email, phone, githubUrl, linkedinUrl, twitterUrl }) {
  return (
    <div className={styles.container}>
      <img src={avatar} alt={name} />
      <h2>{name}</h2>
      <div className={styles.info}>
        <p>{bio}</p>
        <p>{phone}</p>
        <p>{email}</p>
      </div>
      <div className={styles.link}>
        <a href={githubUrl} target='_blank'>GitHub</a>
        <a href={linkedinUrl} target='_blank'>LinkedIn</a>
        <a href={twitterUrl} target='_blank'>Twitter</a>
      </div>
    </div>
  )
}

export default Profile