const { validationResult } = require("express-validator");
const mongoose = require("mongoose");

const HttpError = require("../models/http-error");
const Phone = require("../models/phones");

const getPhonesList = async (req, res, next) => {
  let phones;
  try {
    phones = await Phone.find();
  } catch (err) {
    const error = new HttpError(
      "Fetching phones failed, please try again later",
      500
    );
    return next(error);
  }

  if (!phones || phones.length === 0) {
    return next(
      new HttpError("Could not find phones for the provided user id.", 404)
    );
  }

  res.json({
    phones: phones.map((phone) => phone.toObject({ getters: true })),
  });
};

const addPhone = async (req, res, next) => {
  const {
    name,
    price,
    description,
    manufacturer,
    ram,
    processor,
    imageFileName,
    color,
    screen,
  } = req.body.phone;

  const createdPhone = new Phone({
    name,
    price,
    description,
    manufacturer,
    ram,
    processor,
    imageFileName,
    color,
    screen,
  });

  try {
    await createdPhone.save();
  } catch (err) {
    const error = new HttpError(
      "Creating phone failed, please try again.",
      500
    );
    return next(error);
  }

  res.status(201).json(createdPhone);
};

const updatePhone = async (req, res, next) => {
  const {
    name,
    price,
    description,
    manufacturer,
    ram,
    processor,
    imageFileName,
    color,
    screen,
  } = req.body.phone;
  const phoneId = req.params.pid;

  let phone;
  try {
    phone = await Phone.findById(phoneId);
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not update place.",
      500
    );
    return next(error);
  }

  phone.name = name;
  phone.manufacturer = manufacturer;
  phone.description = description;
  phone.price = price;
  phone.ram = ram;
  phone.processor = processor;
  phone.imageFileName = imageFileName;
  phone.color = color;
  phone.screen = screen;

  try {
    await phone.save();
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not update phone.",
      500
    );
    return next(error);
  }

  res.status(200).json({ phone: phone.toObject({ getters: true }) });
};

const deletePhone = async (req, res, next) => {
  const phoneId = req.params.pid;

  let phone;
  try {
    phone = await Phone.findById(phoneId).populate("creator");
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not delete phone.",
      500
    );
    return next(error);
  }

  if (!phone) {
    const error = new HttpError("Could not find phone for this id.", 404);
    return next(error);
  }

  try {
    await phone.remove();
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not delete phone.",
      500
    );
    return next(error);
  }

  res.status(200).json({ message: "Deleted phone." });
};

exports.getPhonesList = getPhonesList;
exports.addPhone = addPhone;
exports.updatePhone = updatePhone;
exports.deletePhone = deletePhone;
