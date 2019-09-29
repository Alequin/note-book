const getDate = require('./get-date')

describe('getDate', () => {
  it('returns the date in the format yyyy-mm-dd', () => {
    expect(getDate(new Date('2000-01-01 12:00:00.000'))).toBe('2000-01-01')
  })

  it('returns the current date no argument is given', () => {
    const currentDateTime = new Date().toISOString()
    expect(currentDateTime.includes(getDate())).toBe(true)
  })
})
