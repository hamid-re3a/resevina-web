import React, { Component } from 'react';
import axios from 'axios';

class ShopsRegister extends Component {
    constructor(){
        super();
        this.setState({
            shops : {},
            server: 'http://server.reservina.ir/'
        });

    }
    componentWillMount(){
        var that = this;
        axios.get('http://server.reservina.ir/shops').then(result => {
            console.log(result);
            that.setState({
                shops : result.data.data.data
            });
           
        });
        
    }

    shopCardsRender(){
        // console.log(this.state);
        // var that = this;
        if(this.state != null && this.state.shops.length >  0)
            return this.state.shops.map(element => {
                var image ;
               if(element.uuid != null &&  element.uuid.match('/')) 
                    image = "http://server.reservina.ir/" + element.uuid; 
               else if(element.uuid != null )
                    image = "http://server.reservina.ir/shop_images/images/"+element.uuid+"/Small.png";
                else if(element.shop_type === 2)
                    image = "http://server.reservina.ir/shop_images/woman.jpg";   
                else 
                    image = "http://server.reservina.ir/shop_images/man.jpg";   

               return <div key={element.id} className="col-md-3 col-sm-4 col-xs-6 portfolio-item margin-bottom-40">
               <div>
                   <a href="">
                       <h3 className="margin-top-20"><i className="fa fa-male pull-left"></i>{element.alias}</h3>
                       <div style={{width : '100%',height:'200px',backgroundImage:'url('+image+')',backgroundSize:'cover',backgroundRepeat:'no-repeat',backgroundPosition:'50% 50%'}}>
                       
                       </div>
                       <figure>
                           {/* <img src={image} alt={element.alias} /> */}
                           <figcaption>
                               <span></span>
                               <span className="pull-left">
                                   <i className="fa fa-star-o"></i>
                                   <i className="fa fa-star-o"></i>
                                   <i className="fa fa-star-o"></i>
                                   <i className="fa fa-star-o"></i>
                                   <i className="fa fa-star-o"></i>
                               </span>
                               <br />
                               <span className="pull-left">
                                   <span> </span><i className="fa fa-eye"></i>
   
                                   <span> </span><i className="fa fa-heart"></i>
                               </span>
                               <span className="pull-right">
   
                               </span>
                           </figcaption>
                       </figure>
                   </a>
               </div>
           </div>     
            });
    

        return <div>
            <h3>
                موردی یافت نشد
            </h3>
        </div>
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
                            {this.shopCardsRender()}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ShopsRegister;
