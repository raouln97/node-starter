import { config } from "../auth.config";
import { userData } from "../../Model/data-model";
import { ForgotPasswordDTORes, SignInRes, UserDtoRes } from "./user.dto";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { generateOTP } from "../Services/otpgenerator";
import { sendMail } from "../Services/nodemailer";

export class Authenticationservice {
  public async signUp(
    userCredentials: UserDtoRes
  ): Promise<any> {
    try {
      const hasAccount = await userData.findOne({userName: userCredentials.userName})
      if(hasAccount){
        return "Account with this username already exists"
      }
      const hashedCredentials = {userName: userCredentials.userName,email: userCredentials.email, password: bcrypt.hashSync(userCredentials.password), roles: userCredentials.roles}
      return await userData.create(hashedCredentials);
    } catch (error) {
      console.error("User not created", error);
      return null;
    }
  }

  public async signIn(
    userCredentials: SignInRes,
  ): Promise<any> {
      const user = await userData.findOne({userName: userCredentials.userName});
      if (!user) {
        return 'user Not Found'
      }
      var passwordIsValid = bcrypt.compareSync(
        userCredentials.password,
        user.password
      );
      if (!passwordIsValid) {
        return "Invalid Password!"
      }
      const token = jwt.sign({ id: user.id, role: user.roles },
        config.secret,
        {
          algorithm: 'HS256',
          allowInsecureKeySizes: true,
          expiresIn: 86400, // 24 hours
        });

        return token;
  }

  public async forgotPassword(userCredentials: ForgotPasswordDTORes){
    const user = await userData.findOne({userName: userCredentials.userName});
    if (!user) {
      return 'user Not Found'
    }
    const otpGenerated = generateOTP()
    await userData.findOneAndUpdate({otp: otpGenerated})

    try {
      await sendMail({
        user: user.email,
        otp: otpGenerated,
      });
      return "email sent";
    } catch (error) {
      return ['Unable to sign up, Please try again later', error];
    }
    
    
  }

}
