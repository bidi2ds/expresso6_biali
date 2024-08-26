//crar uµa função para parametrizar os responses

function responde(status, message, data=null){
    return {
        status,
        message,
        data,
        timestamp: new Date().getTime()
    }
}

module.exports={
    response
}