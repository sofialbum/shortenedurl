const Url = require("./../models/urlModel");
const { customAlphabet } = require("nanoid");
const alphabet = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const uuidCreator = customAlphabet(alphabet, 5);

exports.createUrl = async (req, res) => {
  const { userLongUrl } = req.body;
  
  const uuid = uuidCreator();

  try {
    await Url.create({ userLongUrl, uuid });

    res.status(201).json({
      status: "success",
      id: uuid,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

exports.getLongUrl = async (req, res) => {
  try {
    const { userLongUrl } = await Url.findOne({uuid: req.params.id});
    // Url.findOne({_id: req.params.id})

    res.status(200).json({
      status: "success",
      userLongUrl
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
}


 