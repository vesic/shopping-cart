'use strict';
var express = require('express');
var router = express.Router();
var faker = require('faker');
let _ = require('lodash');
var Product = require('../models/Product');
const async = require('async');

// _.times(3, () => categories.push(faker.commerce.department()));

router.get('/', (req, res) => {
  Product.find((err, data) => {
    res.send(data);
  })
});


router.get('/seed', (req, res) => {

  let categories = [
    'Category 1',
    'Category 2',
    'Category 3'
  ];

  let products = [];
  _.times(50, (index) => {
    products.push(
      new Product({
        category: faker.random.arrayElement(categories),
        name: faker.commerce.product(),
        info: faker.random.words(1),
        // info: faker.commerce.productName(),
        stars: faker.random.arrayElement([1, 2, 3, 4, 5]),
        price: faker.commerce.price(10, 200),
        // imgUrl: faker.image.abstract(320, 150, true)
        imgUrl: `http://lorempixel.com/320/150/abstract/?${index}/`,
        largeImgUrl: `http://lorempixel.com/800/300/abstract/?${index}/`
      })
    )
  });

  async.series([
    (cb) => {
      Product.remove({}, (err, data) => {});
      cb(null);
    },
    (cb) => {
      Product.create(products, (err) => {
        if (err) console.log(err);
      });
      cb(null);
    }
  ]
  , () => {
      res.send({"seed":"ok"});
  })

})

// router.get('/foo', (req, res) => res.send('OK'))

router.get('/:id', (req, res, next) => {
  Product.findById(req.params.id, (err, data) => {
    if (err) next();
    res.send(data);
  });
});

router.get('*', (req, res) => res.status(404).send({ msg:'Not found' }));

module.exports = router;
