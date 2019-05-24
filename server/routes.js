const { fetchItems, addItem, updateItem, deleteItem } = require('./controller');

const routes = [
  {
    method: 'GET',
    url: '/api/menuItems',
    handler: fetchItems
  },
  {
    method: 'POST',
    url: '/api/menuItems',
    handler: addItem,
  },
  {
    method: 'PUT',
    url: '/api/menuItems/:id',
    handler: updateItem
  },
  {
    method: 'DELETE',
    url: '/api/menuItems/:id',
    handler: deleteItem
  }
]

module.exports = routes