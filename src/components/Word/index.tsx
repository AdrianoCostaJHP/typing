type WordProps ={
  word: string;
  validKeys: Array<string>;
}

export const Word = ({word, validKeys}: WordProps) => {
  if(!word) return null

  const joinedKeys = validKeys.join('')
  const matched = word.slice(0, joinedKeys.length)
  const remainder = word.slice( joinedKeys.length)

  const completedClass = (joinedKeys === word) ? 'matched completed':'matched'
  
  return (
    <>
      <span className={completedClass}>{matched}</span>
      <span className="remainder">{remainder}</span>
    </>
  )
}
