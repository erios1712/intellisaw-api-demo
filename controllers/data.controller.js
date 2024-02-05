
import ModbusRTU from "modbus-serial";
import { Op, col } from "sequelize";
import modelDevice from "../models/device.model.js";

import modelTemp from "../models/temp.model.js";
import modelAmbientTemp from "../models/ambientTemp.model.js";
import modelRelativeHumidity from "../models/relativeHumidity.model.js";
import modelSdTotal from "../models/sdtotal.model.js";
import modelPdTotal from "../models/pdtotal.model.js";
import modelNoise from "../models/noise.model.js";
import modelSurface from "../models/surface.model.js";
import modelInternal from "../models/internal.model.js";
import modelSdNum from "../models/sdnum.model.js";
import modelPdNum from "../models/pdnum.model.js";
import modelAlphaSd from "../models/alphasd.model.js";
import modelAlphaPd from "../models/alphapd.model.js";
import modelBetaSd from "../models/betasd.model.js";
import modelBetaPd from "../models/betapd.model.js";
import modelPhiSd from "../models/phisd.model.js";
import modelPhiPd from "../models/phipd.model.js";


export const findAll = async (req, res) => {

    let { fechaInicio, fechaTermino, valorMinimo, valorMaximo, limite, desplazamiento, ordenPor, ascDesc } = req.query;

    let filtros = {};
    let ordenar = ["id", "ASC"];
    let columnasSeleccionadas = [];
    let parametro = req.params.param2;

    if (parametro != "all"){
        columnasSeleccionadas.push("id", parametro, "time");
        console.log(columnasSeleccionadas);
    }
         //filtro por cuando sólo existe fecha de inicio
         if (fechaInicio && !fechaTermino) {
             filtros.time = {
                 [Op.gte]: fechaInicio,
             };
             //filtro cuando sólo existe fecha de termino
         } else if (!fechaInicio && fechaTermino) {
             filtros.time = {
                 [Op.lte]: fechaTermino,
             };
             //filtro cuando existe fecha de inicio y termino
         } else if (fechaInicio && fechaTermino) {
             filtros.time = {
                 [Op.between]: [fechaInicio, fechaTermino],
             };
         }

         //filtro por cuando sólo existe valor minimo y parametro
         if (valorMinimo && !valorMaximo && parametro) {
            filtros[`${parametro}`] = {
                [Op.gte]: valorMinimo,
            };
            //filtro cuando sólo existe valor maximo y parametro
        } else if (!valorMinimo && valorMaximo && parametro) {
            filtros[`${parametro}`] = {
                [Op.lte]: valorMaximo,
            };
            //filtro cuando existe valor minimo, valor maximo y parametro
        } else if (valorMinimo && valorMaximo && parametro) {
            filtros[`${parametro}`] = {
                [Op.between]: [valorMinimo, valorMaximo],
            };
        }

         //filtro por cuando sólo existe ordenPor
         if (ordenPor && !ascDesc) {
            ordenar.splice(0,1);
            ordenar.unshift(ordenPor);
        }
        //filtro cuando sólo existe ascDesc
        else if (!ordenPor && ascDesc) {
            ordenar.splice(1,1);
            ordenar.push(ascDesc);
        }
        //filtro cuando existe ordenPor y ascDesc
        else if (ordenPor && ascDesc) {
            ordenar.splice(0,2);
            ordenar.push(ordenPor);
            ordenar.push(ascDesc);
        }
        console.log(ordenar);

    switch(req.params.param1){
        case 'temperatures':
            try {
                if(columnasSeleccionadas.length === 0){
                    columnasSeleccionadas.push("id", "temp1", "temp2", "temp3", "temp4", "temp5", "temp6", "temp7", "temp8", "temp9", "temp10", "temp11", "temp12", "time");
                    console.log(columnasSeleccionadas);
                }
                let { count, rows: data} = await modelTemp.findAndCountAll({
                    attributes: columnasSeleccionadas,
                    order: [ordenar],           
                    where: filtros,
                    limit: limite,
                    offset: desplazamiento,
                });                
                res.json({code: 200, registros: count, data});
                ordenar.splice(0,2);
                ordenar.push("id");
                ordenar.push("ASC");
            } catch (error) {
                res.status(500).json({
                    code: 500,
                    message: "Error al leer los registros.",
                });
            }
        break;

        case 'ambientemp':
            try {
                if(columnasSeleccionadas.length === 0){
                    columnasSeleccionadas.push("id", "ambientemp1", "ambientemp2", "ambientemp3", "ambientemp4", "ambientemp5", "ambientemp6", "ambientemp7", "ambientemp8", "time");
                }
                let { count, rows: data} = await modelAmbientTemp.findAndCountAll({
                    attributes: columnasSeleccionadas,
                    order: [ordenar],           
                    where: filtros,
                    limit: limite,
                    offset: desplazamiento,
                });
                res.json({code: 200, registros: count, data});
                ordenar.splice(0,2);
                ordenar.push("id");
                ordenar.push("ASC");
            } catch (error) {
                res.status(500).json({
                    code: 500,
                    message: "Error al leer los registros.",
                });
            };
        break;

        case 'relativehumidity':
            try {
                if(columnasSeleccionadas.length === 0){
                    columnasSeleccionadas.push("id", "rh1", "rh2", "rh3", "rh4", "rh5", "rh6", "rh7", "rh8", "time");
                }
                let { count, rows: data} = await modelRelativeHumidity.findAndCountAll({
                    attributes: columnasSeleccionadas,
                    order: [ordenar],           
                    where: filtros,
                    limit: limite,
                    offset: desplazamiento,
                });
                res.json({code: 200, registros: count, data});
                ordenar.splice(0,2);
                ordenar.push("id");
                ordenar.push("ASC");
            } catch (error) {
                res.status(500).json({
                    code: 500,
                    message: "Error al leer los registros.",
                });
            };
        break;

        case 'sdtotal':
            try {
                if(columnasSeleccionadas.length === 0){
                    columnasSeleccionadas.push("id", "sd1total", "sd2total", "sd3total", "sd4total", "time");
                }
                let { count, rows: data} = await modelSdTotal.findAndCountAll({
                    attributes: columnasSeleccionadas,
                    order: [ordenar],           
                    where: filtros,
                    limit: limite,
                    offset: desplazamiento,
                });
                res.json({code: 200, registros: count, data});
                ordenar.splice(0,2);
                ordenar.push("id");
                ordenar.push("ASC");
            } catch (error) {
                res.status(500).json({
                    code: 500,
                    message: "Error al leer los registros.",
                });
            };
        break;

        case 'pdtotal':
            try {
                if(columnasSeleccionadas.length === 0){
                    columnasSeleccionadas.push("id", "pd1total", "pd2total", "pd3total", "pd4total", "time");
                }
                let { count, rows: data} = await modelPdTotal.findAndCountAll({
                    attributes: columnasSeleccionadas,
                    order: [ordenar],           
                    where: filtros,
                    limit: limite,
                    offset: desplazamiento,
                });
                res.json({code: 200, registros: count, data});
                ordenar.splice(0,2);
                ordenar.push("id");
                ordenar.push("ASC");
            } catch (error) {
                res.status(500).json({
                    code: 500,
                    message: "Error al leer los registros.",
                });
            };
        break;

        case 'noise':
            try {
                if(columnasSeleccionadas.length === 0){
                    columnasSeleccionadas.push("id", "noise1", "noise2", "noise3", "noise4", "noise5", "noise6", "noise7", "noise8", "noise9", "noise10", "noise11", "noise12", "time");
                }
                let { count, rows: data} = await modelNoise.findAndCountAll({
                    attributes: columnasSeleccionadas,
                    order: [ordenar],           
                    where: filtros,
                    limit: limite,
                    offset: desplazamiento,
                });
                res.json({code: 200, registros: count, data});
                ordenar.splice(0,2);
                ordenar.push("id");
                ordenar.push("ASC");
            } catch (error) {
                res.status(500).json({
                    code: 500,
                    message: "Error al leer los registros.",
                });
            };
        break;

        case 'surface':
            try {
                if(columnasSeleccionadas.length === 0){
                    columnasSeleccionadas.push("id", "surface1", "surface2", "surface3", "surface4", "surface5", "surface6", "surface7", "surface8", "surface9", "surface10", "surface11", "surface12", "time");
                }
                let { count, rows: data} = await modelSurface.findAndCountAll({
                    attributes: columnasSeleccionadas,
                    order: [ordenar],           
                    where: filtros,
                    limit: limite,
                    offset: desplazamiento,
                });
                res.json({code: 200, registros: count, data});
                ordenar.splice(0,2);
                ordenar.push("id");
                ordenar.push("ASC");
            } catch (error) {
                res.status(500).json({
                    code: 500,
                    message: "Error al leer los registros.",
                });
            };
        break;

        case 'internal':
        try {
            if(columnasSeleccionadas.length === 0){
                columnasSeleccionadas.push("id", "internal1", "internal2", "internal3", "internal4", "internal5", "internal6", "internal7", "internal8", "internal9", "internal10", "internal11", "internal12", "time");
            }
            let { count, rows: data} = await modelInternal.findAndCountAll({
                attributes: columnasSeleccionadas,
                order: [ordenar],           
                where: filtros,
                limit: limite,
                offset: desplazamiento,
            });
            res.json({code: 200, registros: count, data});
            ordenar.splice(0,2);
            ordenar.push("id");
            ordenar.push("ASC");
        } catch (error) {
            res.status(500).json({
                code: 500,
                message: "Error al leer los registros.",
            });
        };
        break;

        case 'sdnum':
        try {
            if(columnasSeleccionadas.length === 0){
                columnasSeleccionadas.push("id", "sd1num", "sd2num", "sd3num", "sd4num", "time");
            }
            let { count, rows: data} = await modelSdNum.findAndCountAll({
                attributes: columnasSeleccionadas,
                order: [ordenar],           
                where: filtros,
                limit: limite,
                offset: desplazamiento,
            });
            res.json({code: 200, registros: count, data});
            ordenar.splice(0,2);
            ordenar.push("id");
            ordenar.push("ASC");
        } catch (error) {
            res.status(500).json({
                code: 500,
                message: "Error al leer los registros.",
            });
        };
    break;

    case 'pdnum':
        try {
            if(columnasSeleccionadas.length === 0){
                columnasSeleccionadas.push("id", "pd1num", "pd2num", "pd3num", "pd4num", "time");
            }
            let { count, rows: data} = await modelPdNum.findAndCountAll({
                attributes: columnasSeleccionadas,
                order: [ordenar],           
                where: filtros,
                limit: limite,
                offset: desplazamiento,
            });
            res.json({code: 200, registros: count, data});
            ordenar.splice(0,2);
            ordenar.push("id");
            ordenar.push("ASC");
        } catch (error) {
            res.status(500).json({
                code: 500,
                message: "Error al leer los registros.",
            });
        };
    break;

    case 'alphasd':
    try {
        if(columnasSeleccionadas.length === 0){
            columnasSeleccionadas.push("id", "alpha1sd", "alpha2sd", "alpha3sd", "alpha4sd", "time");
        }
        let { count, rows: data} = await modelAlphaSd.findAndCountAll({
            attributes: columnasSeleccionadas,
            order: [ordenar],           
            where: filtros,
            limit: limite,
            offset: desplazamiento,
        });
        res.json({code: 200, registros: count, data});
        ordenar.splice(0,2);
        ordenar.push("id");
        ordenar.push("ASC");
    } catch (error) {
        res.status(500).json({
            code: 500,
            message: "Error al leer los registros.",
        });
        };
    break;

    case 'alphapd':
        try {
            if(columnasSeleccionadas.length === 0){
                columnasSeleccionadas.push("id", "alpha1pd", "alpha2pd", "alpha3pd", "alpha4pd", "time");
            }
            let { count, rows: data} = await modelAlphaPd.findAndCountAll({
                attributes: columnasSeleccionadas,
                order: [ordenar],           
                where: filtros,
                limit: limite,
                offset: desplazamiento,
            });
            res.json({code: 200, registros: count, data});
            ordenar.splice(0,2);
            ordenar.push("id");
            ordenar.push("ASC");
        } catch (error) {
            res.status(500).json({
                code: 500,
                message: "Error al leer los registros.",
            });
            };
        break;

        case 'betasd':
        try {
            if(columnasSeleccionadas.length === 0){
                columnasSeleccionadas.push("id", "beta1sd", "beta2sd", "beta3sd", "beta4sd", "time");
            }
            let { count, rows: data} = await modelBetaSd.findAndCountAll({
                attributes: columnasSeleccionadas,
                order: [ordenar],           
                where: filtros,
                limit: limite,
                offset: desplazamiento,
            });
            res.json({code: 200, registros: count, data});
            ordenar.splice(0,2);
            ordenar.push("id");
            ordenar.push("ASC");
        } catch (error) {
            res.status(500).json({
                code: 500,
                message: "Error al leer los registros.",
            });
            };
        break;

        case 'betapd':
        try {
            if(columnasSeleccionadas.length === 0){
                columnasSeleccionadas.push("id", "beta1pd", "beta2pd", "beta3pd", "beta4pd", "time");
            }
            let { count, rows: data} = await modelBetaPd.findAndCountAll({
                attributes: columnasSeleccionadas,
                order: [ordenar],           
                where: filtros,
                limit: limite,
                offset: desplazamiento,
            });
            res.json({code: 200, registros: count, data});
            ordenar.splice(0,2);
            ordenar.push("id");
            ordenar.push("ASC");
        } catch (error) {
            res.status(500).json({
                code: 500,
                message: "Error al leer los registros.",
            });
            };
        break;

        case 'phisd':
        try {
            if(columnasSeleccionadas.length === 0){
                columnasSeleccionadas.push("id", "phi1sd", "phi2sd", "phi3sd", "phi4sd", "time");
            }
            let { count, rows: data} = await modelPhiSd.findAndCountAll({
                attributes: columnasSeleccionadas,
                order: [ordenar],           
                where: filtros,
                limit: limite,
                offset: desplazamiento,
            });
            res.json({code: 200, registros: count, data});
            ordenar.splice(0,2);
            ordenar.push("id");
            ordenar.push("ASC");
        } catch (error) {
            res.status(500).json({
                code: 500,
                message: "Error al leer los registros.",
            });
            };
        break;

        case 'phipd':
        try {
            if(columnasSeleccionadas.length === 0){
                columnasSeleccionadas.push("id", "phi1pd", "phi2pd", "phi3pd", "phi4pd", "time");
            }
            let { count, rows: data} = await modelPhiPd.findAndCountAll({
                attributes: columnasSeleccionadas,
                order: [ordenar],           
                where: filtros,
                limit: limite,
                offset: desplazamiento,
            });
            res.json({code: 200, registros: count, data});
            ordenar.splice(0,2);
            ordenar.push("id");
            ordenar.push("ASC");
        } catch (error) {
            res.status(500).json({
                code: 500,
                message: "Error al leer los registros.",
            });
            };
        break;

        default:
            return;
    }
};

