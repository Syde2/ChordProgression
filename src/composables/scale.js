
const scale = ['A','A#', 'B', 'C','C#', 'D','D#', 'E','F','F#', 'G', 'G#', 'A','A#', 'B', 'C','C#', 'D','D#', 'E','F','F#', 'G', 'G#' ]

export function majorScale(root){
  const start = scale.findIndex(note => note === root  )
  let myScale = scale.slice(start);
  const majorModel = [2,2,1,2,2,2,1]
  const minorModel = [2,1,2,2,1,2,2]
  return myScale
}

export  function minorScale(root){
  return [root]
}
