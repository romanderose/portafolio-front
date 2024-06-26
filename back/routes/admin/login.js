var express = require('express');
var router = express.Router();
var usuariosModel = require('./../../models/usuariosModel');

/* GET login page. */
router.get('/', function(req, res, next) {
  res.render('admin/login', {
    layout: 'admin/layout',
  });
});

/* Para capturar los datos ingresados en el formulario, y si son correctos,
iniciar sesión*/
router.post('/', async (req,res,next) => {
  try{
    var usuario = req.body.usuario; //capturando nombre usuario escrito
    var password = req.body.password; //capturando password escrita

    var data = await usuariosModel.getUserByUsernameAndPassword
    (usuario, password);

    if (data != undefined) {
      //variables de sesion
      req.session.id_usuario = data.id;
      req.session.nombre = data.usuario;

      res.redirect('/admin/novedades');
    } else {
      res.render('admin/login', {
        layout: 'admin/layout',
        error: true
      });
    }

  } catch (error) {
    console.log(error);
  }
});

//para cerrar sesión
router.get('/logout', function(req, res, next) {
  req.session.destroy();
  res.render('admin/login', {
    layout: 'admin/layout'
  });
});

module.exports = router;

