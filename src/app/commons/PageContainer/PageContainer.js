import styles from './PageContainer.module.scss'

function PageContainer({children, customStyles}) {
  return (
    <section style={customStyles} className={styles.container}>
      {children}
    </section>
  )
}

export default PageContainer
