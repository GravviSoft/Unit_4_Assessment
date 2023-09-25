
const resetBtn = document.querySelector("#resetButton")
const fortuneCookie = document.querySelector(".changing")
const cookieimg = document.querySelector(".cookieimg")
const fortuneCookie2 = document.querySelector(".changing2")
const playBtn = document.querySelector("#playButton")
const voteDiv = document.querySelector(".vtbtn-1")
const votebtn = document.querySelector("#votebtn")
const votebtn2 = document.querySelector("#votebtn2")
const scoreVotesText = document.querySelector(".votes")
const scoreVotes2Text = document.querySelector(".votes2")
const deleteText = document.querySelector(".delete")
const delete2Text = document.querySelector(".delete2")



const baseURL = "http://localhost:4000";


const itemListId = []



const getCompliment = () => {
    itemListId.length = 0;
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            console.log(data)

            itemListId.push(data[0].id)
            itemListId.push(data[1].id)

        fortuneCookie.innerHTML = `
      <section id="cards" class="cards">
        <div class="fc-fortune">
          <p class="fc-fortune-text">${data[0].fortune}</p>
        </div> 
      </section>

      `
      deleteText.innerHTML = `<p class="delete"><button id="delete" name="0"><i class="fa fa-trash" aria-hidden="true"></i></button> Delete this fortune `
      scoreVotesText.innerHTML = `Votes: ${data[0].votes}`

      fortuneCookie2.innerHTML = `
      <section id="cards" class="cards">
        <div class="fc-fortune">
          <p class="fc-fortune-text">${data[1].fortune}</p>
        </div> 
      </section>
      `

      delete2Text.innerHTML = `<p class="delete2"><button id="delete2" name="1"><i class="fa fa-trash" aria-hidden="true"></i></button> Delete this fortune `
      scoreVotes2Text.innerHTML = `Votes: ${data[1].votes}`
      
    });
};


playBtn.addEventListener('click', getCompliment)




function deleteBtnOne(evt){
  // alert(`${baseURL}/api/${itemListId[0]}`)
  axios.delete(`${baseURL}/api/${itemListId[0]}`)
  .then(res =>{
      const data = res.data;
      console.log(data)
      resetImage()
      alert("Successfully Deleted")
  .catch(function (error) {
    console.log(error.toJSON());
    })
  })
}

deleteText.addEventListener("click", deleteBtnOne)


function deleteBtnTwo(evt){
  // alert(`${baseURL}/api/${itemListId[1]}`)
  axios.delete(`${baseURL}/api/${itemListId[1]}`)
  .then(res =>{
      const data = res.data;
      console.log(data)
      resetImage()
      alert("Successfully Deleted")
  .catch(function (error) {
    console.log(error.toJSON());
    })
  })
}

delete2Text.addEventListener("click", deleteBtnTwo)



function resetImage(){

    // clear the id & clear old votes numbers when reset
    itemListId.length = 0;
    scoreVotesText.innerHTML = ""
    scoreVotes2Text.innerHTML = ""
    deleteText.innerHTML = `<p class="delete"><button id="delete" name="0" hidden><i class="fa fa-trash" aria-hidden="true"></i></button> `
    delete2Text.innerHTML = `<p class="delete2"><button id="delete2" name="1" hidden><i class="fa fa-trash" aria-hidden="true"></i></button>`


    // replace fortune paper with fortune cookie images during reset
    
    fortuneCookie.innerHTML = `<img class="cookieimg" src="./images/fortunecookie.png" height="150px" width="230px">`

    fortuneCookie2.innerHTML = `<img class="cookieimg" src="./images/fortunecookie.png" height="150px" width="230px">  `
}

resetBtn.addEventListener('click', resetImage)


function voteButton(evt){
    if (itemListId.length === 0){
      alert("You can't vote until you open the cookies")
    } else if (itemListId[evt.target.name] === undefined){
      pass
    } else { 
      axios.put(`${baseURL}/api/${itemListId[evt.target.name]}`, {"votes": 1})
      .then(res => {
          const data = res.data;
          console.log(data)
      // updating votes
      scoreVotesText.innerHTML = `Votes: ${data.votes}`
      })
      .catch(function (error) {
    console.log(error.toJSON());

    })
  }
}
votebtn.addEventListener("click", voteButton)



function voteButton2(evt){
    if (itemListId.length === 0){
      alert("You can't vote until you open the cookies")
    } else if (itemListId[evt.target.name] === undefined){
       alert("unknown undefined error")
    } else { 
      axios.put(`${baseURL}/api/${itemListId[evt.target.name]}`, {"votes": 1})
      .then(res => {
          const data = res.data;
          console.log(data)
      // updating votes
      scoreVotes2Text.innerHTML = `Votes: ${data.votes}`
      })
      .catch(function (error) {
    console.log(error.toJSON());

    })
  }
}

votebtn2.addEventListener("click", voteButton2)



const form = document.querySelector("#form")

function createFortune(evt){

  axios.post(`${baseURL}/api`, {"fortune": evt.target.create.value})
  .then(res =>{
      const data = res.data;
      console.log(data)
  .catch(function (error) {
    console.log(error.toJSON());
    })
  })
 alert("Successfully Created.")
}

form.addEventListener('submit', createFortune)



