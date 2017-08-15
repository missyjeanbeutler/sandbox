module.exports = {
  getAll: (req, res) => {
    console.log('inside getAll endpoint')
    res.send('you got all!')
  },
  getOne: (req, res) => {
    console.log('inside getOne endpoint')
    res.send('you got one!')
  }
  
}