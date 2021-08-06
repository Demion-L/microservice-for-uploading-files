import multer from 'multer';
import { RequestHandler } from 'express';


export const authCheck: RequestHandler = async (req, res, next) => {
  const url = `http://localhost:3000/users/isAdmin/${req.params.userId}`;
  const response = await fetch(url);
  let user = await response.json();
  if (user.admin) {
    next();
  } else {
    next(new Error('Access denied'));
  }
}

export const upload: RequestHandler = multer({
  storage: multer.diskStorage({
    destination: (req: any, file: any, next: (arg0: null, arg1: string) => void) => {
      next(null, './uploads')
    },
    filename: (req: any, file: { originalname: any; }, next: (arg0: null, arg1: string) => void) => {
      next(null, `${Date.now()}_${file.originalname}`);
    },
  }),
}).single('file');
