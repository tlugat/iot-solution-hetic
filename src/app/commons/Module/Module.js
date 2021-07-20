import styles from './Module.module.scss'

function Module({children}) {
  return (
    <div className={styles.container}>
      {children}
    </div>
  )
}

export default Module