export const findConnStatus = async (req, res) => {
    try {
        let connection = await modelDevice.findAll(
            {limit: 1, 
            order:
            [["id", "DESC"]]
            }
            );

        res.status(200).json({connection});
    } catch (error) {
        res.status(500).json({
            code: 500,
            message: "Error al leer los registros.",
        });
    }
};

export const saveRegisters = async (req, res) => {
try
{    
    let { ipaddress, tcpport, slaveid, startreg, numregs, freqpolling } = req.body;
    console.log(req.body);    
    if(!ipaddress || !tcpport || !slaveid || !startreg || !numregs || !freqpolling)
    {
        res.status(400).json(
            {
                code: 400,
                message: "Completar todos los datos para conectarse al dispositivo",
            }
            );
        throw new Error("Completar todos los datos para conectarse al dispositivo");        
    }
    
    "use strict";
    
    const client = new ModbusRTU();
    
    let mbsStatus = "Initializing...";    // holds a status of Modbus
    let marcador = false; // se usa en client.connect
    
    // Modbus 'state' constants
    const MBS_STATE_INIT          = "State init";
    const MBS_STATE_IDLE          = "State idle";
    const MBS_STATE_NEXT          = "State next";
    const MBS_STATE_GOOD_READ     = "State good (read)";
    const MBS_STATE_FAIL_READ     = "State fail (read)";
    const MBS_STATE_GOOD_CONNECT  = "State good (port)";
    const MBS_STATE_FAIL_CONNECT  = "State fail (port)";
    
    // Modbus TCP configuration values
    const mbsId       = slaveid;
    const mbsPort     = tcpport;
    const mbsHost     = ipaddress;
    const mbsScan     = freqpolling;
    const mbsTimeout  = freqpolling * 3;
    let mbsState    = MBS_STATE_INIT;
    
    //==============================================================
    const connectClient = function()
    {
       
        // close port (NOTE: important in order not to create multiple connections)
        client.close;    
    
        // set requests parameters
        client.setID(mbsId);
        client.setTimeout(mbsTimeout);
    
        // try to connect
        client.connectTCP(mbsHost, { port: mbsPort })
            .then(function()
            {
                mbsState  = MBS_STATE_GOOD_CONNECT;
                mbsStatus = "Connected, wait for reading...";
                console.log(mbsStatus);
                modelDevice.create({ ip: ipaddress, port: tcpport, modbusid: slaveid, conn: true })
                .then(marcador = false);
            })
            .catch(async function(e) 
            {
                mbsState  = MBS_STATE_FAIL_CONNECT;
                mbsStatus = e.message;
                console.log(e);
                if(marcador === false){
                modelDevice.create({ ip: ipaddress, port: tcpport, modbusid: slaveid, conn: false })
                .then(marcador = true);
                }                
            });
    
    };//fin funcion connectClient
    
    //==============================================================
    const readModbusData = function()
    {
        // try to read data
        client.readHoldingRegisters (startreg, numregs)
            .then(function(data)
            {
                mbsState   = MBS_STATE_GOOD_READ;
                mbsStatus  = "success";
                function Int16 (value) {
                    var ref = value & 0xFFFF;
                    return (ref > 0x7FFF) ? ref - 0x10000 : ref;
                };
                let registersArray = [];    
                let tempArray = [...data.data];
                registersArray = tempArray.map(Int16);
                return registersArray;
            }
            )//inicio funcion almacenar registros en DB
            .then(async function(registersArray)
            {
                let temp1 = registersArray[0], temp2 = registersArray[1], temp3 = registersArray[2], temp4 = registersArray[3], temp5 = registersArray[4], temp6 = registersArray[5], temp7 = registersArray[6], temp8 = registersArray[7], temp9 = registersArray[8], temp10 = registersArray[9], temp11 = registersArray[10], temp12 = registersArray[11];
                let ambientemp1 = registersArray[12], ambientemp2 = registersArray[14], ambientemp3 = registersArray[16], ambientemp4 = registersArray[18], ambientemp5 = registersArray[20], ambientemp6 = registersArray[22], ambientemp7 = registersArray[24], ambientemp8 = registersArray[26];
                let rh1 = registersArray[13], rh2 = registersArray[15], rh3 = registersArray[17], rh4 = registersArray[19], rh5 = registersArray[21], rh6 = registersArray[23], rh7 = registersArray[25], rh8 = registersArray[27];
                let sdtotal1 = registersArray[28], sdtotal2 = registersArray[29], sdtotal3 = registersArray[30], sdtotal4 = registersArray[31];
                let pdtotal1 = registersArray[32], pdtotal2 = registersArray[33], pdtotal3 = registersArray[34], pdtotal4 = registersArray[35];
                let noise1 = registersArray[37], noise2 = registersArray[40], noise3 = registersArray[43], noise4 = registersArray[46], noise5 = registersArray[49], noise6 = registersArray[52], noise7 = registersArray[55], noise8 = registersArray[58], noise9 = registersArray[61], noise10 = registersArray[64], noise11 = registersArray[67], noise12 = registersArray[70];
                let surface1 = registersArray[38], surface2 = registersArray[41], surface3 = registersArray[44], surface4 = registersArray[47], surface5 = registersArray[50], surface6 = registersArray[53], surface7 = registersArray[56], surface8 = registersArray[59], surface9 = registersArray[62], surface10 = registersArray[65], surface11 = registersArray[68], surface12 = registersArray[71];
                let internal1 = registersArray[39], internal2 = registersArray[42], internal3 = registersArray[45], internal4 = registersArray[48], internal5 = registersArray[51], internal6 = registersArray[54], internal7 = registersArray[57], internal8 = registersArray[60], internal9 = registersArray[63], internal10 = registersArray[66], internal11 = registersArray[69], internal12 = registersArray[72];
                let sd1num = registersArray[73], sd2num = registersArray[74], sd3num = registersArray[75], sd4num = registersArray[76];
                let pd1num = registersArray[77], pd2num = registersArray[78], pd3num = registersArray[79], pd4num = registersArray[80];
                let alphasd1 = registersArray[81], alphasd2 = registersArray[82], alphasd3 = registersArray[83], alphasd4 = registersArray[84];
                let alphapd1 = registersArray[85], alphapd2 = registersArray[86], alphapd3 = registersArray[87], alphapd4 = registersArray[88];
                let betasd1 = registersArray[89], betasd2 = registersArray[90], betasd3 = registersArray[91], betasd4 = registersArray[92];
                let betapd1 = registersArray[93], betapd2 = registersArray[94], betapd3 = registersArray[95], betapd4 = registersArray[96];
                let phisd1 = registersArray[97], phisd2 = registersArray[98], phisd3 = registersArray[99], phisd4 = registersArray[100];
                let phipd1 = registersArray[101], phipd2 = registersArray[102], phipd3 = registersArray[103], phipd4 = registersArray[104];
                
                console.log(temp1, temp2, temp3, temp4, temp5, temp6, temp7, temp8, temp9, temp10, temp11, temp12);
                console.log(ambientemp1, ambientemp2, ambientemp3, ambientemp4, ambientemp5, ambientemp6, ambientemp7, ambientemp8);
                console.log(rh1, rh2, rh3, rh4, rh5, rh6, rh7, rh8);
                console.log(sdtotal1, sdtotal2, sdtotal3, sdtotal4);
                console.log(pdtotal1, pdtotal2, pdtotal3, pdtotal4);
                console.log(noise1, noise2, noise3, noise4, noise5, noise6, noise7, noise8, noise9, noise10, noise11, noise12);
                console.log(surface1, surface2, surface3, surface4, surface5, surface6, surface7, surface8, surface9, surface10, surface11, surface12);
                console.log(internal1, internal2, internal3, internal4, internal5, internal6, internal7, internal8, internal9, internal10, internal11, internal12);

                await modelTemp.create({temp1, temp2, temp3, temp4, temp5, temp6, temp7, temp8, temp9, temp10, temp11, temp12});
                await modelAmbientTemp.create({ambientemp1, ambientemp2, ambientemp3, ambientemp4, ambientemp5, ambientemp6, ambientemp7, ambientemp8});      
                await modelRelativeHumidity.create({rh1, rh2, rh3, rh4, rh5, rh6, rh7, rh8});
                await modelSdTotal.create({sd1total: sdtotal1, sd2total: sdtotal2, sd3total: sdtotal3, sd4total: sdtotal4 });
                await modelPdTotal.create({pd1total: pdtotal1, pd2total: pdtotal2, pd3total: pdtotal3, pd4total: pdtotal4 });
                await modelNoise.create({noise1, noise2, noise3, noise4, noise5, noise6, noise7, noise8, noise9, noise10, noise11, noise12});
                await modelSurface.create({surface1, surface2, surface3, surface4, surface5, surface6, surface7, surface8, surface9, surface10, surface11, surface12});
                await modelInternal.create({internal1, internal2, internal3, internal4, internal5, internal6, internal7, internal8, internal9, internal10, internal11, internal12});
                await modelSdNum.create({sd1num, sd2num, sd3num, sd4num});
                await modelPdNum.create({pd1num, pd2num, pd3num, pd4num});
                await modelAlphaSd.create({alpha1sd: alphasd1, alpha2sd: alphasd2, alpha3sd: alphasd3, alpha4sd: alphasd4});
                await modelAlphaPd.create({alpha1pd: alphapd1, alpha2pd: alphapd2, alpha3pd: alphapd3, alpha4pd: alphapd4});
                await modelBetaSd.create({beta1sd: betasd1, beta2sd: betasd2, beta3sd: betasd3, beta4sd: betasd4});
                await modelBetaPd.create({beta1pd: betapd1, beta2pd: betapd2, beta3pd: betapd3, beta4pd: betapd4});
                await modelPhiSd.create({phi1sd: phisd1, phi2sd: phisd2, phi3sd: phisd3, phi4sd: phisd4});
                await modelPhiPd.create({phi1pd: phipd1, phi2pd: phipd2, phi3pd: phipd3, phi4pd: phipd4});
            }
            )
            .catch(function(e)
            {
                mbsState  = MBS_STATE_FAIL_READ;
                mbsStatus = e.message;
                console.log(e);
            });
    };
    
    //==============================================================
    const runModbus = function()
    {
        let nextAction;
    
        switch (mbsState)
        {
            case MBS_STATE_INIT:
                nextAction = connectClient;
                break;
    
            case MBS_STATE_NEXT:
                nextAction = readModbusData;
                break;
    
            case MBS_STATE_GOOD_CONNECT:
                nextAction = readModbusData;
                break;
    
            case MBS_STATE_FAIL_CONNECT:
                nextAction = connectClient;
                break;
    
            case MBS_STATE_GOOD_READ:
                nextAction = readModbusData;
                break;
    
            case MBS_STATE_FAIL_READ:
                if(client.isOpen){ mbsState = MBS_STATE_NEXT;  }
                else{ nextAction = connectClient; }
                break;
    
            default:
                // nothing to do, keep scanning until actionable case
        }
    
        console.log();
        console.log(nextAction);
    
        // execute "next action" function if defined
        if (nextAction !== undefined)
        {
            nextAction();
            mbsState = MBS_STATE_IDLE;
        }
        
        setTimeout(runModbus, mbsScan);
         
    };//fin funcion runModbus
    
    
    //==============================================================
    runModbus();
    
    res.status(200).json(
    {
        code: 200,
        message: "iniciando conexión a dispositivo modbus",
    }
    );    

}//fin try
catch (error)
{
    console.log(error);
}//fin catch

}//fin funcion saveRegisters