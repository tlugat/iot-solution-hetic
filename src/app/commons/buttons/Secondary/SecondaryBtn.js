import styles from "./SecondaryBtn.module.scss";



const arrow_logo = (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.16602 10H15.8327" stroke="#524A79" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10 4.16699L15.8333 10.0003L10 15.8337" stroke="#524A79" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>

)

function SecondaryBtn({value, rounded, method, arrow}) {
  return (
    <button 
    className={`${styles.button} ${rounded ? styles.rounded : ""}`}
    onClick={(e) => {
      e.preventDefault();
      method();
    }}
    >
      {arrow && arrow_logo}
      <span className={arrow === "right" ? styles.right : ""}>{value}</span>
    </button>
  )
}

export default SecondaryBtn
