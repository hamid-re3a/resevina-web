import React, { Component } from 'react';
import axios from 'axios';

class Shops extends Component {
    componentWillMount(){
        axios.get('http://server.reservina.ir/shops').then(data => {
            console.log(data);
        });
        
    }
    render() {
        return (
            <div id="content">
                <div className="container margin-top-50-conent">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="portfolio-filter-container margin-vert-20">
                                <ul className="portfolio-filter">
                                    <li className="portfolio-filter-label label label-primary">
                                        فیلترها
                                    </li>

                                    <span className="padding-horiz-10 padding-vert-10">
                                        استان :&nbsp;

                                            <li>
 
                                            <select className="form-control">
                                                <option>انتخاب شهر</option>
                                                <option>تهران</option>
                                                <option>شیراز</option>
                                            </select>
                                        </li>
                                    </span>
                                    <span className="padding-horiz-10 padding-vert-10">
                                        نوع آرایشگاه :&nbsp;

                                            <li>

                                            <select className="form-control">
                                                <option>بدون انتخاب</option>
                                                <option>مردانه</option>
                                                <option>زنانه</option>
                                            </select>
                                        </li>
                                    </span>

                                    <li className="padding-horiz-20 padding-vert-10">

                                        <button className=" btn btn-default"><i className="fa fa-car"></i> نزدیک مکان من  </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 portfolio-group no-padding">
                            
                            <div className="col-md-3 col-sm-4 col-xs-6 portfolio-item margin-bottom-40">
                                <div>
                                    <a href="">
                                        <h3 className="margin-top-20"><i className="fa fa-male pull-left"></i>لورم ایپسوم</h3>
                                        <figure>
                                            <img src="assets/img/portfolio/image2.jpg" alt="image1" />
                                            <figcaption>
                                                <span>اهواز</span>
                                                <span className="pull-left">
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                </span>
                                                <br />
                                                <span className="pull-left">
                                                    <span> 33 </span><i className="fa fa-eye"></i>

                                                    <span> 67 </span><i className="fa fa-heart"></i>
                                                </span>
                                                <span className="pull-right">

                                                </span>
                                            </figcaption>
                                        </figure>
                                    </a>
                                </div>
                            </div>    
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Shops;
