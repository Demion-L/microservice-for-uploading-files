import { getModelForClass, prop } from '@typegoose/typegoose';

export class File {
  @prop()
  public name: string | undefined;

  @prop()
  public path: string | undefined;

  @prop()
  public type: string | undefined;
}

export const FileModel = getModelForClass(File);