import './Invest.css';
import { Navbar } from '../../components/NavbarComponent/Navbar';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const Invest = () => {




  return (
    <>
      <section className="invest-form-body">
        <Navbar page = {'Invest'}/>
        <Header/>
        <div className="invest-section">
  <img 
  src="/images/invest-in-us.png" 
  alt="Invest in us" 
  className="invest-heading-img" 
/>
  <p>
    CleanClick is where impact meets opportunity—<br />
    the intersection of tech, community, and conscious commerce.
  </p> <br />
  <p>
    We invite mission-aligned investors to help us scale this movement, to<br />
    shape a cleaner, brighter future for generations to come.
  </p> <br />
  <p>Get in touch to explore our deck and next steps.</p>
  <p className="invest-email"><strong>hello@cleanclick.com</strong></p>
</div>

      </section>
      <Footer/>
    </>
  );
};

export default Invest;