import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import NavBar from "./components/NavBar";
import Experience from "./components/Experience";
function AppShell({ children }: React.PropsWithChildren) {
  return <div className="app-shell">{children}</div>;
}
export default function App() {
  return (
    <>
    <AppShell>
    <NavBar />
    <main className="min-h-screen text-foreground">
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      {/* <section id="about" className="scroll-mt-24"><About /></section>
      <section id="skills" className="scroll-mt-24"><Skills /></section>
      <section id="projects" className="scroll-mt-24"><Projects /></section>
      <section id="contact" className="scroll-mt-24"><Contact /></section> */}
    </main>
    </AppShell>
    </>
  );
}
