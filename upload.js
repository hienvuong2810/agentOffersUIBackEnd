const fs = require('fs');
const service = require('./service.js');
const driver = service()
const uploadSingleFile = async (fileName, filePath) => {
  const folderId = '1QsheF3KShko-ZVsglOHBCHMKeKNwtUu1';
  const { data: { id, name } = {} } =  driver.files.create({
    resource: {
      name: fileName,
      parents: [folderId],
    },
    media: {
      mimeType: 'application/pdf',
      body: fs.createReadStream(filePath),
    },
    fields: 'id,name',
  });
  console.log('File Uploaded', name, id);
};


module.exports = uploadSingleFile;