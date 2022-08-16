// Get the name of folder project
import * as nodePath from "path";
const rootFolder = nodePath.basename(nodePath.resolve()); // get name of project

const buildFolder = "./dist"; // path for folder with result // also we can use rootFolder
const srcFolder = "./src"; // path for folder with sources

// all information about the path specific file or folder
export const path = {
  build: {
    files: `${buildFolder}/files/`,
  }, // result
  src: {
    files: `${srcFolder}/files/**/*.*`,
  }, // original
  watch: {
    files: `${srcFolder}/files/**/*.*`,
  }, // folders and files need to watch for gulp
  clean: buildFolder,
  buildFolder: buildFolder,
  srcFolder: srcFolder,
  ftp: ``,
};
