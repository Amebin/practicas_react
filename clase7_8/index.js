import express from 'express'

const app = express()
const giftcards_data = [
    {
      "id": 1,
      "title": "Amazon prime video",
      "price": 3000,
      "image": "https://http2.mlstatic.com/D_NQ_NP_617413-MLA44837227390_022021-V.jpg"
    },
    {
      "id": 2,
      "title": "Netflix",
      "price": 5000,
      "image": "https://cheapestgamecards.com/pi/netflix-gift-card-20-usd-42048.png"
    },
    {
      "id": 3,
      "title": "Youtube premiun",
      "price": 4000,
      "image": "https://http2.mlstatic.com/D_NQ_NP_813482-MLU43746816524_102020-O.jpg"
    }
  ]

app.get('/giftcards', (req, res) => {
    res.status(200).send({ data: giftcards_data})
})

app.listen(5000, () => {
    console.log('back initied en el 5k pa')
})