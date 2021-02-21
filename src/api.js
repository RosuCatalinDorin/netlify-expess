const express = require("express");
const serverless = require("serverless-http");
const cors = require('cors')

const app = express();
const router = express.Router();

const data = {
  products: [
    {
      title: "Tavita cafea",
      description: "Tavita cafea personalzata bla bla bla bbla bla bla bla bla",
      id: "22",
      img: "https://firebasestorage.googleapis.com/v0/b/redwoodstore-1613483240446.appspot.com/o/tavaCafea.jpeg?alt=media&token=ca99a697-aa77-43bf-8600-2391a1a332ff"
    },
    {
      title: "Litere de lemn ",
      description: "Litere de lemn de fag bbla bla bla bla bla bbla bla bla bla bla ",
      id: "22",
      img: "https://firebasestorage.googleapis.com/v0/b/redwoodstore-1613483240446.appspot.com/o/WhatsApp%20Image%202021-02-06%20at%2019.58.08.jpeg?alt=media&token=1d74f2a9-742d-4771-b8b5-1634c2dc35ef"
    },
    {
      title: "Decoratiuni perete",
      description: "Tavita cafea personalzata bla bla bla bbla bla bla bla bla",
      id: "22",
      img: "https://firebasestorage.googleapis.com/v0/b/redwoodstore-1613483240446.appspot.com/o/WhatsApp%20Image%202021-02-12%20at%2008.20.37.jpeg?alt=media&token=34f6db3d-5ae8-408c-abb4-e76304bbb30d"
    },
    {
      title: "Suport telefon lemn masiv",
      description: "Tavita cafea personalzata bla bla bla bbla bla bla bla bla",
      id: "22",
      img: "https://firebasestorage.googleapis.com/v0/b/redwoodstore-1613483240446.appspot.com/o/WhatsApp%20Image%202021-02-02%20at%2013.06.20.jpg?alt=media&token=2bbc3573-921f-4c01-b848-3cdbffa01e6d"
    },
    {
      title: "Suport telefon lemn masiv",
      description: "Tavita cafea personalzata bla bla bla bbla bla bla bla bla",
      id: "22",
      img: "https://firebasestorage.googleapis.com/v0/b/redwoodstore-1613483240446.appspot.com/o/WhatsApp%20Image%202021-02-02%20at%2013.06.20.jpg?alt=media&token=2bbc3573-921f-4c01-b848-3cdbffa01e6d"
    },
    {
      title: "Suport telefon lemn masiv",
      description: "Tavita cafea personalzata bla bla bla bbla bla bla bla bla",
      id: "22",
      img: "https://firebasestorage.googleapis.com/v0/b/redwoodstore-1613483240446.appspot.com/o/WhatsApp%20Image%202021-02-02%20at%2013.06.20.jpg?alt=media&token=2bbc3573-921f-4c01-b848-3cdbffa01e6d"
    },
    {
      title: "Suport telefon lemn masiv",
      description: "Tavita cafea personalzata bla bla bla bbla bla bla bla bla",
      id: "22",
      img: "https://firebasestorage.googleapis.com/v0/b/redwoodstore-1613483240446.appspot.com/o/WhatsApp%20Image%202021-02-02%20at%2013.06.20.jpg?alt=media&token=2bbc3573-921f-4c01-b848-3cdbffa01e6d"
    },
    {
      title: "Suport telefon lemn masiv",
      description: "Tavita cafea personalzata bla bla bla bbla bla bla bla bla",
      id: "22",
      img: "https://firebasestorage.googleapis.com/v0/b/redwoodstore-1613483240446.appspot.com/o/WhatsApp%20Image%202021-02-02%20at%2013.06.20.jpg?alt=media&token=2bbc3573-921f-4c01-b848-3cdbffa01e6d"
    },
    {
      title: "Suport telefon lemn masiv",
      description: "Tavita cafea personalzata bla bla bla bbla bla bla bla bla",
      id: "22",
      img: "https://firebasestorage.googleapis.com/v0/b/redwoodstore-1613483240446.appspot.com/o/WhatsApp%20Image%202021-02-02%20at%2013.06.20.jpg?alt=media&token=2bbc3573-921f-4c01-b848-3cdbffa01e6d"
    },
    {
      title: "Suport telefon lemn masiv",
      description: "Tavita cafea personalzata bla bla bla bbla bla bla bla bla",
      id: "22",
      img: "https://firebasestorage.googleapis.com/v0/b/redwoodstore-1613483240446.appspot.com/o/WhatsApp%20Image%202021-02-02%20at%2013.06.20.jpg?alt=media&token=2bbc3573-921f-4c01-b848-3cdbffa01e6d"
    },
    {
      title: "Suport telefon lemn masiv",
      description: "Tavita cafea personalzata bla bla bla bbla bla bla bla bla",
      id: "22",
      img: "https://firebasestorage.googleapis.com/v0/b/redwoodstore-1613483240446.appspot.com/o/WhatsApp%20Image%202021-02-02%20at%2013.06.20.jpg?alt=media&token=2bbc3573-921f-4c01-b848-3cdbffa01e6d"
    }
  ]
};


// Set up a whitelist and check against it:
var whitelist = ['https://fervent-mcnulty-b51de2.netlify.app', 'http://example2.com']
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

// Then pass them to cors:
app.use(cors(corsOptions));

router.get("/", (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.json({
    app:"ReactWoodStoreAPI"
  });
});


router.get("/getProducts", (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.json(data);
});


app.use(`/.netlify/functions/api`, router);

module.exports = app;
module.exports.handler = serverless(app);
