import React from 'react'
import './last.scss'

function LastFooter() {
    return (

        <div className="container last-footer d-flex justify-content-between align-items-center">
            <div>© 2021 yeshtery, all rights reserved.</div>
            <ul className='list-unstyled d-flex'>
                <li><img src='/images/footer/cash.png' /></li>
                <li><img src='/images/footer/visa.png' /></li>
                <li><img src='/images/footer/master.png' /></li>
            </ul>
            <div className='d-flex'>
                Powered By <img src='/images/footer/nasNav.png' />
            </div>
        </div>
    )
}

export default LastFooter