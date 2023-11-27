const requestModel = require("../../Model/request.model");
const quoteRequest = async (req, res) => {
  console.log("request", req.body);
  const { firstName, lastName, email, phoneNumber, message } = req.body;
  const missingFields = [];
  //   checking missing fields
  if (!firstName) missingFields.push("firstName");
  if (!lastName) missingFields.push("lastName");
  if (!email) missingFields.push("email");
  if (!phoneNumber) missingFields.push("phoneNumber");
  if (!message) missingFields.push("message");

  if (missingFields.length > 0) {
    const error = missingFields.reduce((acc, current) => {
      acc[current] = `The ${current} field is required`;
      return acc;
    }, {});

    res.status(422).json({
      //invalid entry
      status: false,
      message: error,
    });
  } else {
    try {
      const registerQuote = new requestModel({
        firstName,
        lastName,
        email,
        phoneNumber,
        message,
      });
      const saveData = await registerQuote.save();
      console.log(saveData);
      return res.status(200).json({
        status: true,
        message: "Request registered successfully please check your email",
      });
    } catch (error) {
      console.log(error?._message);
      res.status(500).json({
        status: false,
        message: error?._message,
      });
    }
  }
};

module.exports = {
  quoteRequest,
};
