const express = require('express')
const app = express()
var morgan = require('morgan')
app.use(express.json())
const cors = require('cors')
app.use(cors())
morgan.token('type', function (req) { return JSON.stringify(req.body) })
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :status type :type'))
app.use(express.static('dist'))


let items = [
    {
        "id": "1",
        "picture": "🍌",
        "name": "Banana",
        "price": 32,
        "quantity": 210,
        "type": "fruits"
    },
    {
        "id": "2",
        "picture": "🍓",
        "name": "Strawberry",
        "price": 52,
        "quantity": 66,
        "type": "fruits"
    },
    {
        "id": "3",
        "picture": "🍗",
        "name": "Checken",
        "price": 110,
        "quantity": 175,
        "type": "foods",
        "sub-type": "Non-Veg"
    },
    {
        "id": "4",
        "picture": "🥬",
        "name": "Lettuce",
        "price": 12,
        "quantity": 50,
        "type": "Vegetables"
    },
    {
        "id": "5",
        "picture": "🍅",
        "name": "Tomato",
        "price": 31,
        "quantity": 117,
        "type": "Vegetables"
    },
    {
        "id": "6",
        "picture": "🥩",
        "name": "Mutton",
        "price": 325,
        "quantity": 111,
        "type": "Non-Veg"
    },
    {
        "id": "7",
        "picture": "🥕",
        "name": "Carrot",
        "price": 42,
        "quantity": 190,
        "type": "Vegetables"
    },
    {
        "id": "8",
        "picture": "🍒",
        "name": "kirsikka",
        "price": 0,
        "quantity": -36,
        "type": "foods"
    }
]

app.get('/', (request, response) => {
    response.send('<h1>Hard coded inventory items</h1>')
})

app.get('/api/items', (request, response) => {
    response.json(items)
})

app.get('/api/items/:id', (request, response) => {
    const id = request.params.id
    const item = items.find(item => item.id === id)
    if (item) { response.json(item) } else { response.status(404).end() }
})

app.delete('/api/items/:id', (request, response) => {
    const id = request.params.id
    items = items.filter(item => item.id !== id)

    response.status(204).end()
})



const generateId = () => {
  const maxId = items.length > 0
    ? Math.max(...items.map(n => Number(n.id)))
    : 0
  return String(maxId + 1)
}


function getRandomInt(max) {
  return Math.floor(Math.random() * max).toString()
}


app.post('/api/items', (request, response) => {
    const body = request.body

    if (!body.name) {
        return response.status(400).json({
            error: 'name missing'
        })
    }

      if (items.find(item=>item.name===body.name)) {        
        return response.status(400).json({
            error: 'name already in database'
        })
    }

    const item = {
        ...body,
        id: getRandomInt(100000),
    }

    items = items.concat(item)

    response.json(item)
})

app.put('/api/items/:id', (request, response) => {
     const id = request.params.id
     const changedItem = request.body
    items = items.map(item =>item.id===id?changedItem:item)

    response.json(changedItem)

})

app.get('/info', (request, response) => {
    const now = new Date()
    response.send('Inventory has info for ' + items.length + ' items <br> <br>' + now)


})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})