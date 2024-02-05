import sequelize from "../database/database.js";
import modelDevice from "../models/device.model.js";


const login = (req, res) => {
    res.render("loginpage.handlebars", {
        nav: false,
    }); 
}

const dispositivosConectados = async (req, res) => {
    let conexiones = await modelDevice.findAll();
    conexiones = conexiones.map((conexion) => conexion.toJSON());
    res.render("dispositivosConectados.handlebars", {
        conexiones,
        nav: true,
        dispositivos: true
    }); 
}

const consultarDatos = async (req, res) => {
    res.render("consultaDatos.handlebars", {        
        nav: true,
        datos: true
    }); 
}


let viewCtrl = {
    login,
    dispositivosConectados,
    consultarDatos
}

export default viewCtrl;