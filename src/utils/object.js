
/**
 * Access the nested property of the object
 * @param {object} targetObject
 * @param {string} keyString
 * @returns {any} 
 * 
 * @example
 * $person = {
 *   skills: {
 *     language: 'English'
 *   }
 *   address: null
 * }
 * 
 * dataGet($person, 'skills.language') // return 'English'
 * dataGet($person, 'address.street') // return null
 * @example
 */
export function dataGet(targetObject, keyString = '') {
    const keys = keyString.split('.')

    let result = targetObject
    keys.forEach(key => {
        if (typeof result === 'object' && result !== null) {
            result = result[key]
        } else {
            result = null
        }
    })

    return result
}