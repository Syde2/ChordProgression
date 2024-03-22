
const scale = ['A','A#', 'B', 'C','C#', 'D','D#', 'E','F','F#', 'G', 'G#', 'A','Bb', 'B', 'C','C#', 'D','D#', 'E','F','F#', 'G', 'G#' ]

export function majorScale(root){
  //Ajuste A# ou Bb selon la gamme
  root === 'B' || root === 'C#'|| root ==='D#' ? scale[13]='A#' : scale[13]='Bb'

  const start = scale.findIndex(note => note === root  )
  if(start === -1){
    throw 'Unknown Chord'
  }
  let myScale = scale.slice(start);

  const majorDegree = [0, 2, 4, 5, 7,9, 11]
  const minorChordPositionOnMajorScale = [1,2,5]
  const dimChordPositionOnMajorScale = [6]
  myScale = majorDegree.map(degree=>myScale[degree] )
  myScale.forEach((note, index)=>{
    minorChordPositionOnMajorScale.includes(index) ?
    myScale[index] = note +'m':
    dimChordPositionOnMajorScale.includes(index) ?
    myScale[index] = note+'dim' :
    note
  } )
  return myScale

}

export  function minorScale(root){
  root === 'B' || root === 'C#'|| root ==='D#' ? scale[13]='A#' : scale[13]='Bb'

  const start = scale.findIndex(note => note === root  )
  if(start === -1){
    throw 'Unknown Chord'
  }

  let myScale = scale.slice(start);

  //Gamme mineure Naturelle
  const minorDegree = [0,2,3,5,7,8,10 ]
  const minorChordPositionOnMinorScale = [0,3,4]
  const dimChordPositionOnMinorScale = [1]

  myScale = minorDegree.map(degree=>myScale[degree] )
  myScale.forEach((note, index)=>{
    minorChordPositionOnMinorScale.includes(index) ?
    myScale[index] = note +'m':
    dimChordPositionOnMinorScale.includes(index) ?
    myScale[index] = note+'dim' :
    note
  } )
  return myScale

}

export function reduceScaleToProgression(progression, fullScale){
  const response =[]
  progression.value.forEach(degree => {
    response.push(fullScale[degree])
  });

  return response

}
