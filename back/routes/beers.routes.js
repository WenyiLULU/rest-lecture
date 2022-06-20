const Beer = require('../models/Beer.model')

const router = require('express').Router()

// Get all the beers
router.get('/', async (req, res, next) => {
  const beers = await Beer.find()
  res.json(beers)
})

// Get one specific beer
router.get('/:beerId', async (req, res, next) => {
  const { beerId } = req.params

  const beer = await Beer.findById(beerId)
  res.json(beer)
})

// Create a new beer
router.post('/', async (req, res, next) => {
  const { name, tagline, volume } = req.body
  try {
    const beer = await Beer.create({
      name: name.trim(),
      tagline: tagline.trim(),
      volume: parseFloat(volume),
    })
    console.log(beer)

    res.status(201).json({ message: 'New beer created', id: beer.id })
  } catch (error) {
    res.status(500).json(error)
  }
})

// Update an existing beer
router.put('/:beerId', async (req, res, next) => {
  const { beerId } = req.params
  const { name, tagline, volume } = req.body

  const newData = {}

  if (name !== '') {
    newData.name = name.trim()
  }

  if (tagline !== '') {
    newData.tagline = tagline.trim()
  }

  if (volume !== '0') {
    newData.volume = parseFloat(volume)
  }

  try {
    const beer = await Beer.findByIdAndUpdate(beerId, newData)
    res.status(200).json({ message: 'Beer updated', id: beer.id })
  } catch (error) {
    res.status(500).json(error)
  }
})

// Delete a beer
router.delete('/:beerId', async (req, res, next) => {
  const { beerId } = req.params

  await Beer.findByIdAndDelete(beerId)
  res.status(200).json({ message: 'Beer deleted' })
})

// You put the next routes here 👇
// example: router.use("/auth", authRoutes)

module.exports = router
