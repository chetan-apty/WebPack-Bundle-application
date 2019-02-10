
/**
 * 
 * @param  {...any} args 
 * @returns logs onto screen
 */
export const logger = (...args) => console.log('Logged @', new Date().toISOString(), ...args);