import { PhotoOrientation } from './elementTypes';

export const determinePhotoOrientation = image => {
  const width = image.naturalWidth;
  const height = image.naturalHeight;
  let orientation = '';

  if (width > height) {
    orientation = PhotoOrientation.HORIZONAL;
  } else if (width === height) {
    orientation = PhotoOrientation.SQUARE;
  } else {
    orientation = PhotoOrientation.VERTICAL;
  }

  return orientation;
}