const app = require("./app");
const config = require("./config/dev");
const port = config.port || 3000;


app.listen(port, () => {
  console.log(`Example app listening http://localhost:${port}`)
});