const get_all_event = async(req, res) =>{
    res.status(200).json({message: "event getting successfully"})
}

const create_event = async(req, res) =>{
    res.status(200).json({message: "event created successfully"})
}

const update_event = async(req, res) =>{
    res.status(200).json({message: "event updated successfully"})
}

const delete_event = async(req, res) =>{
    res.status(200).json({message: "event deleted successfully"})
}

module.exports = {
    get_all_event,
    create_event,
    update_event,
    delete_event
}
