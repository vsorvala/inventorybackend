const express = require('express')
const app = express()
var morgan = require('morgan')
app.use(express.json())
const cors = require('cors')
app.use(cors())
morgan.token('type', function (req) { return JSON.stringify(req.body) })
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :status type :type'))
app.use(express.static('dist'))


let items = [{ "id": "1", "picture": "🍌", "name": "Banana", "price": 32, "quantity": 149, "type": "fruits" }, { "id": "2", "picture": "🍓", "name": "Strawberry", "price": 52, "quantity": 66, "type": "fruits" }, { "id": "3", "picture": "🍗", "name": "Checken", "price": 110, "quantity": 175, "type": "foods", "sub-type": "Non-Veg" }, { "id": "4", "picture": "🥬", "name": "Lettuce", "price": 12, "quantity": 50, "type": "Vegetables" }, { "id": "5", "picture": "🍅", "name": "Tomato", "price": 31, "quantity": 117, "type": "Vegetables" }, { "id": "6", "picture": "🥩", "name": "Mutton", "price": 325, "quantity": 111, "type": "Non-Veg" }, { "id": "7", "picture": "🥕", "name": "Carrot", "price": 42, "quantity": 190, "type": "Vegetables" }, { "id": "8", "picture": "🍒", "name": "kirsikka", "price": 0, "quantity": -36, "type": "foods" }, { "picture": "🍒", "name": "rotta boxi", "price": "444", "quantity": 3318, "type": "fruits", "id": "18483" }, { "picture": "🍒", "name": "Puluverkko / 100m2", "price": "0", "quantity": "0", "type": "vegetable", "id": "51733" }, { "picture": "🍌", "name": "Puluverkko / 400m2(20x20m)", "price": "0", "quantity": "0", "type": "fruit", "id": "32378" }, { "picture": "🍒", "name": "Puluverkko / 900m2(30x30)", "price": "0", "quantity": "0", "type": "fruit", "id": "72560" }, { "picture": "🍓", "name": "Naakkaverkko / 100m2 (10x10)", "price": "0", "quantity": "0", "type": "fruit", "id": "37236" }, { "picture": "🍌", "name": "Naakkaverkko / 400m2 (20x20)", "price": "0", "quantity": "0", "type": "foods", "id": "62169" }, { "picture": "🍒", "name": "Pääskyverkko", "price": "0", "quantity": "0", "type": "vegetable", "id": "81835" }, { "picture": "🍒", "name": "Metalli13x13mm/m2", "price": "0", "quantity": "0", "type": "foods", "id": "84506" }, { "picture": "💎", "name": "Metalli25x25mm/m2", "price": "0", "quantity": "0", "type": "fruit", "id": "96179" }, { "picture": "🍌", "name": "Metalli 5,5X5,5mm/m2", "price": "0", "quantity": "0", "type": "foods", "id": "94161" }, { "picture": "💎", "name": "Vaijeri 0,7mm / m", "price": "0", "quantity": "0", "type": "fruit", "id": "97213" }, { "picture": "🍒", "name": "Vaijeri 2mm / m", "price": "0", "quantity": "0", "type": "vegetable", "id": "77578" }, { "picture": "🍌", "name": "Vantti M5", "price": "0", "quantity": "0", "type": "foods", "id": "93511" }, { "picture": "🍒", "name": "Vantti M6", "price": "0", "quantity": "0", "type": "fruit", "id": "12850" }, { "picture": "🍒", "name": "Holkki alumiini", "price": "100", "quantity": "1000", "type": "vegetable", "id": "15032" }, { "picture": "💎", "name": "Holkki, micro, pss", "price": "0", "quantity": "1", "type": "foods", "id": "68843" }, { "picture": "🍓", "name": "Holkki kupari", "price": "1", "quantity": "0", "type": "vegetable", "id": "13715" }, { "picture": "💎", "name": "Vaijeritolpanjalusta", "price": "0", "quantity": "0", "type": "fruit", "id": "3398" }, { "picture": "💎", "name": "Sinkilä, pkt", "price": "0", "quantity": "0", "type": "fruit", "id": "4760" }, { "picture": "🍌", "name": "Kulmapala", "price": "0", "quantity": "0", "type": "vegetable", "id": "77102" }, { "picture": "🍌", "name": "Makita 1010HD /pkt", "price": "0", "quantity": "0", "type": "vegetable", "id": "5535" }, { "picture": "🍌", "name": "Palkkikenkä 24\", kpl", "price": "0", "quantity": "0", "type": "vegetable", "id": "49844" }, { "picture": "🍌", "name": "Palkkikenkä 58\", kpl", "price": "0", "quantity": "0", "type": "vegetable", "id": "57387" }, { "picture": "🍌", "name": "Palkkikenkä 912\", kpl", "price": "0", "quantity": "0", "type": "vegetable", "id": "96211" }, { "picture": "🍓", "name": "Huoltohakanen", "price": "0", "quantity": "0", "type": "fruit", "id": "85705" }, { "picture": "🍓", "name": "Rapid 8mm, RST, pkt", "price": "0", "quantity": "0", "type": "fruit", "id": "58402" }, { "picture": "🍓", "name": "Avishock", "price": "0", "quantity": "0", "type": "fruit", "id": "26880" }, { "picture": "🍓", "name": "Small energiser", "price": "0", "quantity": "0", "type": "fruit", "id": "20756" }, { "picture": "🍓", "name": "Large energiser", "price": "0", "quantity": "0", "type": "fruit", "id": "13939" }, { "picture": "💎", "name": "Jumper shk 123", "price": "0", "quantity": "0", "type": "vegetable", "id": "53878" }, { "picture": "💎", "name": "Suoraliitin, shk 121", "price": "0", "quantity": "0", "type": "vegetable", "id": "33143" }, { "picture": "💎", "name": "Kulmaliitin", "price": "0", "quantity": "0", "type": "vegetable", "id": "71576" }, { "picture": "🍒", "name": "Alumiiniputki a 3m", "price": "0", "quantity": "0", "type": "vegetable", "id": "70392" }, { "picture": "🍒", "name": "Johtopidike, pss", "price": "0", "quantity": "0", "type": "vegetable", "id": "49020" }, { "picture": "🍒", "name": "VA-lokkipaimen", "price": "0", "quantity": "0", "type": "vegetable", "id": "6291" }, { "picture": "🍒", "name": "VA-lokki, johdot", "price": "0", "quantity": "0", "type": "vegetable", "id": "94853" }, { "picture": "🍒", "name": "VA-pressu 1x1m", "price": "0", "quantity": "0", "type": "vegetable", "id": "47147" }, { "picture": "🍌", "name": "Vappupallo, kpl", "price": "0", "quantity": "0", "type": "fruit", "id": "49880" },
{ "picture": "🍌", "name": "Pulupiikki P20, 1m", "price": "0", "quantity": "0", "type": "fruit", "id": "89921" }, { "picture": "🍌", "name": "Lokkipiikki, G20", "price": "0", "quantity": "0", "type": "fruit", "id": "5519" }, { "picture": "💎", "name": "Birdfree", "price": "0", "quantity": 5, "type": "fruit", "id": "40335" }, { "picture": "💎", "name": "Kuppi /kpl", "price": "7", "quantity": "11", "type": "foods", "id": "39267" }, { "picture": "💎", "name": "Single 90x200", "price": "90", "quantity": "2", "type": "foods", "id": "79778" }, { "picture": "💎", "name": "SmallDouble 120X190", "price": "120", "quantity": "1", "type": "foods", "id": "88201" },
{ "picture": "💎", "name": "Double135X190", "price": "120", "quantity": "1", "type": "foods", "id": "30167" }, { "picture": "💎", "name": "BedKing 150x200", "price": "120", "quantity": "0", "type": "foods", "id": "58937" }, { "picture": "💎", "name": "SuperKing 180X200", "price": "120", "quantity": "0", "type": "foods", "id": "46555" }, { "picture": "💎", "name": "Hepa Filter", "price": "0", "quantity": "0", "type": "foods", "id": "61567" }, { "picture": "💎", "name": "Ikea jalka 20cm / kpl", "price": "6", "quantity": "6", "type": "foods", "id": "4141" }, { "picture": "💎", "name": "Ikea Hela kpl", "price": "4", "quantity": "8", "type": "foods", "id": "53392" }, { "picture": "💎", "name": "AF Advance Hiiriasema, vihreä", "price": "0", "quantity": "0", "type": "foods", "id": "86301" }, { "picture": "💎", "name": "Hiiriboksi, musta", "price": "0", "quantity": "0", "type": "foods", "id": "53977" }, { "picture": "💎", "name": "Tunneliasema, musta(101F)", "price": "0", "quantity": "0", "type": "foods", "id": "56466" }, { "picture": "💎", "name": "Tunneliasema, kirkas (102UV)", "price": "0", "quantity": "0", "type": "foods", "id": "60205" }, { "picture": "💎", "name": "Tunneliasema, hiiri", "price": "0", "quantity": "2", "type": "foods", "id": "2744" }, { "picture": "💎", "name": "EA704UV Rotta-asema \"EURO\"", "price": "0", "quantity": "10", "type": "foods", "id": "7116" }, { "picture": "💎", "name": "EA703F Rotta-asema \"EURO\"", "price": "0", "quantity": 10, "type": "foods", "id": "99586" }, { "picture": "💎", "name": "PL501F Rotta-asema", "price": "0", "quantity": "2", "type": "foods", "id": "9929" }, { "picture": "💎", "name": "Peltinen maa-asema", "price": "0", "quantity": "0", "type": "foods", "id": "5677" }, { "picture": "💎", "name": "Safeboc DUAL, isopelti", "price": "0", "quantity": "8", "type": "foods", "id": "50153" }, { "picture": "💎", "name": "TAV101F, seinäkiinnike", "price": "0", "quantity": "0", "type": "foods", "id": "2573" }, { "picture": "💎", "name": "Sovitepala loukulle, mini", "price": "0", "quantity": "0", "type": "foods", "id": "59536" }, { "picture": "💎", "name": "Snappa Rotta", "price": "0", "quantity": "0", "type": "foods", "id": "42162" }, { "picture": "💎", "name": "Snappa Hiiri", "price": "0", "quantity": "0", "type": "foods", "id": "92772" }, { "picture": "💎", "name": "Oravahäkki", "price": "0", "quantity": "0", "type": "foods", "id": "55850" }, { "picture": "💎", "name": "Puluhäkki", "price": "0", "quantity": "0", "type": "foods", "id": "48660" }, { "picture": "💎", "name": "RatOFF Block 5kg", "price": "0", "quantity": "1", "type": "foods", "id": "10217" }, { "picture": "💎", "name": "Racumin Vaahto", "price": "0", "quantity": "0", "type": "foods", "id": "10140" }, { "picture": "💎", "name": "Exittus", "price": "0", "quantity": "15", "type": "foods", "id": "74929" }, { "picture": "💎", "name": "Ratex", "price": "0", "quantity": "73", "type": "foods", "id": "2588" }, { "picture": "💎", "name": "Hiirivilla (1m)", "price": "0", "quantity": "4", "type": "foods", "id": "37991" }, { "picture": "💎", "name": "Tiilihiiri", "price": "0", "quantity": "0", "type": "foods", "id": "58849" }, { "picture": "💎", "name": "Hiirikampa/lista 1,25m", "price": "0", "quantity": "0", "type": "foods", "id": "84337" }, { "picture": "💎", "name": "Detex 4kg", "price": "0", "quantity": "0", "type": "foods", "id": "13096" }, { "picture": "💎", "name": "Provoke, pll", "price": "0", "quantity": "1", "type": "foods", "id": "5976" }, { "picture": "💎", "name": "Koisaferomoni", "price": "0", "quantity": "20", "type": "foods", "id": "11007" }, { "picture": "💎", "name": "Koiferomoni", "price": "0", "quantity": "10", "type": "foods", "id": "11671" }, { "picture": "💎", "name": "Kärpäslevy", "price": "0", "quantity": "2", "type": "foods", "id": "55131" }, { "picture": "💎", "name": "Kontrolliasema (kolmio)", "price": "0", "quantity": "0", "type": "foods", "id": "41162" }, { "picture": "💎", "name": "Liimalevy, pieni torakalle", "price": "0", "quantity": "0", "type": "foods", "id": "76945" }, { "picture": "💎", "name": "Ryömivienasema", "price": "0", "quantity": "0", "type": "foods", "id": "21094" }, { "picture": "💎", "name": "Xlure, asema", "price": "0", "quantity": "0", "type": "foods", "id": "6751" }, { "picture": "💎", "name": "Xlure, houkute", "price": "0", "quantity": "0", "type": "foods", "id": "91758" }, { "picture": "💎", "name": "Exosex", "price": "0", "quantity": "0", "type": "foods", "id": "90884" }, { "picture": "💎", "name": "Ampiashoukute, 1l", "price": "0", "quantity": "0", "type": "foods", "id": "26075" }, { "picture": "💎", "name": "Ampiashoukute, 5l", "price": "0", "quantity": "0", "type": "foods", "id": "36213" }, { "picture": "💎", "name": "Ampiasasema", "price": "0", "quantity": "0", "type": "foods", "id": "81045" }, { "picture": "💎", "name": "Vihreäkotelo", "price": "0", "quantity": "0", "type": "foods", "id": "98314" }, { "picture": "💎", "name": "Mustakotelo", "price": "0", "quantity": "0", "type": "foods", "id": "16638" }, { "picture": "💎", "name": "Pin Point, valkoinen pyöreä", "price": "0", "quantity": "0", "type": "foods", "id": "79084" }, { "picture": "💎", "name": "Baition D pölyte", "price": "0", "quantity": "0", "type": "foods", "id": "56471" }, { "picture": "💎", "name": "Biokill", "price": "0", "quantity": "0", "type": "foods", "id": "70702" }, { "picture": "💎", "name": "K-otherine  Partix 250ml", "price": "0", "quantity": "0", "type": "foods", "id": "93438" },
{ "picture": "💎", "name": "AquoPy 1l", "price": "0", "quantity": "0", "type": "foods", "id": "48572" },
{ "picture": "💎", "name": "Cooper 400ml", "price": "10", "quantity": "1", "type": "foods", "id": "9414" }, { "picture": "💎", "name": "Navetta radar", "price": "0", "quantity": "0", "type": "foods", "id": "78039" }, { "picture": "💎", "name": "Tuholaisspray", "price": "0", "quantity": "0", "type": "foods", "id": "34982" }, { "picture": "💎", "name": "BioKillExtra", "price": "0", "quantity": "30", "type": "foods", "id": "7252" }, { "picture": "💎", "name": "Ampiasvaahto", "price": "0", "quantity": "0", "type": "foods", "id": "39030" }, { "picture": "💎", "name": "Goljat Gel", "price": "0", "quantity": "0", "type": "foods", "id": "63970" }, { "picture": "💎", "name": "Advion Ant", "price": "0", "quantity": "90", "type": "foods", "id": "51449" }, { "picture": "💎", "name": "Advion Cockroach", "price": "0", "quantity": "59", "type": "foods", "id": "98073" }, { "picture": "💎", "name": "Verminix, 1kg", "price": "0", "quantity": "0", "type": "foods", "id": "95745" }, { "picture": "💎", "name": "Loxiran muurhaisbuffet", "price": "0", "quantity": "0", "type": "foods", "id": "67798" }, { "picture": "💎", "name": "Chirox 50g", "price": "0", "quantity": "0", "type": "foods", "id": "27052" }, { "picture": "💎", "name": "Parvoside 5l", "price": "0", "quantity": "0", "type": "foods", "id": "3432" }, { "picture": "💎", "name": "Sunburst", "price": "0", "quantity": "0", "type": "foods", "id": "48069" }, { "picture": "💎", "name": "I-Trap 50", "price": "0", "quantity": "0", "type": "foods", "id": "7166" }, { "picture": "💎", "name": "I-Trap 50, liimalevy", "price": "0", "quantity": "2", "type": "foods", "id": "60628" }, { "picture": "💎", "name": "15w putki", "price": "0", "quantity": "0", "type": "foods", "id": "14468" }, { "picture": "💎", "name": "Liimalevy, sunburst", "price": "0", "quantity": "0", "type": "foods", "id": "1525" }, { "picture": "💎", "name": "22W, pyöreä", "price": "0", "quantity": "0", "type": "foods", "id": "92371" }, { "picture": "💎", "name": "20w putki", "price": "0", "quantity": "0", "type": "foods", "id": "44554" }, { "picture": "💎", "name": "Tyvec", "price": "0", "quantity": "0", "type": "foods", "id": "94419" }, { "picture": "💎", "name": "Jätesäkki 240l, rll", "price": "10", "quantity": "1", "type": "foods", "id": "65906" }, { "picture": "💎", "name": "Teippi, sininen", "price": "7", "quantity": "1", "type": "foods", "id": "80005" }, { "picture": "🍓", "name": "Teippi, valkoinen", "price": "7", "quantity": "1", "type": "foods", "id": "9727" }, { "picture": "🍓", "name": "Suojamuovi, rll", "price": "0", "quantity": "0", "type": "foods", "id": "82355" }]

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

    if (items.find(item => item.name === body.name)) {
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
    items = items.map(item => item.id === id ? changedItem : item)

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