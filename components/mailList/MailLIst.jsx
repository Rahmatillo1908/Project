import React from 'react'
import "./mailList.css"
const MailLIst = () => {
    return (
        <div className='mail'>
            <h1 className="mailTitle">Vaqtni va pulni tejash!</h1>
            <span className="mailDesc">Ro'yxatdan o'ting va biz sizga eng yaxshi takliflarni yuboramiz</span>
            <div className="mailInputContainer">
                <input type="text" placeholder='Sizning Emailingiz' />
                <button>Subscribe</button>
            </div>

        </div>
    )
}

export default MailLIst