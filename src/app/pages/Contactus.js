import { MdOutlinePhone } from "react-icons/md";
import { MdOutlineMailOutline } from "react-icons/md";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import CommonButton from "../common/CommonButton";
import InputField from "../common/InputField"
import HomeNavigator from '../common/HomeNavigator'
import Layout from "../Layout";


const Contactus = () => {
    return (
        <Layout>
            <section className='container section-layout contactus'>
                <HomeNavigator>
                    Contact
                </HomeNavigator>
                <div className='row'>
                    <div className='col-12 col-lg-4 text-container'>
                        <div className="text-content">
                            <div className="info-sec">
                                <div className="d-flex align-items-center gap-2">
                                    <div className="contact-icon" ><MdOutlinePhone /></div>
                                    <div className="contact-content">call to us</div>
                                </div>
                                <div>We are available 24/7, 7 days a week.</div>
                                <div>Phone: <a href="callto:+91 9967082695" target="blank"  className="link">+91 9967082695</a></div>
                            </div>
                            <hr />
                            <div className="info-sec">
                                <div className="d-flex align-items-center gap-2">
                                    <div className="contact-icon" ><MdOutlineMailOutline /></div>
                                    <div className="contact-content">Write To US</div>
                                </div>
                                <div>Fill out our form and we will contact you within 24 hours.</div>
                                <div>Emails: <a href='mailto:saadansari3212@gmail.com' target="blank" className="link">saadansari3212@gmail.com</a></div>
                                <div>Emails: <a href='https://www.linkedin.com/in/saadansari234/' target="blank"  className="link">Saadansari234@linkedin</a></div>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-lg-8 text-container'>
                        <div className="text-content h-100">
                            <div className="d-flex flex-column justify-content-between">
                                <div className="input-sec">
                                    <InputField placeholder="your name" className="input" class2="input-container" type="text" />
                                    <InputField placeholder="your email" className="input" class2="input-container" type="email" />
                                    <InputField placeholder="your phone" className="input" class2="input-container" type="number" />
                                </div>
                                <InputGroup className="mt-3 mb-2">
                                    <Form.Control as="textarea" aria-label="With textarea" placeholder="your message" className="input text-style" class2="input-container" />
                                </InputGroup>
                                <div className="d-flex justify-content-end">
                                    <CommonButton title="send message" className="send-button" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default Contactus