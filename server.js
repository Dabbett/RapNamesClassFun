const express = require('express')
const app = express()
const PORT = 8000

const rappers = {

    'savage': {
        'age': 29,
        'birthName': 'Sheyaa Bin',
        'birthLocation': "London, England",
    },
    'chance': {
        'age': 29,
        'birthName': 'Chancellor',
        'birthLocation': "chicago",
    },
    'unknown': {
        'age': 'unknown',
        'birthName': 'unknown',
        'birthLocation': "unknown"
    },
}
app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
     
})

app.get('/api/:name', (request, response) => {
    const rapperName = request.params.name.toLowerCase()
    if (rappers[rapperName]) {
        response.json(rappers[rapperName])
    } else {
        response.json(rappers['unknown'])
    }
})

app.listen(PORT, () => {
    console.log(`this server is running on port ${PORT}, you better go catch it.`)
})