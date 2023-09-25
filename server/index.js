const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.use(express.json());

// const { getCompliment } = require('./controller')

let data = [
  {
    "id": 1,
    "type": "riches",
    "votes": 0,
    "fortune": "You will become wealthier than the queen of england in 20 years."
  },
      {
    "id": 2,
    "type": "riches",
    "votes": 0,
    "fortune": "You will inherit 20 horses from an unknown uncle"

  },

      {
    "id": 3,
    "type": "riches",
    "votes": 0,
    "fortune": "You will retire with more money than Bill Gates."

  },
    {
    "id": 4,
    "type": "riches",
    "votes": 0,
    "fortune": "You will aqcuire more bitcoin than anyone in your state."

  },
      {
    "id": 5,
    "type": "education",
    "votes": 0,
    "fortune": "You will become the most educated person in the town you live."

  },
      {
    "id": 6,
    "type": "education",
    "votes": 0,
    "fortune": "You will be remembered for your intellect above all else."

  },
      {
    "id": 7,
    "type": "education",
    "votes": 0,
    "fortune": "You will write several best selling books in 10 years."

  },
      {
    "id": 8,
    "type": "education",
    "votes": 0,
    "fortune": "You will become well respected for your knowledge of programming."

  },
    {
    "id": 9,
    "type": "education",
    "votes": 0,
    "fortune": "Your son will graduate from Harvard."

  },
      {
    "id": 10,
    "type": "career",
    "votes": 0,
    "fortune": "You will be well respected by peers in your career of choice."

  },
        {
    "id": 11,
    "type": "family",
    "votes": 0,
    "fortune": "Your child will win the lottery in the future."

  },
          {
    "id": 12,
    "type": "family",
    "votes": 0,
    "fortune": "Your child will become a pro athlete."

  },
        {
    "id": 13,
    "type": "family",
    "votes": 0,
    "fortune": "Your son will graduate from Harvard."

  },
      {
    "id": 14,
    "type": "random",
    "votes": 0,
    "fortune": "Elon Musk will become your BFF in the future."
    },
          {
    "id":15,
    "type": "random",
    "votes": 0,
    "fortune": "You discover that you can sing really well."
    },
          {
    "id": 16,
    "type": "random",
    "votes": 0,
    "fortune": "You will become famous by the year 2040"
          },
          {
    "id": 17,
    "type": "riches",
    "votes": 0,
    "fortune": "You will win the lottery through mysterious circumstances."

  },   {
    "id": 18,
    "type": "career",
    "votes": 0,
    "fortune": "You will love your career."

  },  {
    "id": 19,
    "type": "powers",
    "votes": 0,
    "fortune": "You discover you can fly."

  },  {
    "id": 20,
    "type": "powers",
    "votes": 0,
    "fortune": "You discover you can become invisible."

  },  
  {
    "id": 21,
    "type": "powers",
    "votes": 0,
    "fortune": "You discover you can read peoples minds."

  },
    {
    "id": 22,
    "type": "powers",
    "votes": 0,
    "fortune": "You discover you can control time."

  },
    {
    "id": 23,
    "type": "powers",
    "votes": 0,
    "fortune": "You discover you can run faster the Usain Bolt."

  },
]

app.delete('/api/:id', (req, res) =>{
   console.log(req.params, req.body)
   const filterIt = data.filter(res => res.id !== Number(req.params.id))
   data = filterIt
   res.status(200).send(filterIt)
})


app.get("/api/compliment", (req, res) => {
    const shuffledArray = data.sort((a, b) => 0.5 - Math.random());
    const first = shuffledArray[0]
    const second = shuffledArray[1]
    both = [first, second]
    res.status(200).send(both);
})


app.put('/api/:id', (req, res) => {
    // console.log(req.params, req.body)
    const filterIt = data.filter(item => item.id === Number(req.params.id))
    const filterIt2 = filterIt[0]
    filterIt2.votes += req.body.votes
    res.status(200).send(filterIt2)
})


app.post('/api', (req, res)=>{
  console.log(req.params, req.body)
  let addItem = {
      "id": data.length + 1,
      "type": "random",
      "votes": 0,   
      "fortune": req.body.fortune
    }
  console.log(addItem)
  data.push(addItem)
  console.log(data)
  res.status(200).send("ok")
})


app.get("/api/data", (req, res) =>{
  res.status(200).send(data)
})


app.listen(4000, () => console.log("Server running on 4000"));
// Horse1986!