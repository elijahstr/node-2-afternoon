const express = require('express');
const app = express();
app.use(express.json());
const messController = require('./controllers/messages_controller');

app.listen(3002, () => console.log('Running'));

app.post("/api/messages", messController.create);
app.get("/api/messages", messController.read);
app.put("/api/messages/:id", messController.update);
app.delete("/api/messages/:id", messController.delete);

app.use(express.static(__dirname + '../public/build'));


