import express from 'express'

const app = express()

/**
 * GET    -> BUSCA
 * PSOT   -> SALVAR
 * PUT    -> ALTERAR
 * DELETE -> DELETAR
 * PATCH  -> ALTERAÇÃO ESPECIFICA
 */

 app.get("/users", (request, response) => {
  // return response.send("Oi")
  return response.json({message: "Oláa"})
 })

 app.get("/", (request, response) => {
  return response.json({message: "Olá !!!"})
 })

 app.post("/", (request, response) => {
  return response.json({message: "Dados salvo com sucesso"})
 })

app.listen(3333, () => console.log('Server is runnning!'))