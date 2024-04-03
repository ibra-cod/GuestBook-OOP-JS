import { createHtmlElement } from "../functions/functions.js"
export class PostElements {

    #element


    constructor(post) {
        this.post = post
        const id = post.id
        const div = createHtmlElement
                    (
                        'div', 
                        { 
                            class : 'container-fuild rounded-5 text-black mb-5 mt-5 div-elements', 
                            id
                        }
                    )

        const p = createHtmlElement('p', {class : 'text-center'})
        div.append(p)
        p.innerHTML = post.body 

        div.addEventListener('dblclick', (e) => this.remove(e) )

        this.#element = div




    }

    displayPosts (element, bool) {
       if (bool === true) {
        element.prepend(this.#element);
       }
       else {
        element.append(this.#element);
       }
       
       
    }

    remove (e) {
        e.preventDefault()
        if (confirm('You are going to delete this alre you sure?') === true) {
            this.#element.remove()
        }
    }


}


