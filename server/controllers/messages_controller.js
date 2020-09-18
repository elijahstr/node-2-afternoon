const messages = [];
let id = 0;

const object = {
    create : (req, res) => {
        const {text, time} = req.body;
        messages.push({id, text, time});
        id+=1;
        res.status(200).send(messages);
    },

    read : (req, res) => {
        res.status(200).send(messages);
    },

    update : (req, res) => {
        const {text} = req.body;
        const newId = req.params.id;
        const theNum = messages.findIndex(mess => mess.id==newId);
        let newMess = messages[theNum];

        messages[theNum] = {
            id: newMess.id,
            text: text || newMess.id,
            time: newMess.time
        }

        res.status(200).send(messages);
    },

    delete : (req, res) => {
    const delId = req.params.id;
    const theNum = messages.findIndex(mess => mess.id==delId);
    messages.splice(theNum, 1);

    res.status(200).send(messages);
    }
    
    
}




module.exports = object;