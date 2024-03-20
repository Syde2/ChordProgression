
const scale = ['A','A#', 'B', 'C','C#', 'D','D#', 'E','F','F#', 'G', 'G#', 'A','A#', 'B', 'C','C#', 'D','D#', 'E','F','F#', 'G', 'G#' ]

export function majorScale(root){
  const start = scale.findIndex(note => note === root  )
  let myScale = scale.slice(start);
  const majorModel = [2,2,1,2,2,2,1]
  const minorChordPositionOnMajorScale = [2,3,6]
    const dimChordPositionOnMajorScale = [7]

  return myScale
}

export  function minorScale(root){
  //Gamme mineure Naturelle
  const minorModel = [2,1,2,2,1,2,2]
  const minorChordPositionOnMinorScale = [1,,4,5]
  const dimChordPositionOnMinorScale = [2]
  return [root]
}
