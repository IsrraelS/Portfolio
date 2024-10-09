const express = require('express');
const router = express.Router();

// Definir modelo
const Contact = require('./models/contact');

// Ruta para manejar el envío de formulario
router.post('/contact', async (req, res) => {
    const { name, email, message } = req.body;

    try {
        const newContact = new Contact({ name, email, message });
        await newContact.save();
        res.status(201).json({ msg: 'Solicitud enviada exitosamente' });
    } catch (err) {
        res.status(500).json({ error: 'Error al enviar solicitud' });
    }
});

module.exports = router;
