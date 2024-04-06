const DbSchema = require('../models/DbSchema.model')

const homeInterFace = async (req, res) => {
  res.status(200).send("Home page");
};

const getAllItems = async (req, res) => {
  res.status(200).send("Hello from get all items 1");
};

const createItem = async (req, res) => {
    
  const data = {
    name: 'Ibrahim khalil',
    url: 'github.com',
    description: 'lorem ipsum 40',
    Rating: '4.3',
  };
  const newItem = await DbSchema.create(data)
  res.status(200).json({newItem});
};

module.exports = {
  homeInterFace,
  getAllItems,
  createItem,
};
