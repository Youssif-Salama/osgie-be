import nodemailer from "nodemailer";
import env from "dotenv";
env.config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EmailUser,
    pass: process.env.EmailPass,
  },
});


export const sendEmail = () => {
  return async(req,res,next)=>{
    await transporter.sendMail({
      from: "yrjo0002@gmail.com",
      to:req.body.Email,
      subject:"Auto Email",
      text:"some text",
    });
    next()
  }
}


export const senMailFun=async(to)=>{
  await transporter.sendMail({
    from: process.env.EmailUser,
    to,
    subject:"Auto Email",
    text:"some text",
  });
}