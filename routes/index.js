var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/lists', function(req, res, next) {

    req.pool.getConnection(function(err, connection){
        if (err){
            res.sendStatus(500);
            return;
        }
        var query = "SELECT s_size, s_style, brand, price FROM shoes";
        connection.query(query, function(err, rows, fields){
           connection.release();
           if(err){
               res.sendStatus(500);
               return;
           }
           res.json(rows);
        });
    });
});

router.post('/shoes_search', function(req, res, next) { //Connect to the database

    s_size = req.body.s_size;
    s_style = req.body.s_style;
    brand = req.body.brand;
    price = req.body.price;
    price2 = req.body.price2;

    console.log("price", price);
    console.log("price2", price2);

    req.pool.getConnection(function(err,connection) {
        if (err) {
            res.sendStatus(500);
            return;
        }

        console.log("size", s_size);

        var query = `SELECT s_size, s_style, brand, price FROM shoes WHERE s_size = ? AND s_style = ? AND brand = ? AND price >= ? AND price < ?`;
        console.log(query);
        var params = [s_size, s_style, brand, price, price2];
        console.log(params);

        connection.query(query,params,function(err, rows, fields) {
            connection.release(); // release connection
            if (err) {
                res.sendStatus(500);
                return;
            }
            res.send(rows);
            // console.log("rows",rows);
        });
    });
});

module.exports = router;
