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
    <strong>CleanClick is where impact meets opportunity— </strong><br />
    the powerful intersection of technology, community, and conscious commerce.
  </p> <br />
  <p>
    We’re inviting visionary investors to partner with us in shaping the future.<br />
    Together, we can scale fast, disrupt the market, and create lasting change for generations to come.
  </p> <br />
  <p>This is your chance to invest in a future that’s as profitable as it is purposeful.</p>
  <p className="invest-email"><strong>hello@cleanclickgroup.com</strong></p>
  </div>
</div>

      </section>
      <Footer/>
    </>
  );
};

export default Invest;