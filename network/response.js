
// MANEJO DE RESPUESTAS POR PARTE DE LAS PETICIONES, DEPENDIENTO SI DAN ERROR O SUCCESS

exports.success = (req,res,message,status) => {
    res.status(status || 200).send({
        error: "",
        body: message
    });
}

exports.error = (req,res,message,status) => {
    res.status(status || 500).send({
        error: message,
        body:"",
    })
}