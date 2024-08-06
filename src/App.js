import "./App.css";
import { useState } from "react";
import Nav from "./components/nav/index";
import MainContent from "./components/main";
import Footer from "./components/footer";
function App() {
  const [swicher, setSwicher] = useState(true);

  function onSwich() {
    setSwicher(!swicher);
  }

  const styles = {
    nav: {
      color: swicher ? "rgb(1, 5 ,110)" : "rgb(144, 188 ,197)",
      backgroundColor: swicher ? "rgb(173 , 217, 230)" : " rgb(6, 63, 82)",
      borderBottom: swicher ? "rgb(0, 33, 50)" : "rgb(144, 188 ,197)",
      borderColor: swicher ? "rgb(1 ,0 ,128)" : "rgb(1, 5 ,110)",
      // textAlign: 'center',
    },

    main: {
      color: swicher ? "rgb(1, 5 ,110)" : "rgb(144, 188 ,197)",
      backgroundColor: swicher ? "rgb(196 ,223 ,230)" : "rgb(34, 70, 82)",
      borderTop: swicher ? "rgb(0, 33, 50)" : "rgb(144, 188 ,197)",
    },

    footer: {
      color: swicher ? "rgb(1, 5 ,110)" : " rgb(6, 63, 82)",
      backgroundColor: swicher ? "rgb(173 , 217, 230)" : " rgb(6, 63, 82)",
      borderTop: swicher ? "rgb(0, 33, 50)" : "rgb(144, 188 ,197)",
    },

    btn: {
      backgroundColor: swicher ? "rgb(144, 188 ,197)" : "rgb(0, 33, 50)",
      color: swicher ? "rgb(0, 33, 50)" : "rgb(144, 188 ,197)",
    },
  };
  console.log(styles.nav.color);

  return (
    <div className="App">
      <Nav
        onSwich={onSwich}
        colorBtn={styles.nav.color}
        bgColor={styles.nav.backgroundColor}
        brdBottom={styles.nav.borderBottom}
        backgroundColor={styles.btn.backgroundColor}
      />
      <MainContent
        colorHeader={styles.main.color}
        bgColor={styles.main.backgroundColor}
        colorText={styles.btn.color}
      />
      <Footer
        bgColor={styles.footer.backgroundColor}
        brdTop={styles.footer.borderTop}
      />
    </div>
  );
}

export default App;
