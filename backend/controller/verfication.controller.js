const nodemailer = require("nodemailer");
//var springedge = require("springedge");
const fast2sms = require("fast-two-sms");

const transporter = nodemailer.createTransport({
  host: "smtp.zoho.in",
  port: 465,
  auth: {
    user: "connect@healthko.in",
    pass: "Connet@110059",
  },
});

exports.verifyEmail = async (req, res) => {
  try {
    const { email } = req.body;

  const info = await transporter.sendMail({
    from: 'connect@healthko.in', // sender address
    to: email, // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello!! www.google.com", // plain text body
    html: "<b>verify yourself <a href = 'www.google.com>click here</a></b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  res.json({success: true, message: info});
  } catch (error) {
    console.log(error)
  }
};

function generateOTP(length) {
  const charset = "0123456789";
  let OTP = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    OTP += charset[randomIndex];
  }

  return OTP;
}


exports.verifyPhone = async (req, res) => {
  try {
    const { phone } = req.body;
    console.log(phone);

    const otp = generateOTP(4);

    var params = {
      sender: "SEDEMO",
      apikey: "6on957rb36978j0rl148a6j226v03jmr",
      to: [phone],
      message: `Hello ${otp}, This is a test message from spring edge.`,
      format: "json",
    };
  
    springedge.messages.send(params, 5000, function (err, response) {
      if (err) {
        console.log(err);
        return res.json({
                    success: true,
                    data: { otp: otp },
                    message: err,
                  });
      }
      return res.json({
        success: true,
        data: { otp: otp },
        message: response,
      });
    });
  } catch (error) {}
};



// exports.verifyPhone = async (req, res) => {
//   try {
//     const { phone } = req.body;
//     console.log(phone);

//     const otp = generateOTP(4);

//     var options = {
//       authorization:
//         "rg8WWOptxs1zGmdYbtwicJsJGa7GFy2ftLUAWmWEKndeUiwEBCQO2k8OYEMw",
//       message: "This is Verfification Code Message of Your OTP Code is: " + otp,
//       numbers: [phone],
//     };

//     awaitfast2sms
//       .sendMessage(options)
//       .then((response) => {
//         console.log(response);
//         return res.json({
//           success: true,
//           data: { otp: otp },
//           message: response.message,
//         });
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   } catch (error) {}
// };
