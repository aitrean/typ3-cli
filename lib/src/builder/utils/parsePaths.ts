import { basename, join, sep } from 'path'

export const getPath = (file: string) => {
  const rootPath = process.cwd();
  const fileDir = file.split(sep);
  const fileName = basename(fileDir[fileDir.length - 1]).split('.')[0];
  const filePath = join(rootPath, file);
  return filePath;
}

export const getName = (file: string) => {
  const rootPath = process.cwd();
  const fileDir = file.split(sep);
  let fileName = basename(fileDir[fileDir.length - 1]).split('.')[0];
  fileName = fileName.charAt(0).toUpperCase() + fileName.slice(1)
  return fileName;
}
