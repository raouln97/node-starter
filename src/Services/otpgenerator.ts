import otpGenerator from 'otp-generator';

const OTP_CONFIG = {
    upperCaseAlphabets: true,
    specialChars: false,
  }

export const generateOTP = () => {
    const OTP = otpGenerator.generate(6, OTP_CONFIG);
    return OTP;
};


// The OTP_LENGTH is a number, For my app i selected 10.
// The OTP_CONFIG is an object that looks like 
