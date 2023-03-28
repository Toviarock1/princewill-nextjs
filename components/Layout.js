import Head from 'next/head';
import Contact from './Contact';
import Experience from './Experience';
import Footer from './Footer';
import Header from './Header';
import Hero from './Hero';
import Projects from './Projects';
import Skills from './Skills';

const Layout = () => {
  return (
    <>
      <Head>
        <title>UI/UX & Graphics designer portfolio</title>
        <meta
          name="description"
          content="Prince Chima UI/UX & Graphics designer"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keyword" content="ui/ux designer, graphics designer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default Layout;
