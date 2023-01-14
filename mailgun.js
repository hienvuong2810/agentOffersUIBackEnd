const formData = require('form-data');
const Mailgun = require('mailgun.js');
const mailgun = new Mailgun(formData);
const mg = mailgun.client({username: process.env.user, key: process.env.key});
const fs = require('fs')

const sendMail = (data) => {
  mg.messages.create('mail.seandz.com', {
    from: "care@futurebuildershomes.com",
    to: ["hienvuong2810@gmail.com"], // Only for testing, update later
    subject: "Future Builder Offer", // Not yet get subjet email
    text: "Hello,\nPlease see my attached all cash offer. Buyer shall pay all closing costs. Listing agent may dual represent both sides and receive a double commission.\nPlease add me to your contacts as a buyer! We buy anywhere that's not rural. Single and MultiFamily (including large complexes) are our target acquisition types.\nBlessings!\nSean Dezoysa",
    attachment: [{
      filename: data,
      data: fs.readFileSync(`./${data}`)
    }]
  })
  .then(msg => console.log(msg)) 
  .catch(err => console.error(err)); 
}

module.exports = sendMail