module.exports = {
  getAll1: (req, res) => {
    req.app.get('db').test_file().then(data => { // make sure res from the parent function does not match res from the child function in the .then(). All the things will break.
      res.status(200).send(data)
    })
    .catch(err => console.log(err))
  },
  getAll2: (req, res) => {
    req.app.get('db').test2_file().then(data => {
      res.status(200).send(data)
    })
    .catch(err => console.log(err))
  },
  addStuff: (req, res) => {
    if(req.query.stuff) {
      req.app.get('db').add_stuff(req.query.stuff).then(stuff => {
        res.status(200).send(stuff);
      })
    }
  }
}