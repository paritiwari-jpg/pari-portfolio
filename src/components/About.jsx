function About() {
  return (
    <section id="about" style={styles.about}>
      <h2 style={styles.heading}>About Me</h2>

      <p style={styles.text}>
        I am a UI/UX Designer and App Development learner. I mainly design
        interfaces in Figma and explore how real apps are built using React.
      </p>

      <div style={styles.card}>
        <h3>🎨 UI/UX Design</h3>
        <p>Creating clean and modern user-friendly interfaces in Figma.</p>
      </div>

      <div style={styles.card}>
        <h3>📱 App Development</h3>
        <p>Learning how to convert designs into real working applications.</p>
      </div>

      <div style={styles.card}>
        <h3>🌱 Current Stage</h3>
        <p>
          I am still a beginner in coding but actively improving by building
          small React projects.
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
    opacity: 0.8,
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