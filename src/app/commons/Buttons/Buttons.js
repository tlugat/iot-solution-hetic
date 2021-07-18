import styles from "./Buttons.module.scss";


const Button = ({value, rounded, method, arrow, secondary}) => (
  <button 
  className={`${styles.button} ${rounded ? styles.rounded : ""} ${secondary ? styles.secondary : ""}`}
  onClick={(e) => {
    e.preventDefault();
    method();
  }}
  >
    {arrow && (
       <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
       <path d="M4.16602 10H15.8327" stroke={secondary ? "#524A79" : "white"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
       <path d="M10 4.16699L15.8333 10.0003L10 15.8337" stroke={secondary ? "#524A79" : "white"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
     </svg>
    )}
    <span className={arrow === "right" ? styles.right : ""}>{value}</span>
  </button>
)


export function PrimaryBtn({value, rounded, method, arrow}) {
  return (
   <Button value={value} rounded={rounded} method={method} arrow={arrow}/>
  )
}

export function SecondaryBtn({value, rounded, method, arrow}) {
  return (
   <Button secondary value={value} rounded={rounded} method={method} arrow={arrow}/>
  )
}


