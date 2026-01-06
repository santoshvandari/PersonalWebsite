
export default function Home() {
  return (
    <main className="container">
      <section className="profile">
        <div className="header">
          <p className="greeting">Hello, I am</p>
          <h1 className="name">Santosh Bhandari</h1>
        </div>

        <div className="info">
          <p className="role">Full Stack Developer</p>
          <span className="separator">•</span>
          <p className="location">Based in Nepal</p>
        </div>

        <a href="./files/cv.pdf" download="Santosh_Bhandari_CV.pdf" className="btn-minimal">
          Download CV
        </a>
      </section>
    </main>
  );
}
