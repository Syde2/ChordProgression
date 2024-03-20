
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
  const minorChordPositionOnMajorScale = [2,3,6]
  const dimChordPositionOnMajorScale = [7]
  myScale = majorDegree.map(degree=>myScale[degree] )
  return myScale

}

export  function minorScale(root){
  //Gamme mineure Naturelle
  const minorModel = [2,1,2,2,1,2,2]
  const minorChordPositionOnMinorScale = [1,,4,5]
  const dimChordPositionOnMinorScale = [2]
  return [root]
}
