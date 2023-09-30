const empleadoCtrl = {};
const Empleado = require('../models/Empleado');

empleadoCtrl.getEmpleado = (req, res) => { }
empleadoCtrl.getEmpleados = async (req, res) => {
    const empleados = await Empleado.find();
    res.json(empleados);
}
empleadoCtrl.createEmpleado = async (req, res) => {
    const empleado = new Empleado({
        nombre: req.body.nombre,
        cargo: req.body.cargo,
        departamento: req.body.departamento,
        sueldo: req.body.sueldo
    });
    console.log(empleado);
    await empleado.save();
    res.json('status: Datos guardados');
}
empleadoCtrl.editEmpleado = async (req, res) => {
    const empleado = {
        nombre: req.body.nombre,
        cargo: req.body.cargo,
        departamento: req.body.departamento,
        sueldo: req.body.sueldo
    };
    await Empleado.findByIdAndUpdate(req.params.id, { $set: empleado }, { new: true });
    res.json('status: Datos actualizados');
}
empleadoCtrl.deleteEmpleado = async (req, res) => {
    await Empleado.findByIdAndRemove(req.params.id);
    res.json('status: Empleado ha sido removido');
}

module.exports = empleadoCtrl;