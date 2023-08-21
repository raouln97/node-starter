// import jwt from "jsonwebtoken";
// import { config } from "../auth.config";

// verifyToken = (req, res, next) => {
//     let token = req.session.token;
  
//     if (!token) {
//       return res.status(403).send({ message: "No token provided!" });
//     }
  
//     jwt.verify(token,
//               config.secret,
//               (err: any, decoded: { id: any; }) => {
//                 if (err) {
//                   return res.status(401).send({
//                     message: "Unauthorized!",
//                   });
//                 }
//                 req.userId = decoded.id;
//                 next();
//               });
//   };

// import jwt from "jsonwebtoken";

// module.exports = (req: any, res: any, next: any) => {
//     try {
//         const token = req.header("x-auth-token");
//         if (!token) return res.status(403).send("Access denied.");

//         const decoded = jwt.verify(token, process.env.JWTPRIVATEKEY);
//         req.user = decoded;
//         next();
//     } catch (error) {
//         res.status(400).send("Invalid token");
//     }
// };

import * as express from "express";
import * as jwt from "jsonwebtoken";
import { config } from "../auth.config";

export function expressAuthentication(
  request: express.Request,
  securityName: string,
  scopes?: string[]
): Promise<any> {
  if (securityName === "api_key") {
    let token;
    if (request.query && request.query.access_token) {
      token = request.query.access_token;
    }

    if (token === "abc123456") {
      return Promise.resolve({
        id: 1,
        name: "Ironman",
      });
    } else {
      return Promise.reject({});
    }
  }

  if (securityName === "jwt") {
    const token =
      request.body.token ||
      request.query.token ||
      request.headers["authorization"];

    return new Promise((resolve, reject) => {
      if (!token) {
        reject(new Error("No token provided"));
      }
      jwt.verify(token, config.secret, function (err: any, decoded: any) {
        if (err) {
          reject(err);
        } else {
          // Check if JWT contains all required scopes
          for (let scope of scopes) {
            if (!decoded.role.includes(scope)) {
              reject(new Error("JWT does not contain required scope."));
            }
          }
          resolve(decoded);
        }
      });
    });
  }
}