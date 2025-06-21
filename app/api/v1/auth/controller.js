const { signin } = require("../../../services/mongoose/auth");
const { createOrganizer } = require("../../../services/mongoose/users");
const { StatusCodes } = require("http-status-codes");

const signinCMS = async (req, res, next) => {
  try {
    const result = await signin(req);

    res.status(StatusCodes.CREATED).json({
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const signupCMS = async (req, res, next) => {
  try {
    const result = await createOrganizer(req);

    res.status(StatusCodes.CREATED).json({
      data: result,
    });
  } catch (err) {
    next(err);
  }
};


module.exports = {
  signinCMS,
  signupCMS,
};