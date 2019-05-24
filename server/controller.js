const { MenuItem } = require('./models/menuItems');

const fetchItems = async (req, reply) => {
  try {
    const menuItems = await MenuItem.find();
    return menuItems
  }
  catch (err) {
    console.log(err);
  }
}

const addItem = async (req, reply) => {
  try {
    const NewItem = new MenuItem({ ...req.body });
    return NewItem.save()
  }
  catch (err) {
    console.log(err);
  }
}

const updateItem = async (req, reply) => {
  try {
    const { id } = req.params;
    const { item } = req.body;
    const {...updateData} = item;
    const update = await MenuItem.findOneAndUpdate({id}, updateData, { new: true });
    return update;
  }
  catch (err) {
    console.log(err);
  }
}

const deleteItem = async (req, reply) => {
  try {
    const { id } = req.params;
    const menuItem = await MenuItem.findOneAndDelete({ id });
    return menuItem;
  }
  catch (err) {
    console.log(err);
  }
}

module.exports = { fetchItems, addItem, updateItem, deleteItem };