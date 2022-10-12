import Header from './components/header';
import FooterTop from './components/footertop';
import Footer from './components/footer';
import HomeComponent from './components/homecomponent';
import ProductComponent from './components/productcomponent';
import ProductDetailsComponent from './components/productdetailscomponent';
import GoogleReviewsComponent from './components/googlereviewscomponent';
import BlogComponent from './components/blogcomponent';

function index() {
  return <>
      <Header />
      <FooterTop />
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <section>
          <div class="container-fluid">
            <HomeComponent />
            <ProductComponent />
            <ProductDetailsComponent />
            <GoogleReviewsComponent />
            <BlogComponent />
          </div>
        </section>
      <Footer />
      
    </>
};

export default index