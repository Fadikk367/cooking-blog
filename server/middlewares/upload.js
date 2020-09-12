const aws = require('aws-sdk');
const multerS3 = require('multer-s3');
const multer = require('multer');
const path = require('path');

const s3 = new aws.S3({
  accessKeyId: 'AKIAWNXPIC2KFHS2QYEV',
  secretAccessKey: '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',
  Bucket: 'fadikktestbucket'
});




const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: 'fadikktestbucket',
    acl: 'public-read',
    key: (req, file, cb) => {
      cb(
        null, 
        path.basename(
          file.originalname, 
          path.extname(file.originalname)) 
          + '-' 
          + Date.now() 
          + path.extname(file.originalname)
      );
    }
  }),
  // limits: { fileSize: 2000000 },
  // fileFilter: (req, file, cb) => {
  //   checkFileType(file, cb);
  // }
});


const checkFileType = (file, cb) => {
  const fileTypes = /jpeg|jpg|png|gif/;
  const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = fileTypes.test(file.mimetype);
  if (mimetype && extname) {
    return cb(null, true);
  } else {
    cb('ERROR: Images only!!!');
  }
}

module.exports = upload;