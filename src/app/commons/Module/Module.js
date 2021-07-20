import styles from './Module.module.scss'

function Module({children, customStyles}) {
  return (
    <div style={customStyles} className={styles.container}>
      {children}
    </div>
  )
}

export default Module
