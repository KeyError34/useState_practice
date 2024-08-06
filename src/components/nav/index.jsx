import styles from "./styles.module.css"
function Nav({ onSwich, colorBtn, bgColor,brdBottom,backgroundColor}) {
  return (

    <nav className={styles.navMenu} style={{backgroundColor:`${bgColor}`,color:`${colorBtn}`, borderBottom:`2px solid ${brdBottom}`}}>
      <p style={{ paddingRight:"5px" ,color:`${brdBottom}`}}>TtemeSwitcher : </p>
      <button className={styles.navBtn}
        style={{
          color:`${brdBottom}`,
          border: `2px solid ${brdBottom}`,
          backgroundColor: `${backgroundColor}`,
        }}
        onClick={onSwich}
      >
        Switch <br />
        Theme
      </button>
    </nav>
  );
}

export default Nav;
