function About() {
  return (
    <section id="about" style={styles.about}>
      <h2 style={styles.heading}>About Me</h2>

      <p style={styles.text}>
        I am a UI/UX Designer and Frontend Developer. I focus on designing
        clean, modern, and user-friendly interfaces in Figma and building
        responsive web apps using React.
      </p>

      <div style={styles.card}>
        <h3>🎨 UI/UX Design</h3>
        <p>Creating simple and aesthetic interfaces in Figma.</p>
      </div>

      <div style={styles.card}>
        <h3>⚛️ Frontend Development</h3>
        <p>Building interactive web applications using React.</p>
      </div>

      <div style={styles.card}>
        <h3>🌱 Learning Approach</h3>
        <p>
          I improve my skills by working on real projects and practicing UI/UX
          and frontend development.
        </p>
      </div>
    </section>
  );
}

const styles = {
  about: {
    padding: "60px",
    textAlign: "center",
    background: "#fff0f6",
    color: "#333",
  },

  heading: {
    fontSize: "28px",
    marginBottom: "15px",
  },

  text: {
    maxWidth: "600px",
    margin: "10px auto 30px",
    opacity: 0.85,
  },

  card: {
    background: "#ffe4ec",
    padding: "20px",
    margin: "15px auto",
    maxWidth: "500px",
    borderRadius: "12px",
  },
};

export default About;