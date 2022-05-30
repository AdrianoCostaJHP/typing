import React, { useCallback, useEffect, useState, useRef } from 'react';
import {Container, CompletedWords, TypedKeys, ValidKeys} from './styles'
import wordList from './resources/words.json'
import { Word } from './components/Word';

const MAX_TYPED_KEYS = 30
const WORD_ANIMATION_INTERVAL= 600

const getWord = () => { 
  const index = Math.floor(Math.random() * wordList.length)
  const word = wordList[index]

  return word.toLowerCase()
}
const isValidKey = (key: string, word: string) => { 
  if(!word) return false

  const result = word.split('').includes(key)
  return result
}

function App() {

  const [typedKeys, setTypedKeys] = useState<Array<string>>([])
  const [validKeys, setValidKeys] = useState<Array<string>>([])
  const [completedWords, setCompletedWords] = useState<Array<string>>([])
  const [word, setWord] = useState<string>('')
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(()=>{
    setWord(getWord())
    if(containerRef) containerRef.current?.focus()
  },[])

  useEffect(()=>{
    const wordFromValidKeys = validKeys.join('').toLowerCase()

    let timeout: NodeJS.Timeout | null = null

    if(word && word === wordFromValidKeys){  
     timeout = setTimeout(()=>{
      let newWord = null
    
      do {
        newWord = getWord()
      }while(completedWords.includes(newWord))
      
      setWord(newWord)
      setValidKeys([])
      setCompletedWords((prev)=> [...prev, word])
    },WORD_ANIMATION_INTERVAL)
  }

  return () => {
    if(timeout) clearTimeout(timeout)
  }

  },[completedWords, validKeys, word])

  const handleKeyDown = useCallback((e)=>{
    e.preventDefault()
    const { key } = e
    setTypedKeys((prev) => [...prev, key].slice(MAX_TYPED_KEYS * -1))

    if(isValidKey(key, word)){
      setValidKeys((prev) =>{
        const isValidLength = prev.length <= word.length
        const isNextChar = isValidLength && word[prev.length] === key

        return isNextChar ?  [...prev, key] : prev

      })
    }
    
  },[word])

  return (
    <Container tabIndex={0} onKeyDown={handleKeyDown} ref={containerRef}>

      <ValidKeys>
        <Word word={word} validKeys={validKeys} />
      </ValidKeys>
      <TypedKeys >{typedKeys ? typedKeys.join(''): null}</TypedKeys>
      <CompletedWords>
        <ol>
          {completedWords.map((word)=>(
          <li key={word}>{word}</li>
          ))}
        </ol>
      </CompletedWords>
      
    </Container>
  );
}

export default App;
