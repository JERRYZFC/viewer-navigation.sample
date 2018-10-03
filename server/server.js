/// //////////////////////////////////////////////////////////////////
// Copyright (c) Autodesk, Inc. All rights reserved
// Written by Forge Partner Development
//
// Permission to use, copy, modify, and distribute this software in
// object code form for any purpose and without fee is hereby granted,
// provided that the above copyright notice appears in all copies and
// that both that copyright notice and the limited warranty and
// restricted rights notice below appear in all supporting
// documentation.
//
// AUTODESK PROVIDES THIS PROGRAM "AS IS" AND WITH ALL FAULTS.
// AUTODESK SPECIFICALLY DISCLAIMS ANY IMPLIED WARRANTY OF
// MERCHANTABILITY OR FITNESS FOR A PARTICULAR USE.  AUTODESK, INC.
// DOES NOT WARRANT THAT THE OPERATION OF THE PROGRAM WILL BE
// UNINTERRUPTED OR ERROR FREE.
/// //////////////////////////////////////////////////////////////////

'use strict'; // http://www.w3schools.com/js/js_strict.asp

const express = require('express');
const path = require('path');
const app = express();
const forge = require('./forge');

// favicon
const favicon = require('serve-favicon');
app.use(favicon(path.join(__dirname, '/../www/images/favicon.ico')));

// prepare server routing
app.use('/', express.static(path.join(__dirname, '/../www'))); // redirect static calls
app.set('port', process.env.PORT || 3000); // main port

// prepare our API endpoint routing
app.use('/', forge); // redirect oauth API calls

module.exports = app;
