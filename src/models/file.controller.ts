import { Request, Response } from 'express';
import {create, getFiles} from './file.service';



export const upload = async (req: Request, res: Response) => {
    if (!req.file)
      return res.status(403).send('No file');
    const {
      originalname,
      path,
      mimetype
    } = req.file;
    await create(originalname, path, mimetype);
    return res.status(202).send('Created');
  }

export const getAll = async (req: Request, res: Response)  => {
    const page = parseInt(req.params.page);
    if (page < 1) return res.sendStatus(403);
    return res.status(200).send(await getFiles(page));
  };

