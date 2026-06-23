function Contact() {
  return (
    <section id="contact" style={styles.contact}>
      <h2 style={styles.heading}>Contact Me</h2>

      <div style={styles.card}>
        <p style={styles.label}>📩 Email</p>

        <p style={styles.email}>
          parikirantiwari2412@gmail.com
        </p>
      </div>

      <button style={styles.btn}>Let’s Connect</button>
    </section>
  );
}

const styles = {
  contact: {
    padding: "60px",
    textAlign: "center",
    background: "#fff0f6",
    color: "#333",
  },

  heading: {
    fontSize: "28px",
    marginBottom: "20px",
  },

  card: {
    background: "#ffe4ec",
    maxWidth: "500px",
    margin: "0 auto",
    padding: "20px",
    borderRadius: "12px",
  },

  label: {
    fontSize: "14px",
    fontWeight: "600",
    color: "#ff6fa5",
    marginBottom: "8px",
  },

  email: {
    fontSize: "18px",
    fontWeight: "800",   // ✅ bold
    color: "#000",
    background: "#fff",
    padding: "10px",
    borderRadius: "10px",
    display: "inline-block",
  },

  btn: {
    marginTop: "20px",
    background: "#ff6fa5",
    border: "none",
    padding: "10px 20px",
    borderRadius: "20px",
    color: "white",
    fontWeight: "600",
    cursor: "pointer",
  },
};

export default Contact;