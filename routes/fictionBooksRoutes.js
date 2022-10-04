const express = require('express')
const router = express.Router()
//const books = require('../models/books')
const { findAllBooks, showNewBook, deleteBook, updateBook } = require('../controller/fictionBooksController')
// Index, New, Delete, Update, Create, Edit, Show

// Setup "index" route
router.get('/', findAllBooks)

// Setup "seed" route
router.get('/seed', seedStarterData)

// Setup "new" route
router.get('/new',showNewBook)

// Setup "destroy" route
router.delete('/:id', deleteBook)

// Setup "update" route
router.put('/:id', updateBook)

// Setup "create" route
router.post('/', createLog)

// Setup "edit" route
router.get('/:id/edit', showEditLog)

// Setup "show" route  
router.get('/:id', showOneLog)


router.get('/clear', clearData)

module.exports = router;
