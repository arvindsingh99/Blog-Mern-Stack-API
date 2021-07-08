import React from 'react'
import './Post.css'
function Post() {
    return (
        <div className="post">
            <img src="https://images.unsplash.com/photo-1542435503-956c469947f6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80" alt="" className="postImg" />
            <div className="postInfo">
                <div className="PostCats">
                    <span className="postCat">Technology</span>
                    <span className="postCat">Life</span>
                </div>
                <span className="postTitle">
                    lorem ipsum dolor sit amet
                </span>
                <hr />
                <span className="postDate"> 1 hour  ago</span>
            </div>
            <p className="postDescription">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur tempora, rerum iu Lorem ipsum dolor, 
                sit amet consectetur adipisicing elit. Consequuntur tempora, rerum iu
                sto quia numquam vitae in culpa quam impedit ipsum quae totam. Facilis, magnam culpa. Repellendus nulla quibusdam unde qui?
            </p>
        </div>
    )
}

export default Post
