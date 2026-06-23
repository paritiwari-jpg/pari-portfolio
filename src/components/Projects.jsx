function Projects() {
  return (
    <section id="projects" style={styles.projects}>
      <h2 style={styles.title}>My Projects</h2>

      {/* Figma / UI UX */}
      <div style={styles.card}>
        <h3>🎨 UI/UX Designs (Figma)</h3>
        <p>
          I create clean and modern UI/UX designs in Figma. Currently focusing
          on mobile app and website interface designs.
        </p>
      </div>

      {/* Learning React */}
      <div style={styles.card}>
        <h3>⚛️ React Learning Projects</h3>
        <p>
          Small practice projects built while learning React, including components,
          props, and state management.
        </p>
      </div>

      {/* E-Commerce Project */}
      <div style={styles.card}>
        <h3>🛍️ E-Commerce Website</h3>
        <p>
          A fully responsive e-commerce website built using React. It includes
          product listing, cart functionality, and modern UI design.
        </p>

        <a
          href="https://react-ecommerce-project-sepia.vercel.app/"
          target="_blank"
          style={styles.link}
        >
          View Live Project →
        </a>
      </div>
    </section>
  );
}

const styles = {
  projects: {
    padding: "60px",
    textAlign: "center",
    background: "#fff0f6",
  },
  title: {
    fontSize: "28px",
    marginBottom: "20px",
    color: "#333",
  },
  card: {
    background: "#ffe4ec",
    padding: "20px",
    margin: "15px auto",
    maxWidth: "500px",
    borderRadius: "12px",
    color: "#333",
    boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
  },
  link: {
    display: "inline-block",
    marginTop: "10px",
    color: "#ff6fa5",
    fontWeight: "bold",
    textDecoration: "none",
  },
};

export default Projects;