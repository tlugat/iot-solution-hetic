import styles from './PageContainer.module.scss'

function PageContainer({children}) {
  return (
    <section className={styles.container}>
      {children}
    </section>
  )
}

export default PageContainer
