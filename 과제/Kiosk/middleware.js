import jwt from "jsonwebtoken";
import multer from "multer";
import cookie from "cookie";

export const authMiddleware = (req, res, next) => {
  const token = cookie.parse(req.headers.cookie);
  if (token === undefined) {
    return res.redirect("/admin/login");
  }
  jwt.verify(token.token, 'kiosk', (err) => {
    if (err) {
      console.log(err);
    } else {
      next();
    }
  });
};

