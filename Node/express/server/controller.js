module.exports = {
  getOne: (req, res) => {
    console.log('inside getOne endpoint')
    res.send('you got one!')
  }
  
}