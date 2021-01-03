const express = require("express");
const { check } = require("express-validator");

const phonesControllers = require("../controllers/phones-controllers");

const router = express.Router();

router.get("/phones", phonesControllers.getPhonesList);

router.post(
  "/",
  [
    check("name").not().isEmpty(),
    check("description").isLength({ min: 10 }),
    check("manufacturer").not().isEmpty(),
    check("price").not().isEmpty(),
    check("processor").not().isEmpty(),
    check("ram").not().isEmpty(),
    check("screen").not().isEmpty(),
    check("color").not().isEmpty(),
    check("imageFileName").not().isEmpty(),
  ],
  phonesControllers.addPhone
);

router.patch(
  "/:pid",
  [
    check("name").not().isEmpty(),
    check("description").isLength({ min: 10 }),
    check("manufacturer").not().isEmpty(),
    check("price").not().isEmpty(),
    check("processor").not().isEmpty(),
    check("ram").not().isEmpty(),
    check("screen").not().isEmpty(),
    check("color").not().isEmpty(),
    check("imageFileName").not().isEmpty(),
  ],
  phonesControllers.updatePhone
);

router.delete("/:pid", phonesControllers.deletePhone);

module.exports = router;
