const express = require('express')
const router = express.Router()
//const books = require('../models/books')
const { findAllBooks, showNewBook, deleteBook, updateBook, createBook, showEditbook, showbook, booksListStarterData } = require('../controller/bookStoreController')
// Index, New, Delete, Update, Create, Edit, Show

// Setup "index" route
router.get('/', findAllBooks)

// Setup "seed" route
router.get('/booksList', booksListStarterData)

// Setup "new" route
router.get('/new',showNewBook)

// Setup "destroy" route
router.delete('/:id', deleteBook)

// Setup "update" route
router.put('/:id', updateBook)

// Setup "create" route
router.post('/', createBook)

// Setup "edit" route
router.get('/:id/edit', showEditbook)

// Setup "show" route  
router.get('/:id', showbook)


//router.get('/clear', clearData)

module.exports = router;
