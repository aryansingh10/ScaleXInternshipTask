const Pair = require('../models/priceData.js');


 const getPairs = async (req, res, next) => {
  try {
    const pairs = await Pair.find();
    res.status(200).json(pairs);
  } catch (error) {
    next(error);
  }
};

const getPairById = async (req, res, next) => {
  try {
    const pair = await Pair.findById(req.params.id);
    if (!pair) {
      return res.status(404).json({ message: 'Pair not found' });
    }
    res.status(200).json(pair);
  } catch (error) {
    next(error);
  }
};


 const createPair = async (req, res, next) => {
  const pair = new Pair(req.body);

  try {
    const savedPair = await pair.save();
    res.status(201).json(savedPair);
  } catch (error) {
    next(error);
  }
};


 const updatePair = async (req, res, next) => {
  const { id } = req.params;

  try {
    const updatedPair = await Pair.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedPair) {
      return res.status(404).json({ message: 'Pair not found' });
    }
    res.status(200).json(updatedPair);
  } catch (error) {
    next(error);
  }
};


 const deletePair = async (req, res, next) => {
  const { id } = req.params;

  try {
    const deletedPair = await Pair.findByIdAndDelete(id);
    if (!deletedPair) {
      return res.status(404).json({ message: 'Pair not found' });
    }
    res.status(200).json({ message: 'Pair deleted successfully' });
  } catch (error) {
    next(error);
  }
};

module.exports = {
    getPairs,
    getPairById,
    createPair,
    updatePair,
    deletePair
  };