const app = require('../src/app');
const request = require('supertest');

describe('Endpoint de Empleados', () => {
    it('debería obtener una lista de empleados existentes', (done) => {
        request(app)
          .get('/api/empleados')
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200, done);
          done();
      });
    
      it('debería obtener una lista de empleados (nombre de ruta incorrecto)', (done) => {
        request(app)
          .get('/api/empleados') 
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(404, done); 
          done();
      });

      it('debería editar un empleado existente correctamente', (done) => {
        const idEmpleadoExistente = '650ead58f85cbbeab453645a';
    
        const datosEdicion = {
          nombre: 'Nuevo Nombre',
          cargo: 'Nuevo Cargo',
          departamento: 'Nuevo Departamento',
          sueldo: 70000,
        };
    
        request(app)
          .put(`/api/empleados/${idEmpleadoExistente}`)
          .set('Accept', 'application/json')
          .send(datosEdicion)
          .expect('Content-Type', /json/)
          .expect(200, done);
          done();
      });
    
      it('debería manejar la edición de un empleado inexistente', (done) => {
        const idEmpleadoInexistente = '650ead58f85cbbeab453645gf';
    
        const datosEdicion = {
          nombre: 'Nuevo Nombre',
          cargo: 'Nuevo Cargo',
          departamento: 'Nuevo Departamento',
          sueldo: 70000,
        };
    
        request(app)
          .put(`/api/empleados/${idEmpleadoInexistente}`)
          .set('Accept', 'application/json')
          .send(datosEdicion)
          .expect('Content-Type', /json/)
          .expect(404, done); 
          done();
      });

      it('debería eliminar un empleado existente correctamente', (done) => {
        const idEmpleadoExistente = '65170658dedaf35df702f6c9';
    
        request(app)
          .delete(`/api/empleados/${idEmpleadoExistente}`)
          .expect(204, done); 
          done();
      });
    
      it('debería manejar la eliminación de un empleado inexistente', (done) => {
        const idEmpleadoInexistente = '65170658dedaf35df702f6cud';
    
        request(app)
          .delete(`/api/empleados/${idEmpleadoInexistente}`)
          .expect(404, done);
          done();
      });
});