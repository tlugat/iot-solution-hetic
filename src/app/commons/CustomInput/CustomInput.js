import styles from "./CustomInput.module.scss";
import {getIn} from "formik";

function getStyles(errors, fieldName, fieldValue) {
  if (getIn(errors, fieldName)) {
    return {
      border: "2px solid #FF7E7E"
    }
  } else if(fieldValue.length > 0) {
    return {
      border: "2px solid #29B95F"
    }
  }
}

export const CustomError = ({children}) => (
  <div className={styles.errorMessage}>
    <p>{children}</p>
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM11 15H9V13H11V15ZM11 11H9V5H11V11Z" fill="#FF7E7E"/>
    </svg>
  </div>
)

export const CustomInput = ({field, form: {errors}, ...props}) => {

  return (
    <div className={styles.container}>
      <label>{field.name}</label>
      <input style={getStyles(errors, field.name, field.value)} {...field} {...props}></input>
    </div>
  )
}

export default CustomInput