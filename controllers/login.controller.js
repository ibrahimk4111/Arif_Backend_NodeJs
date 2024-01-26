const userLogInInterface = (req, res) => {
  res.render("loginForm", { title: "log in form" });
};

const loginUser = (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  if (email == "arifs@dhaka.net" && password == "arifs#bd@4111") {
    // res.json({ msg: "user loged in successfully" });
    res.redirect("/products")
  }else{
    res.render("loginForm", { title: "log in failed" });
    res.redirect("/")
  }
};

module.exports = {
  userLogInInterface,
  loginUser,
};
