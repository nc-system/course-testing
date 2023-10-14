
import { describe, expect, it } from 'vitest'

// Files to test
import FizzBuzz from '../FizzBuzz.jsx'

/*
Function or Program que al pasarle un numero

    - Muestra "fizz" si es multiplo de 3
    - Muestra "buzz" si es multiplo de 5
    - Muestra "fizzbuzz si es multiplo de 3 y 5
    - Muestra el numero si no es multiplo de ninguno de los anteriores
*/


describe('FizzBuzz', () => {

    // Should be a function
    it ('Should be a function', () => {
        expect(typeof FizzBuzz).toBe('function')
    })

})