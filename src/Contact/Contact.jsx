import React from 'react'

const Contact = () => {
  return (
    <>
      <section>
        <div class="container com-sp pad-bot-70">
          <div class="row">
            <div class="cor about-sp">
              <div class="ed-about-tit">
                <div class="con-title">
                  <h2>Contact <span> Us</span></h2>
                  <p>DGR is one of the world’s leading Online Education Services institutions
                    Headquarters in Jaipur India.</p>
                </div>
              </div>
              <div class="pg-contact">
                <div class="col-md-3 col-sm-6 col-xs-12 new-con new-con1">
                  <h2>Digital Guru Ravi </h2>
                  <p>We Provide Digital Marketing Services To Over 3500 Clients From 10 Countries.</p>
                </div>
                <div class="col-md-3 col-sm-6 col-xs-12 new-con new-con1"> <img src="img/contact/1.html" alt="" />
                  <h4>Address</h4>
                  <p>305,Pink City Plaza,3rd Floor,Joshi Marg, Jhotwara,Jaipur
                    <br />Landmark : Near PNB Bank</p>
                </div>
                <div class="col-md-3 col-sm-6 col-xs-12 new-con new-con3"> <img src="img/contact/2.html" alt="" />
                  <h4>CONTACT INFO:</h4>
                  <p> <a href="tel://90792 69066" class="contact-icon">Phone: 91 90792 69066</a>
                    <br /> <a href="tel://90792 69066" class="contact-icon">Mobile: 91 90792 69066</a>
                    <br /> <a href="mailto:info@digitalgururavi.com" class="contact-icon">Email: info@digitalgururavi.com</a> </p>
                </div>
                <div class="col-md-3 col-sm-6 col-xs-12 new-con new-con4"> <img src="img/contact/3.html" alt="" />
                  <h4>Website</h4>
                  <p> <a href="#">Website: www.digitagururavi.com</a>
                    <br /> <a href="#">Facebook: www.facebook</a>
                    <br /> <a href="#">Blog: www.blog.digitagururavi.com</a> </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="map">
        <div class="row contact-map">

          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3556.681745514341!2d75.73359717452195!3d26.945302058690903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db3e798598ac1%3A0x3ec1c463addf81c6!2sDigital%20Guru%20Ravi%20-%20Digital%20Marketing%20Course%20and%20Training%20Institute%2C%20Agency%20In%20Jaipur!5e0!3m2!1sen!2sin!4v1689250668161!5m2!1sen!2sin"
            allowfullscreen=""></iframe>
          <div class="container">
            <div class="overlay-contact footer-part footer-part-form">
              <div class="map-head">
                <p>Send Us Now</p>
                <h2>GetIn Touch</h2> <span class="footer-ser-re">Service Request Form</span> </div>
              <form id="contact_form" name="contact_form" action="http://rn53themes.net/themes/demo/education-master/send.php">
                <ul>
                  <li class="col-md-6 col-sm-6 col-xs-12 contact-input-spac">
                    <input type="text" id="f1" value="" name="f1" placeholder="Name" required="" /> </li>
                  <li class="col-md-6 col-sm-6 col-xs-12 contact-input-spac">
                    <input type="text" id="f2" value="" name="f2" placeholder="Phone" required="" /> </li>
                  <li class="col-md-6 col-sm-6 col-xs-12 contact-input-spac">
                    <input type="text" id="f3" value="" name="f3" placeholder="City" required="" /> </li>
                  <li class="col-md-6 col-sm-6 col-xs-12 contact-input-spac">
                    <input type="text" id="f4" value="" name="f4" placeholder="Country" required="" /> </li>
                  <li class="col-md-12 col-sm-12 col-xs-12 contact-input-spac">
                    <textarea id="f5" name="f5" required=""></textarea>
                  </li>
                  <li class="col-md-6">
                    <input type="submit" value="SUBMIT" /> </li>
                </ul>
              </form>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default Contact
