import { Posts } from "../js/elements/Posts.js";
import { getPosts } from "../js/requests/request.js";
import { PostElements } from "../../js/elements/PostElements.js";

try {
    const post = await getPosts('https://jsonplaceholder.typicode.com/posts?_limit=0')
    
    const allPost = new Posts(post)
    allPost.displayPosts(document.querySelector('#infoContainer'))


} catch (error) {
    console.error(error)
    throw new Error('server error', {cause : error})
}