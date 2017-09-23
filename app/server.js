const app = require("express")();

const PORT = 3000;

app.get('/', (req, res) => {
  res.send({message: 'Hello World'});
});

app.listen(PORT, () => {
  console.log('Server running on port:', PORT);
});

module.exports = app;