import React from 'react'
import './footer.scss'

function Footer() {
    return (
        <div className='footer'>
            <div className="container">
                <div className='d-flex footer-container'>

                    <div className='first-footer-section'>
                        <img src='/nas-nav-task/images/footer/logo.png' />
                        <p className='mt-4'>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                        </p>

                        <p className='my-5'>
                            Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla. Lorem ipsum dolor sit amet,

                        </p>
                        <p>
                            consectetuer adipiscing elit, sed dia m nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit
                        </p>
                    </div>

                    <div className='second-footer-section'>
                        <p>Subscribe to our newsletter</p>
                        <div className='position-relative'>
                            <input type='text' className='w-100 h-100 mt-4' />
                            <button className='subscribe-btn d-flex align-items-center position-absolute font-weight-bold'>
                                Subscribe
                                <img src='/images/footer/send.png' />
                            </button>
                        </div>

                        <div className='d-flex justify-content-between mt-4'>
                            <ul className='list-unstyled first-list'>
                                <li><a>About Us</a> </li>
                                <li><a>Contact Us</a></li>
                                <li><a>Track Order</a></li>
                                <li><a>Terms And Conditions</a></li>
                                <li><a>Privacy Policy</a></li>
                                <li><a>Sell With Us</a></li>
                                <li><a>Shipping And Returns</a></li>
                            </ul>

                            <ul className='list-unstyled second-list'>
                                <li>
                                    <img src='/nas-nav-task/images/footer/face.png' />
                                    /YESHTERY
                                </li>
                                <li>
                                    <img src='/nas-nav-task/images/footer/linked.png' />
                                    /YESHTERY
                                </li>
                                <li>
                                    <img src='/nas-nav-task/images/footer/insta.png' />
                                    /YESHTERY
                                </li>
                                <li>
                                    <img src='/nas-nav-task/images/footer/twitter.png' />
                                    /YESHTERY
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Footer