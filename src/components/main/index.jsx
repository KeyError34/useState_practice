import styles from "./styles.module.css"
function MainContent({ colorHeader, bgColor,colorText }) {
  return (
    <main style={{ backgroundColor:`${bgColor}`}} className={styles.mainComtent}>
      <h3 style={{ color:`${colorHeader}`}}>First paragraph</h3>
      <p style={{marginBottom:"10px", color:`${colorText}`}}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero
        deleniti harum placeat nihil id delectus corrupti, eius optio odit
        veritatis. Culpa doloribus qui sit, enim cupiditate quibusdam modi
        repellat harum odit sed praesentium! Magni eos debitis laborum,
        explicabo quod error quis id quae fugit, necessitatibus laudantium?
        Voluptates a repudiandae tempora qui nobis fugit nostrum natus corporis
        explicabo possimus debitis velit provident error necessitatibus cum,
        dolores neque ipsam quos architecto aliquid odio! Soluta aliquid earum
        suscipit perferendis quae, similique nobis architecto tempora et
        nesciunt cumque quam, nam harum? Laborum est enim molestias. Rem facilis
        sed corporis facere odit ad voluptas non.
      </p>
      <h3 style={{ color:`${colorHeader}`}}>Second paragraph</h3>
      <p style={{marginBottom:"10px", color:`${colorText}`}}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero
        deleniti harum placeat nihil id delectus corrupti, eius optio odit
        veritatis. Culpa doloribus qui sit, enim cupiditate quibusdam modi
        repellat harum odit sed praesentium! Magni eos debitis laborum,
        explicabo quod error quis id quae fugit, necessitatibus laudantium?
        Voluptates a repudiandae tempora qui nobis fugit nostrum natus corporis
        explicabo possimus debitis velit provident error necessitatibus cum,
        dolores neque ipsam quos architecto aliquid odio! Soluta aliquid earum
        suscipit perferendis quae, similique nobis architecto tempora et
        nesciunt cumque quam, nam harum? Laborum est enim molestias. Rem facilis
        sed corporis facere odit ad voluptas non.
      </p>
    </main>
  );
}
export default MainContent;
