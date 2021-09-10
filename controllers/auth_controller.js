const user = require('../models/SignupModels');
const expressJwt = require('express-jwt');
const {oAuth2Client} = require('google-auth-library');
const fetch = require('node-fetch');
const {validationResult} = require('express-validator');
const jwt = require('jsonwebtoken');
const errorHandler = require('../helpers/dbErrorHandler');


exports.registerController = (req, res) => {
    const {name, email, password} = req.body;
    console.log(name, email, password);
}