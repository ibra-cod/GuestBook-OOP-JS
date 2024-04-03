export const createHtmlElement = (tagName, attirbuts = {}) => {

    const element = document.createElement(tagName)
    for (const [value, attribute] of Object.entries(attirbuts)) {
       if (value !== null && attribute !== null) {
       element.setAttribute(value, attribute);
       }
    }
     return element


}


