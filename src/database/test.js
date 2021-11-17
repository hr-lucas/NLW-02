const Database = require('./db')
const createProffy = require('./createProffy')

Database.then( async (db) => {
    // inserir daddos
    proffyValue = {
        name:"Diegos Fernandes",
        avatar:"https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4", 
        whatsapp:"34984187564",
        bio:"Entusiasta das melhores tecnologias de química avançada. Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
    }

    classValue = {
        subject:"Quimica", 
        cost:"20", 
        // Proffy id vira pelo banco de dados
    }

    classScheduleValues = [
        //  Classe _id virar pelo banco de dados, após cadastramos a class
        {
            weekday: 1,
            time_from: 720,
            time_to:1220
        },
        {
            weekday: 0,
            time_from: 750,
            time_to:1220
        }
    ]

    // await createProffy(db, {proffyValue, classValue, classScheduleValues})
    // consultador dados inseridos

    // Todos os proffys
    const selectedProffys = await db.all("SELECT * FROM proffys")

    // consultar as classes de um determinado proffy
    // trazer junto os dados do proffy
    const selectClassAndProffys = await db.all(`
        SELECT classes.*,proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)
    console.log(selectClassAndProffys)
})