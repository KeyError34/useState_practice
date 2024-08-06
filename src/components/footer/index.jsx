import styles from "./styles.module.css"
function Footer({bgColor,brdTop}) {
    
  return <div className={styles.footerContainer} style={{backgroundColor:`${bgColor}`,borderTop: `2px solid ${brdTop}`}}>
    <a  className={styles.footerLink} style={{color:`${brdTop}`}} href="https://react.dev/reference/react/useState">CopyRights</a>
    <a className={styles.footerLink} style={{color:`${brdTop}`}} href="https://react.dev/reference/react/useState">Links</a>
  </div>;
}
export default Footer
