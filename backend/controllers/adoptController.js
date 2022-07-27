const Person = require('../models/personModel');
const Pet = require('../models/petModel');

//@description: Get all the pets
//@route: GET /api/adopt/pets
//@access: Public
const getPets = async (req, res) => {
  try {
    const pets = await Pet.find();
    res.status(200).json(pets);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//@description: Post a new animal
//@route: POST /api/adopt/pets
//@access: Public
const postPet = async (req, res) => {
  console.log(req.body);
  const pet = req.body;
  try {
    const newPet = await Pet.create(pet);
    res.status(201).json(newPet);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//@description: Apply for adoption
//@route: POST /api/adopt/pets/:id/apply
//@access: Public
const applyForAdoption = async (req, res) => {
  const person = req.body;
  try {
    // const pet = await Pet.findById(id);
    // if (!pet) {
    //   return res.status(404).json({ message: 'Pet not found' });
    // }
    const newPerson = await Person.create(person);
    res.status(201).json(pet);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { getPets, postPet, applyForAdoption };
