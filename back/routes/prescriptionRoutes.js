//рецепты на таблтеки я полагаю, это можно реализовать. Дают ли таблетки после прививки? или рецепт на что либо на прививку рецепт
// prescriptionRoutes.js

const express = require('express');
const router = express.Router();

// Маршрут для создания нового рецепта 
router.post('/', (req, res) => {

    
    // Логика создания нового рецепта
});

// Маршрут для получения списка всех рецептов этого пациента
router.get('/', (req, res) => {
    // Логика получения списка всех рецептов
});

// Маршрут для получения информации о конкретном рецепте
router.get('/:id', (req, res) => {
    // Логика получения информации о конкретном рецепте
});

// Маршрут для обновления информации о рецепте
router.put('/:id', (req, res) => {
    // Логика обновления информации о рецепте
});

// Маршрут для удаления рецепта
router.delete('/:id', (req, res) => {
    // Логика удаления рецепта
});

module.exports = router;
