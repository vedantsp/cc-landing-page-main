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
<div className='invest-content'>
  <p>
    <strong>Back the future of conscious commerce</strong><br /> <br />
    We're reimagining the way people shop, discover, and connect—building an ecosystem of brands, content, and creators driving positive change.
  </p> <br />
  <p>
    If you're an investor who backs bold ideas with heart, this is your chance to help shape a future that's both profitable and purposeful.
  </p> <br />
  {/* <p>This is your chance to invest in a future that’s as profitable as it is purposeful.</p> */}
  <p className="invest-email"><strong>Let’s chat: hello@joincleanclick.com</strong></p>
  </div>
</div>

      </section>
      <Footer/>
    </>
  );
};

export default Invest;