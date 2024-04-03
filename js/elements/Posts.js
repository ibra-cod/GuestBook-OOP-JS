import { createHtmlElement } from "../../js/functions/functions.js";
import { PostElements } from "./PostElements.js";
export class Posts {
    /**
     * @type {Posts[]}
     */
    #post = []

    /**
     * @type {array} 
     */
    #listPosts = []

    #btn


    /**
     * 
     * @param {Posts} Posts 
     */
    constructor(posts) {
        this.posts = posts
    }


    displayPosts (element) {
        element.innerHTML = 
        `
        <div class="information container-sm">
                    <form action="">
                        <input type="text" name="" id="" placeholder="Enter your Guestbook">
                        <button class="btn btn-primary btn-btn " type="submit">enter</button>
                    </form>

                    <div id="guestBookElement"  class="guestBookElementClass container-md mt-5  rounded-2 text-white guestBookElement">
                        
                    </div> 
                </div>
        `
            this.#listPosts = element.querySelector('#guestBookElement')
            // console.log(this.#listPosts);

            for (const post of this.posts) {
                const newPost = new PostElements(post)
                newPost.displayPosts(this.#listPosts)
            }
        
        this.btn = element.querySelector('.btn-btn')
        const input = element.querySelector('input')
        this.btn.addEventListener('click', e => this.add(e , input))

    }

    add (e,input) {
        e.preventDefault()
        const form = e.currentTarget
        const inputValue = input.value.trim()
        if (inputValue !== '') {
            const Message =  {
                id : Date.now(),
                title : 'inputValue',
                body : inputValue
            }

            const NewGuestBook = new PostElements(Message)
            NewGuestBook.displayPosts(this.#listPosts, true)

            
        input =''
            

        }

        return
    }

   





}

