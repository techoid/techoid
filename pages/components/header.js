import Link from 'next/link';

function header() {
    return <>
        <header class="header-first-div">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div class="header-div">
                            <div class="header-padding-left">
                                <ul class="header-ul">
                                    <li class="header-li header-li-padding-right">
                                    <Link class="header-a" href="/">Home</Link>
                                    </li>
                                    <li class="header-li header-li-padding-right">
                                        <a class="header-a" href="#">About Us</a>
                                    </li>
                                    <li class="header-li header-li-padding-right">
                                        <div class="dropdown">
                                            <a class="header-a dropbtn">Our Plans <i class="fa-solid fa-angle-down"></i></a>
                                            <div class="dropdown-content">
                                                <Link class="a-first" href="/page/seopages">SEO Page-1</Link>
                                                <Link class="a-middle" href="/page/seopages">SEO Page-2</Link>
                                                <Link class="a-last" href="/page/seopages">SEO Page-3</Link>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="header-li header-li-padding-right">
                                        <a class="header-a" href="#">Neet Assistance?</a>
                                    </li>
                                </ul>
                                
                            </div>
                            <div class="header-logo">
                                <img class="header-img" src="/assets/images/img_vmealslogoori.png" alt="No-Image"/>
                            </div>
                            <div class="header-padding-right">
                                <ul class="header-ul">
                                    <li class="header-li header-li-padding-right">
                                        <a class="header-a" href="#">Blog</a>
                                    </li>
                                    <li class="header-li header-li-padding-right-second">
                                        <a class="header-a" href="#">Arabic</a>
                                        <span> / </span>
                                        <a class="header-a" href="#">English</a>
                                    </li>
                                    <li class="header-li">
                                        <a href="#" class="btn btn-primary header-btn-components header-btn-components-color">Get Started</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
      </>
  };
  
  export default header;