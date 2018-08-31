import React, { Component } from 'react';
// import Header from "./components/sections/Header";

import { Link, Route , Switch } from "react-router-dom";

import './styles/css/bootstrap.css';
import './styles/css/font-awesome.css';
import './styles/css/nexus.css';
import './styles/css/responsive.css';
import './styles/css/sb-admin-2.css';



// Components
import Home from "./components/pages/Home";
import Shops from "./components/pages/Shops";
import Contact from "./components/pages/Contact";
import Product from "./components/pages/Product";
import NoMatch from "./components/pages/NoMatch";

class App extends Component {
    render() {
        return (
            <div>
                 <div>
                <div id="body_bg">
                    <div id="pre_header" className="container">
                        <div className="row margin-top-10 visible-lg">
                            <div className="col-md-6">
                                <p>
                                    <strong> تلفن تماس :</strong> &nbsp;57-72-938-0936 </p>
                            </div>
                            <div className="col-md-6 text-right">
                                <p>
                                    <strong> ایمیل :</strong> info@reservina.ir </p>
                            </div>
                        </div>
                    </div>
                    <div className="primary-container-group">
                        <div className="primary-container-background">
                            <div className="primary-container"></div>
                            <div className="clearfix"></div>
                        </div>
                        <div className="primary-container">
                            <div id="header" className="container">
                                <div className="row">
                                    <div className="logo">
                                        <a href="index.html" title="">
                                            <img src="img/logo.png" alt="Logo" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div id="hornav" className="container no-padding">
                                <div className="row background-white">
                                    <div className="col-md-12 no-padding">
                                        <div className="pull-right navigation-bar">
                                            <div className="input-group search">
                                                <input id="nav-input-search" type="text" className="form-control" placeholder="جستجوی آرایشگاه" />
                                                <span className="input-group-btn">
                                                    <button id="nav-button-search" className="btn btn-default" type="button"><i className="fa fa-search"></i> </button>
                                                </span>

                                            </div>
                                            <ul id="hornavmenu" className="nav navbar-nav">
                                                <li>
                                                    <Link to={`shops`} className="fa-search"> جستجوی پیشرفته </Link>
                                                </li>
                                                {/* <li className="visible-lg">
                                                    <a href="contact.html" className="fa-comment"> ارتباط با ما </a>
                                                </li>
                                                <li>
                                                    <a href="index.html" className="fa-th-list"> وبلاگ  صفحه اصلی </a>
                                                </li> */}

                                                <li>
                                                    <Link to={`/`} className="fa-home"> صفحه اصلی </Link>
                                                </li>
                                            </ul>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        <Switch>
                            <Route path="/" exact={true} component={Home}/>
                            <Route path="/product/:id" component={Product}/>
                            <Route path="/shops" component={Shops}/>
                            <Route path="/contact" component={Contact}/>
                            <Route component={NoMatch}/>
                        </Switch>
                    
                        </div>
                    </div>
                    <div id="base">
                        <div className="container padding-vert-30 margin-top-40">
                            <div className="row">
                                <div className="col-md-6 margin-bottom-20">
                                    <h3 className="margin-bottom-10">رزروینا</h3>
                                    <ul className="menu">
                                        <li>
                                            <a className="fa-eye" href="">چطور استفاده کنم؟</a>
                                        </li>
                                        <li>
                                            <a className="fa-smile-o" href="">چطور از رزروها مطمئن باشم؟</a>
                                        </li>
                                        <li>
                                            <a className="fa-dollar" href="">آرایشگاهتان را به کاربران نشان دهید.</a>
                                        </li>
                                    </ul>
                                    <div className="clearfix"></div>
                                </div>
                                <div className="col-md-6 margin-bottom-20 ">
                                    <h3 className="margin-bottom-10">اطلاعات تماس</h3>
                                    <p>
                                        <span className="fa-phone"> شماره تلفن : 57-72-938-0936</span>
                                        <br />
                                        <span className="fa-envelope"> ایمیل : </span>
                                        <a href="mailto:info@joomla51.com">info@reservina.ir</a>
                                        <br />

                                    </p>
                                    <h4 className="margin-bottom-10">ما را در شبکه های اجتماعی دنبال کنید</h4>
                                    <p className="social-network-icons text-center">
                                        {/* <a href=""> <i className="fa fa-linkedin-square fa-2x"></i></a> */}
                                        <a href="http://www.instagram.com/reservina.ir" > <i className="fa fa-instagram fa-3x"></i></a>
                                        {/* <a href=""> <i className="fa fa-facebook-square fa-2x"></i></a>
                                        <a href=""> <i className="fa fa-google-plus-square fa-2x"></i></a>
                                        <a href=""> <i className="fa fa-linkedin-square fa-2x"></i></a> */}
                                        <a href="http://www.twitter.com/reservina"> <i className="fa fa-twitter-square fa-3x"></i></a>

                                    </p>
                                </div>
                                <div className="clearfix"></div>
                            </div>
                        </div>
                    </div>
                    <div id="footer">
                        <div className="container">
                            <div className="row">
                                <div id="copyright" className="col-md-12">
                                    <p>کلیه حقوق برای تیم رزروینا محفوظ است</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}

export default App;
