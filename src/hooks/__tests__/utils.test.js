import {
  defaultProps,
  getInitialValue,
  getDefaultValue,
  getItemAndIndex,
} from '../utils'

describe('utils', () => {
  describe('itemToString', () => {
    test('returns empty string if item is falsy', () => {
      const emptyString = defaultProps.itemToString(null)
      expect(emptyString).toBe('')
    })
  })

  describe('getItemAndIndex', () => {
    test('returns arguments if passed as defined', () => {
      expect(getItemAndIndex({}, 5, [])).toEqual([{}, 5])
    })

    test('throws an error when item and index are not passed', () => {
      expect(() =>
        getItemAndIndex(undefined, undefined, [1, 2, 3]),
      ).toThrowError('Pass either item or index to the item getter prop!')
    })

    test('returns index if item is passed', () => {
      const item = {}

      expect(getItemAndIndex(item, undefined, [{x: 1}, item, {x: 2}])).toEqual([
        item,
        1,
      ])
    })

    test('returns item if index is passed', () => {
      const index = 2
      const item = {x: 2}
      expect(getItemAndIndex(undefined, 2, [{x: 1}, {x: 3}, item])).toEqual([
        item,
        index,
      ])
    })
  })

  test('getInitialValue will not return undefined as initial value', () => {
    const defaults = {bogusValue: 'hello'}
    const value = getInitialValue(
      {initialBogusValue: undefined},
      'bogusValue',
      defaults,
    )

    expect(value).toEqual(defaults.bogusValue)
  })

  test('getInitialValue will not return undefined as value', () => {
    const defaults = {bogusValue: 'hello'}
    const value = getInitialValue(
      {bogusValue: undefined},
      'bogusValue',
      defaults,
    )

    expect(value).toEqual(defaults.bogusValue)
  })

  test('getDefaultValue will not return undefined as value', () => {
    const defaults = {bogusValue: 'hello'}
    const value = getDefaultValue(
      {defaultBogusValue: undefined},
      'bogusValue',
      defaults,
    )

    expect(value).toEqual(defaults.bogusValue)
  })
})
