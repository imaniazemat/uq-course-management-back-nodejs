const express = require("express");
const mongoose = require('mongoose');
const cors = require('cors');

//Routes
const categorieRoutes = require("./src/routes/categorie")
const coursRoutes = require("./src/routes/cours")
const sectionRoutes = require("./src/routes/section")
const gestionMaterielRoutes = require("./src/routes/gestionMateriel")
const inscriptionRoute = require("./src/routes/inscriptionRout")

const app = express();

//Lien pour la conection a la BD Atlas
const URI = "mongodb+srv://testUser:testUser@cluster0.bhn0oza.mongodb.net/MyServiceWeb?retryWrites=true&w=majority";
mongoose.set('strictQuery', true);

app.use(cors())
app.use(express.json());
app.use(categorieRoutes);
app.use(coursRoutes);
app.use(sectionRoutes);
app.use(gestionMaterielRoutes);
app.use('/inscription', inscriptionRoute);

//Mockin Database connection for test units
if (process.env.NODE_ENV === 'test') {
    const Mockgoose = require('mockgoose').Mockgoose;
    const mockgoose = new Mockgoose(mongoose);

    mockgoose.prepareStorage().then(() =>{
        mongoose.connect(URI)
        .then(() => console.log("Connected to MongoDB Atlas"))
        .catch((error) => console.error(error));
    })
} else {
    //Connection to DB Atlas
    mongoose.connect(URI)
        .then(() => console.log("Connected to MongoDB Atlas"))
        .catch((error) => console.error(error));
}
//Path main
app.get('/', (req, res) => {
    res.send("Welcome to the Service Web")
})

module.exports = app.listen(5000, () => {
    console.log("Server started on port 5000")
})