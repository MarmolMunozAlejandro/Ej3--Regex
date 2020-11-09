db.album.find({"song":"Fiesta pagana"}).pretty()
//Devuelve la canción Fiesta pagana

db.album.find({puntuation: {$eq: 10}}).pretty()
//Devuelve las canciones con la puntuación más alta

db.album.find({puntuation: {$gt: 6}, genre:"Pop"}).pretty()
//Devuelve las canciones del género pop con una puntuación mayor a 6

db.album.find({ puntuation: {$in: [9,10] } } ).pretty()
//Devuelve las canciones con una puntuación de 9 o 10

db.album.find({$and:[{author: "El mago de Oz", "duration.min": { $gte: 5 } } ] } ).pretty()
//Devuelve las canciones del Mago de Oz cuya duración sea igual o superior a los 5 minutos

db.album.find( { "views.num":{$lt:100}, "views.can":"millon"} ).pretty()
//Devuelve las canciones con menos de 100 millones de visitas

db.album.find({$and:[{"duration.min": 4, "duration.s":{$lte:59}}]}).pretty()
//Devuelve las canciones que duren 4 minutos o más sin llegar a 5

db.album.find({ $or:[
  {$and:[{"views.num": {$gte:100}, "views.can":{$eq:"millon"}}]},
  {"views.can":"billon"}]}).pretty()
//Devuelve todas las canciones con 100 millón de visitas o más

db.album.find({ genre: {$ne:"Flamenco"}} ).pretty()
//Devuelve las canciones que no sean del género Flamenco

db.album.find( { $and: [
    {song: {$nin:["Pal pulmón","Escúchame mujer","Mi estrella blanca"]}},
    {author: {$nin:["Côme","LP"]}}]}).pretty()
//Devuelve las canciones salvo tres en concreto y aquellas cuyo autor no sea Come ni LP

db.album.find( { "duration.min":{ $not: {$lte:4} } } ).pretty()
//Devuelve las canciones que no sea inferior a los 4 minutos

db.album.find({ $nor:[
    {"author":"Nikone", "views.num":{$lt:20}},
    {"genre":"Pop"}]}).pretty()
//O muestra las canciones de nikone con más de 20 visitas o aquellas cuyo género no sea Pop

db.album.find({song:{$regex: /^B/i}}).pretty()
//Devuelve las canciones que empiecen por b

db.album.find( {genre:{$not:{$regex: /^R/i}}}).pretty()
//Devuelve las canciones cuyo género no empiece por r 

db.album.find( {song:{$regex: /mujer/i}}).pretty()
//Devuelve una canción que tenga "mujer" en su nombre

db.album.find({$and:[
  {song:{$regex: /diablo$/, $options:`i`}},
  {song:{$regex: /^L/, $options:`i`}}]}).pretty()
//Devuelve una canción que termina en la palabra diablo y empiece por la L

