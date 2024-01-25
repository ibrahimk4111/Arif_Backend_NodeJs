const userLogInInterface = (req, res) =>{
    res.render("loginForm", {title: "log in form"})
}

const loginUser = (req, res) =>{
    res.json({msg:"user log in post method"})
}

module.exports = {
    userLogInInterface,
    loginUser
}