
import { describe, expect, it } from 'vitest'

// Files to test
import { fizzbuzz } from '../index'

describe('fizzbuzz', () => {
  // Test - Should be a function
  it('should be a function', () => {
    expect(typeof fizzbuzz).toBe('function')
  })

  // Test - Should throw if not number is provided as parameter
  it('Should throw if not number is provided as paramater'), () => {
    expect(() => fizzbuzz()).toThrow()
  }

  // Test - Should throw if not number is provided as parameter
  it('Should throw a especific error message if not number is provided as paramater'), () => {
    expect(() => fizzbuzz()).toThrow('Parameter provide')
  }

  /*
    // Test - Should return buzz if number provided 5
    it('Should return buzz if number provided is 5'), () => {
        expect()
    }
  */
})
