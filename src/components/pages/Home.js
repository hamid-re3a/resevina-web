import React, { Component } from 'react';
// import { Link } from "react-router-dom";

class Home extends Component {
    render() {
        return (

            <div id="content">

                <div className="container background-gray-lighter">
                    <div className="row margin-top-50">
                        <h2 className="animate fadeIn text-center margin-top-50">به رزروینا خوش آمدید</h2>
                        <hr className="margin-top-15" />
                        <p className="animate fadeIn text-center">مدیریت هزینه و زمان، افزایش مراجعات به آرایشگاه،<br />
                            یافته شدن در جستجو های اینترنتی، ارتباط با کاربران از طریق ایمیل ، پیامک و پیام های درون سایتی و دیگر امکانات مفید جهت رونق کسب و کار شما!</p>
                        <p className="text-center animate fadeInUp margin-bottom-50">
                            <button type="button" className="btn btn-lg btn-primary">ثبت آرایشگاه</button>
                        </p>
                    </div>

                </div>
                <div className="container">
                    <div className="row margin-vert-30">
                        <div className="col-md-12 text-center">
                            <h2>کسب و کار با رزروینا</h2>
                            <p>اگر صاحب یک آرایشگاه هستید و می خواهید از آن یک برند بسازید، باید بدانید فرصت های برندسازی برای یک آرایشگاه محدود است. حتی هنرمندان هم بعد از اصلاح و پیرایش مو وقتی روی صحنه می روند نمی توان حدس زد که کدام آرایشگر این کار را برای شان انجام داده است، اما روش های دیگری برای جلب توجه مشتریان به سالن شما وجود دارد که نیاز به صرف هزینه های زیادی ندارد. هیچ چیزی بهتر از بازاریابی آنلاین برای کسب و کار شما نیست. به عنوان یک آرایشگر می توانید خدمتی که انجام می دهید را برای دیگران به نمایش بگذارید. یک عکس بهتر از 100 کلمه عمل می کند. حتی در مورد توضیح فعالیت های تان نیاز نیست آن را طویل کنید، بلکه به صورت شفاف و ساده در مورد کاری که انجام داده اید چند خطی بیان کنید. رزروینا تنها محیطی برای معرفی آرایشگاهتان به دیگران نیست! در اینجا شما می توانید مدیریت آرایشگاه و مشتریان را در دست داشته باشید و تنها با به همراه داشتن گوشی، تبلت یا لپ تاپ تمام امور آرایشگاهی را انجام دهید. برای آشنایی بیشتر به بخش مقالات مراجعه کنید.</p>
                            <img className="animate fadeInUp margin-bottom-20" src="assets/img/frontpage/responsive_homepage.png" alt="" />
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Home;
