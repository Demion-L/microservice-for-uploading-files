import { File, FileModel } from './file.model';
import { LIMIT } from '../config/config';

  export const getFiles = async (page: number = 1) => {
    return FileModel
      .find({})
      .skip((page - 1) * LIMIT)
      .limit(LIMIT);
  }
  export const create = async (name: string, path: string, type: string) => {
    return await FileModel.create({
      name,
      path,
      type,
      createdAt: new Date()
    } as File);
  }
