module.exports = {
  getAll: (req, res) => {
    req.app.get('db').getAll().then(users => {
      res.status(200).send(users);
    })
  },
  getUser: (req, res) => {
    req.app.get('db').getUser(+req.params.id).then(user => {
      res.status(200).send(user)
    })
  },
  addUser: (req, res) => {
    let { name, age, email } = req.body
    req.app.get('db').addUser([name, +age, email]).then(user => {
      res.status(200).send('success!')
    })
  },
  updateUser: (req, res) => {
    let { name, age, email } = req.body
    req.app.get('db').updateUser([name, +age, email, +req.params.id])
      .then(user => {
        res.status(200).send(user)
      })
  },
  deleteUser: (req, res) => {
    req.app.get('db').deleteUser(+req.params.id)
      .then(users => {
        req.app.get('db').getAll().then(users => {
          res.status(200).send(users);
        })
      })
  }
}