const getDate = date => (date || new Date()).toISOString().split('T')[0]
module.exports = getDate
