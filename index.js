let express = require('express');
let app = express();

const PORT = 9000;
app.use(express.static(`${__dirname}/public`));

app.listen(PORT, (err) => {
    if (err) {
        console.log('error in listening at port ' + PORT);
        console.log(err);
    } else {
        console.log('Listening on port' + PORT);
    }
});
