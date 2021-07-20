import styles from "./Buttons.module.scss";


const Button = ({value, rounded, method, arrow, secondary, text, isDisabled, type, customStyles, bgColor}) => {
  
  const classes = `${styles.button} 
    ${rounded ? styles.rounded : ""} 
    ${secondary ? styles.secondary : ""} 
    ${isDisabled ? styles.disabled : ""} 
    ${text ? styles.text : ""} 
    ${bgColor === "soft" ? styles.soft : ""}
    ${bgColor === "ultraSoft" ? styles.ultraSoft : ""}
  `
  
  return (
    <button 
      className={classes}
      onClick={(e) => {
        if(method) {
          e.preventDefault();
          method();
        }
      }}
      disabled={isDisabled}
      type={type}
      style={customStyles}
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
}


export function PrimaryBtn({value, rounded, method, arrow, isDisabled, type, customStyles, bgColor}) {
  return (
   <Button customStyles={customStyles} type={type} isDisabled={isDisabled} value={value} bgColor={bgColor} rounded={rounded} method={method} arrow={arrow}/>
  )
}

export function SecondaryBtn({value, rounded, method, arrow, isDisabled, type, customStyles}) {
  return (
   <Button customStyles={customStyles} type={type} isDisabled={isDisabled} secondary value={value} rounded={rounded} method={method} arrow={arrow}/>
  )
}

export function TextBtn({value, rounded, method, arrow, isDisabled, type, customStyles}) {
  return (
   <Button customStyles={customStyles} type={type} isDisabled={isDisabled} text value={value} rounded={rounded} method={method} arrow={arrow}/>
  )
}


