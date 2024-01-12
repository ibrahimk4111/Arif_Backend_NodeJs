const get_products = (req, res) => {
  res.status(200).json({ message: "get db" });
};

const create_products = (req, res) => {
  res.json({ message: "post to db" });
};

const update_products = (req, res) => {
  res.json({ message: "update db" });
};

const delete_products = (req, res) => {
  res.json({ message: "delete db" });
};

module.exports = {
  get_products,
  create_products,
  update_products,
  delete_products,
};
