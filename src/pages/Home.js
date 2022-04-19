import React, { useEffect, useState } from 'react';
import { addDoc, collection, deleteDoc, doc } from "firebase/firestore";
import { db, auth } from "../firebase-config";
import { getDocs } from "firebase/firestore";

const Home = (isAuth) => {

    const [postLists, setPostLists] = useState([]);
    const postsCollectionRef = collection(db, "posts");

    useEffect(() => {
        const getPosts = async () => {
            const data = await getDocs(postsCollectionRef);
            setPostLists(data.docs.map((doc) => (
                {
                    ...doc.data(), id: doc.id
                }
            )))
        };

        getPosts();
    });

    const deletePost = async (id) => {
        const postDoc = doc(db, "posts", id);
        await deleteDoc(postDoc);
    }

    return (
        <div className="homePage">
            {postLists.map((post) => {
                return <div className='post'>
                    <div className='postHeader'> <h3>{post.title}</h3></div>
                    <div className='deletePost'>
                        {isAuth && post.author.id === auth.currentUser.uid && <button onClick={() => deletePost(post.id)}>
                            &#128465;
                        </button>}
                    </div>
                    <div className='postTextContainer'> {post.postText}
                        {/* <h5>@{post.author.name}</h5> */}
                    </div>
                </div>
            })}
        </div >
    );
}

export default Home;
