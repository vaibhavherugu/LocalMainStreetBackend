//VALIDATION
const Joi = require("@hapi/joi");

const registerValidation = (req) => {
  const schema = Joi.object({
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required(),
    fname: Joi.string().min(1).required(),
    lname: Joi.string().min(1).required(),
  });
  return schema.validate(req);
};

const LoginValidation = (req) => {
  const schema = Joi.object({
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required(),
  });
  return schema.validate(req);
};

const BusinessValidation = (req) => {
  const schema = Joi.object({
    emailb: Joi.string().min(6).required().email(),
    passwordb: Joi.string().min(6).required(),
    fnameb: Joi.string().min(1).required(),
    lnameb: Joi.string().min(1).required(),
    bname: Joi.string().min(1).required(),
    description: Joi.string().min(150).max(1000).required(),
    address: Joi.string().min(3).required(),
    phoneNumber: Joi.string().min(3).required(),
    paymentMethod: Joi.string().required(),
  });
  return schema.validate(req);
};

const contactValidation = (req) => {
  const schema = Joi.object({
    name: Joi.string().min(1).required(),
    emailc: Joi.string().min(6).required().email(),
    message: Joi.string().min(6).required(),
  });
  return schema.validate(req);
};

module.exports.registerValidation = registerValidation;
module.exports.LoginValidation = LoginValidation;
module.exports.BusinessValidation = BusinessValidation;
module.exports.contactValidation = contactValidation;
