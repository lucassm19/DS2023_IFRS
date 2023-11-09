// Importando as dependências
const mongoose = require("mongoose");
//Referencia o model Course
const Course = mongoose.model("Course");
// Vamos exportar um objeto com algumas funções
module.exports = {
    // Vai retornar todos os cursos de nosso banco de dados
    async index(req, res) {
        //pega os parãmetros get da requisição
        const { page = 1 } = req.query;
        // retorna os cursos de nosso banco de dados
        const courses = await Course.paginate({}, { page, limit: 10 });
        // vamos retornar em formato JSON
        return res.json(courses);
    },
};