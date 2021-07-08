import React from 'react'
import './Sidebar.css'

function Sidebar() {
    return (
        <div className="sidebar">

            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img src="https://images.unsplash.com/photo-1520082379916-7cf029de2c1f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fGJsb2d8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" className="src" />
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Id maiores nisi iure aperiam corrupti perferendis est,
                    magni aliquid vero magnam, unde possimus, optio
                    consequuntur neque qui in inventore odio amet.
                </p>
            </div>

            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    <li className="sidebarListItem">Technology</li>
                    <li className="sidebarListItem">Music</li>
                    <li className="sidebarListItem">Sports</li>
                    <li className="sidebarListItem">Life</li>
                    <li className="sidebarListItem">Cinema</li>
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW US</span>
                <div className="sidebarSocial">
                    <i className="sidebarSocialIcon fab fa-facebook-square"></i>
                    <i className="sidebarSocialIcon fab fa-github-square"></i>
                    <i className="sidebarSocialIcon fab fa-linkedin"></i>
                    <i className="sidebarSocialIcon fab fa-instagram-square"></i>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
