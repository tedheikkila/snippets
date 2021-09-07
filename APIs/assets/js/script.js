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

//jQuery forms
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

//DOM traversal
$('.class-radio').children().eq(5).append($(`
<span>
  <input type="radio" id="r7" value="superior" name="champ-select"/>
  <label for="r7">Superior</label>
</span>`));

// event delegation
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
// Neat shortcut: https://hackerthemes.com/bootstrap-cheatsheet/












