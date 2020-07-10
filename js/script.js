// fetch('https://cat-fact.herokuapp.com/facts')
//   .then(response => response.json())
//   .then(data => console.log(data));


// https://alexwohlbruck.github.io/cat-facts/docs/endpoints/facts.html

function addMoreFacts() {

  fetch('https://cat-fact.herokuapp.com/facts/random?animal_type=dog&amount=4')
  .then(response => {
    if (!response.ok) {
        alert("Response failed please try again")
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
   for (let i = 0; i < data.length; i++) {
       const element = data[i];
       $('.grid-container').prepend(
        `<div class="card align-items-center animate__animated animate__fadeInUp" style="margin:10px">
       <div class="card-body">
          <h3 class="card-title text-center align-items-center">${element.type.charAt(0).toUpperCase() + element.type.slice(1)} Fact</h3>
         <p class="card-text">${element.text}</p>
        </div>
      </div>`
       )
   }
  })
  .catch(error => {
    console.error('There has been a problem with your fetch operation:', error);
  });

  fetch('https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=4')
  .then(response => {
    if (!response.ok) {
        alert("Response failed please try again")
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
   console.log(data)
   for (let i = 0; i < data.length; i++) {
       const element = data[i];
       $('.grid-container').prepend(
        `<div class="card align-items-center" style="margin:10px">
       <div class="card-body">
          <h3 class="card-title text-center align-items-center">${element.type.charAt(0).toUpperCase() + element.type.slice(1)} Fact</h3>
         <p class="card-text">${element.text}</p>
        </div>
      </div>`
       )
       
   }
  })
  .catch(error => {
    console.error('There has been a problem with your fetch operation:', error);
  });
}

function addMoreCatFacts() {

  fetch('https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=8')
  .then(response => {
    if (!response.ok) {
        alert("Response failed please try again")
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
   console.log(data)
   for (let i = 0; i < data.length; i++) {
       const element = data[i];
       $('.grid-container').prepend(
        `<div class="card align-items-center" style="margin:10px">
       <div class="card-body">
          <h3 class="card-title text-center align-items-center">${element.type.charAt(0).toUpperCase() + element.type.slice(1)} Fact</h3>
         <p class="card-text">${element.text}</p>
        </div>
      </div>`
       )
       
   }
  })
  .catch(error => {
    console.error('There has been a problem with your fetch operation:', error);
  });
}

function addMoreDogFacts() {

  fetch('https://cat-fact.herokuapp.com/facts/random?animal_type=dog&amount=8')
  .then(response => {
    if (!response.ok) {
        alert("Response failed please try again")
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
   console.log(data)
   for (let i = 0; i < data.length; i++) {
       const element = data[i];
       $('.grid-container').prepend(
        `<div class="card align-items-center" style="margin:10px">
       <div class="card-body">
          <h3 class="card-title text-center align-items-center">${element.type.charAt(0).toUpperCase() + element.type.slice(1)} Fact</h3>
         <p class="card-text">${element.text}</p>
        </div>
      </div>`
       )
       
   }
  })
  .catch(error => {
    console.error('There has been a problem with your fetch operation:', error);
  });
}

function getallCatFacts() {
  fetch('https://cat-fact.herokuapp.com/facts?animal_type=cat')
  .then(response => {
    if (!response.ok) {
        alert("Response failed please try again")
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data.all.length)
    document.getElementById("catColumn").innerText = data.all.length
    
  })
  .catch(error => {
    console.error('There has been a problem with your fetch operation:', error);
  });

  fetch('https://cat-fact.herokuapp.com/facts?animal_type=dog')
  .then(response => {
    if (!response.ok) {
        alert("Response failed please try again")
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    document.getElementById("dogColumn").innerText = data.all.length
  })
  .catch(error => {
    console.error('There has been a problem with your fetch operation:', error);
  });
}

getallCatFacts()
