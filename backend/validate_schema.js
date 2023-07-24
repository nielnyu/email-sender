const Joi = require("joi")

const authSchema = Joi.object({
    emailAddress: Joi.string().email().required()
})

module.exports = {
    authSchema,
}