module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["You will become wealthier than the queen of england in 20 years.", "You will become the most educated person in the town you live.", "Your spouse will die of an unknown disease",  "You will inherit 20 horses from an unknown uncle", "Your dog will get runover in the near future", "You will become a top political candidate for your party of choice",  "You will become skilled in your profession", "Your spouse will find out they are adopted in the future", "Elon Musk will become your BFF in the future", "You will retire with more money than Bill Gates", "Your son will win the lottery in the future", "You will become famous by the year 2040"];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    }

}

