/**
 * 
 * @param  {...any} args 
 * @returns logs onto screen
 */
export const logger = (...args) => console.log('Logged @', new Date().toISOString(), ...args);

let isApplied = false;
export const addHTMLElement = (element) => {
    const toElement = document.createElement(element);
    toElement.innerHTML = `Hey! ${element}`;
    document.body.appendChild(toElement);
    isApplied = !isApplied;
}