import styles from './AuthError.module.scss'

const AuthError = ({error}) => {

  if(!error) {
    return null
  } 
     return (
    <div className={styles.container}>
      <p>Une erreur est survenue</p>
      <svg width="20" height="20" viewBox="0 0 20 20" fill="#FF7E7E" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM11 15H9V13H11V15ZM11 11H9V5H11V11Z" fill="#fff"/>
      </svg>
    </div>
  )
  

 
 
}

export default AuthError
