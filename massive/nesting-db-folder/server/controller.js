module.exports = {
  getAll: (req, res) => {
    req.app.get('db').getAllProducts().then(response => {
      res.status(200).send(response)
    }).catch(err => {
      console.log(err)
    })
  },
  getOne: (req, res) => {
    let stuff = [
      req.body.stuff,
      req.body.moreStuff
    ]
    req.app.get('db').getStuffByStuff(stuff).then(response => {

    })
  }
  
}