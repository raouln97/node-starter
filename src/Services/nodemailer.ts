import { EmailOtpDto } from "./nodemailer.dto";
import nodemailer from "nodemailer";

const Mail_Settings ={
    user: "services.booking.2023@gmail.com",
    pass: "rrfswmjcjhxlxuex"
}
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: Mail_Settings.user,
      pass: Mail_Settings.pass,
    },
  },);
  
  export const sendMail = async (params: EmailOtpDto) => {
    try {
      let info = await transporter.sendMail({
        from: Mail_Settings.user,
        to: params.user, 
        subject: 'Hello ✔',
        html: `
        <div
          class="container"
          style="max-width: 90%; margin: auto; padding-top: 20px"
        >
          <h2>Welcome to the club.</h2>
          <h4>You are officially In ✔</h4>
          <p style="margin-bottom: 30px;">Pleas enter the sign up OTP to get started</p>
          <h1 style="font-size: 40px; letter-spacing: 2px; text-align:center;">${params.otp}</h1>
     </div>
      `,
      });
      return info;
    } catch (error) {
      console.log(error);
      return false;
    }
  };