function Hero() {
  return (
    <section id="home" style={styles.hero}>
      <img src="/Parii.jpeg" alt="Pari Tiwari" style={styles.img} />

      <h1 style={styles.title}>Hi, I'm Pari Tiwari 👋</h1>

      <div style={styles.block}>
        <p style={styles.role}>
          UI/UX Designer • Figma Designer • React Developer (Beginner)
        </p>

        <p style={styles.desc}>
          I design clean and modern user interfaces in Figma and build web
          applications using React. I enjoy turning ideas into simple,
          user-friendly digital experiences.
        </p>
      </div>
    </section>
  );
}

const styles = {
  hero: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    background: "#fff0f6",
    color: "#333",
    padding: "20px",
  },

  img: {
    width: "170px",
    height: "170px",
    borderRadius: "50%",
    objectFit: "cover",
    marginBottom: "20px",
    border: "4px solid #ff6fa5",
  },

  title: {
    fontSize: "34px",
    marginBottom: "15px",
    fontWeight: "700",
  },

  block: {
    maxWidth: "600px",
    background: "#ffe4ec",
    padding: "20px",
    borderRadius: "12px",
  },

  role: {
    fontSize: "18px",
    fontWeight: "700",
    color: "#ff6fa5",
    marginBottom: "10px",
  },

  desc: {
    fontSize: "15px",
    fontWeight: "500",
    color: "#000",
    lineHeight: "1.6",
  },
};

export default Hero;