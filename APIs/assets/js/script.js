// jQuery elements
let root = $('#root')
let title = $('<h2>')

title.text(`Welcome Summoner`)
title.attr('class', 'classy')
title.css('border', 'rgb(247, 88, 88) 10px solid')

root.append(title)
root.append('<h3>Your Top Six Champs:</h3>')

let champs = ['Blade', 'Colossus', 'Sentinel', 'CGR', 'Claire', 'Cap IW']
let champClass = ['Skill', 'Mutant', 'Tech', 'Cosmic', 'Mystic', 'Science']

for (let i = 0; i < champs.length; i++) {
  let champEl = $('<span>')
  let classEl = $('<span>')
  let br = $('<br>')

  champEl.text(`${champs[i]}`)
  classEl.text(champClass[i])
  classEl.attr('class', `champ-type-${[i + 1]}`)

  root.append(champEl)
  root.append(classEl)
  root.append(br)
}

// jQuery click events
let welcomeBtn = $('#welcome-btn')
let themeBtn = $('#theme-btn')
let classBtn = $('#class-btn')
let classType = $('#class-type')
let refreshBtn = $('#refresh-btn')
let isDark = true;

welcomeBtn.on('click', () => {
  alert("Marvel Contest of Champions (MCOC):\n-Mobile fighter game based on Marvel\n-Each champ has a specific class\nThere are six classes:\n1. Skill\n2. Mutant\n3. Tech\n4. Cosmic\n5. Mystic\n6. Science\n-Select bosses belong to the 7th class, Superior")
})

themeBtn.on('click', () => {
  if (isDark) {
    $('body').css({ 'background-color': 'rgb(61, 43, 43)', color: '#1a1a1a' });
    isDark = !isDark;
  } else {
    $('body').css({ 'background-color': '#1a1a1a', color: '#d9e9e8' });
    isDark = !isDark;
  }
})

classBtn.on('click', () => {
  let randomClass = Math.floor(Math.random() * 6) + 1;
  switch (randomClass) {
    case 1:
      classType.text('Skill')
      break
    case 2:
      classType.text('Mutant')
      break
    case 3:
      classType.text('Tech')
      break
    case 4:
      classType.text('Cosmic')
      break
    case 5:
      classType.text('Mystic')
      break
    case 6:
      classType.text('Science')
      break
  }
})

refreshBtn.on('click', () => {
  location.reload()
})

// jQuery forms
let champForm = $('#champ-form');
let champName = $('input[name="champ-name"]');

function handleChampSubmit(event) {
  event.preventDefault();

  let classSelect = $('input:checked').val();
  let upperClass = classSelect.charAt(0).toUpperCase() + classSelect.slice(1);

  console.log('Champion:', champName.val());
  console.log('Class:', upperClass);

  $('input[type="text"]').val('');
  $('input[type="radio"]').prop('checked', false);
}

champForm.on('submit', handleChampSubmit);

// jQuery DOM traversal
$('.class-radio').children().eq(5).append($(`
<span>
  <input type="radio" id="r7" value="superior" name="champ-select"/>
  <label for="r7">Superior</label>
</span>`));

// jQuery event delegation
let bossList = $(".villain-list")

bossList.on('click', '.villain', function (event) {
  let selectedBoss = event.target.innerHTML
  switch (selectedBoss) {
    case "Kang": console.log(selectedBoss + ' is the 1st boss (Tech class)')
      break
    case "Thanos": console.log(selectedBoss + ' is the 2nd boss (Cosmic class)')
      break
    case "Maestro": console.log(selectedBoss + ' is the 3rd boss (Superior class)')
      break
    case "The Collector": console.log(selectedBoss + ' is the 4th boss (Superior class)')
      break
    case "The Grandmaster": console.log(selectedBoss + ' is the 5th and final boss (Superior class)')
      break
  }
});

// Bootstrap; see index.html (components, layouts, utils, extensions)
// Guide/shortcut: https://hackerthemes.com/bootstrap-cheatsheet/

// jQuery date picker
$(function () {
  $('#datepicker').datepicker({
    changeMonth: true,
    changeYear: true,
  });
});

// jQuery dialog box (html commented out)
$(function () {
  $('#dialog').dialog();
});

// jQuery sortables
$(function () {
  $('#sortable').sortable();
  $('#sortable').disableSelection();
});

// moment.js; https://momentjs.com/
let today = moment()
$("#moment-date").text(today.format("MM/DD/YY"));

// jQuery modals
let classModalForm = $('#class-form');
let classModalTypeInput = $("#class-type-input")

const modalFormSubmit = (event) => {
  event.preventDefault();

  let modalClassType = classModalTypeInput.val();

  console.log(modalClassType)
}

classModalForm.on('submit', modalFormSubmit);

// ------------------- server-side API calls (Bored api) -----------------------------------

// API request, fetch method (vanilla js)
let fetchBtn = $('#fetch-btn');
let boredOutput = $('#bored-w-marvel')
let activityCost = $(".activity-cost")
let appendActivity = $(".append-activity")

const getApi = () => {

  // Marvel Developer requires client-based apps to use a pre-authorized domain URL
  // therefore using Bored API instead, however, this is Marvel doc's syntax for request
  // http://gateway.marvel.com/v1/public/characters?apikey=yourPublicApiKey
  // after that you'd add domain of Heroku app to Marvel Developer account as a referrer

  let requestUrl = 'https://www.boredapi.com/api/activity/'

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      let boredActivity = data.activity
      boredOutput.text(boredActivity)
      let actualCost = data.price * 50

      if (actualCost == 0) {
        activityCost.text("Hurray! It's free")
      } else
        activityCost.text(`Activity cost: $${actualCost}`)
    });
}

// fetchBtn.on('click', getApi)

// API request, ajax (jQuery)
const getAjax = (event) => {
  let requestUrl = 'https://www.boredapi.com/api/activity/'

  $.ajax({
    url: requestUrl,
    method: 'GET',
  }).then(function (data) {
    console.log(data);

    let boredActivity = data.activity
    boredOutput.text(boredActivity)
    let actualCost = data.price * 50

    if (actualCost == 0) {
      activityCost.text("Hurray it's free")
      // appendActivity.append("")
    } else
      activityCost.text(`Activity cost: $${actualCost}`)

  });

}

fetchBtn.on('click', getAjax);

// status codes
// remember to use Network tab for a new API in question
// then cmd + R to see status codes (useful when debugging json response for a new API)
// status 200 is a successful response
// status 404 is a failed response

// deconstructing parameters & fetch options
// fetch('https://api.github.com/gists/public?since=2020-10-10&per_page=5', {
//   //fetch('https://api.github.com/gists/public?since=2020-10-10&per_page=5) 
//   // ^^ line above is the no option or more common syntax
//   method: 'GET', //GET is default
//   credentials: "same-origin",  // include, same-origin, omit
//   redirect: "follow" // manual, follow, error

// })
// .then(function (response) {
//   return response.json();
// })
// .then(function (data) {
//   console.log(data);
// });

// document location
console.log(document.location)
console.log(document.URL)


