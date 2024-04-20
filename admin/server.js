const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 6184;


// Starting the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
