function Navbar() {
  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>Portfolio</h2>

      <div style={styles.linksBox}>
        <a href="#home" style={styles.link}>Home</a>
        <a href="#about" style={styles.link}>About</a>
        <a href="#projects" style={styles.link}>Projects</a>
        <a href="#contact" style={styles.link}>Contact</a>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    position: "sticky",
    top: 0,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 25px",
    background: "#fff0f6",
    boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
    zIndex: 1000,
  },

  logo: {
    fontSize: "20px",
    fontWeight: "700",
    color: "#ff6fa5",
  },

  // ✅ BOX CONTAINER (this is what you wanted)
  linksBox: {
    display: "flex",
    gap: "10px",
    background: "#ffe4ec",
    padding: "8px 12px",
    borderRadius: "25px",
  },

  // ✅ EACH LINK LOOKS LIKE A PILL
  link: {
    textDecoration: "none",
    color: "#333",
    fontWeight: "600",
    fontSize: "14px",
    padding: "6px 12px",
    borderRadius: "20px",
    background: "#fff",
  },
};

export default Navbar;