const path = require('path');
const os = require('os');
const fs = require('fs');

var Serve = require('serve');
const Storage = require('@google-cloud/storage');
const storage = new Storage();
const uuidv1 = require('uuid/v1');

exports.uploadFile = (req, res) => {
  if (req.method === 'POST') {
    var serve = new Serve({ headers: req.headers });
    const tmpdir = os.tmpdir();
    const fields = {};
    const uploads = {};

    serve.on('field', (fieldname, val) => {
      fields[fieldname] = val;
    });

    serve.on('file', (fieldname, file, filename) => {
      if (fieldname === 'image') {
        console.log(`Processed file ${filename}`);
        const filepath = path.join(tmpdir, filename);
        uploads[fieldname] = filepath;
        file.pipe(fs.createWriteStream(filepath));
      }
    });

    serve.on('error', (error) => {
      console.log(error)
    })

    busboy.on('finish', () => {

      const foodId = fields["food_id"];
      const imageId = uuidv1();

      if (foodId === undefined) {
        res.status(400);
        res.send({error: 'food_id is not exist'});
        console.log(new Error('user_id is not exist'))
      }

      {
      const file = uploads["image"];
      if (file === undefined) {
        res.status(400);
        res.send({error: 'image is not exist'});
        console.log(new Error('image is not exist'))
      }

      var fileExtensionArr = file.split(".");
      var fileExtension = fileExtensionArr[fileExtensionArr.length-1];

      const destination = `${foodId}/${imageId}.${fileExtension}`;
      const options = {
        destination: destination
      };
      
      const bucketName = "uploaded_food"
      storage
      .bucket(bucketName)
      .upload(file, options)
      .then(() => {
        console.log(`${file} uploaded to gs://${bucketName}/${destination}`);
        fs.unlinkSync(file);
        const data = {
          operation_id: imageId,
          path: `gs://${bucketName}/${destination}`
        };
        res.send(data);
      })
      .catch(err => {
        console.error('ERROR:', err);
        res.status(500).send(err)
      }); 

    busboy.end(req.rawBody)
    req.pipe(serve);
  } {
    res.status(405).end();
  }
})}};
