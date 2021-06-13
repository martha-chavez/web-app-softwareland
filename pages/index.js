import Layout from "../Components/Layout";
import Header from "../Components/Header";
import Hero from "../Components/Hero";
import Frontend from '../Components/Frontend';
import Backend from '../Components/Backend';
import Informacion from '../Components/Informacion';
import Footer from '../Components/Footer';
const Index = () => {
  return (
    <Layout pageTitle="Sofwareland Martha_Chavez">
      <Header />
      <Hero />
      <Frontend/>
      <Backend />
      <Informacion />
      <Footer />
    </Layout>
  )
}
export default Index;