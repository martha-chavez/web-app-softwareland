import Layout from "../components/Layout";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Frontend from '../Components/Frontend';
import Backend from '../Components/Backend';
import About from '../components/About';
import Footer from '../components/Footer';
const Index = () => {
  return (
    <Layout pageTitle="Landing Page Nextjs">
      <Header />
      <Hero />
      <Frontend/>
      <Backend />
      <About />
      <Footer />
    </Layout>
  )
}
export default Index;