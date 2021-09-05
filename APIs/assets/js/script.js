// jQuery basics (select, create, add text, style, append)
let root = $('#root')
let title = $('<h2>')

title.text(`Welcome Summoner`)
title.attr('class', 'classy')
title.css('border', 'rgb(247, 88, 88) 10px solid')

root.append(title)
root.append('<h3>Your Top Six Champs:</h3>')

let champs = ['Blade', 'Colossus', 'Sentinel', 'CGR', 'Claire Voyant', 'Captain IW']
let champClass = ['Skill', 'Mutant', 'Tech', 'Cosmic', 'Mystic', 'Science']

for (let i = 0; i < champs.length; i++) {
  let champEl = $('<span>')
  let classEl = $('<span>')
  let brTag = $('<br>')
  let brTag2 = $('<br>')

  champEl.text(`${champs[i]} - `)
  classEl.text(champClass[i])
  classEl.attr('class', `champ-type-${[i+1]}`)

  root.append(champEl)
  root.append(classEl)
  root.append(brTag)
  root.append(brTag2)
}



