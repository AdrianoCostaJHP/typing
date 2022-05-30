import styled, { keyframes } from 'styled-components'


const moveDown = keyframes`

  0% {
    top: 0;
    opacity: 1;
  }
  20%{
    top: -5rem;
    background-color: #26947c;
    transform: scale(1.2);
  }
  100%{
    top: 22rem;
    transform: scale(0.7);
    opacity: 0;
  }

`

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:focus{
    outline: none;
  }
`
export const ValidKeys = styled.div`
  font-size: 10rem;
  font-weight: bold;
  min-width: 600px;
  border-bottom: solid 2px #FFF;

  .matched {
    background-color: #FDF8C5;
    color: #282c34;

  }
  .matched.completed{
    position: relative;
    top: 0;
    left: 0;
    opacity: 1;
    animation: ${moveDown} 600ms ease-in;
  }
  .remainder{
    opacity: 0.5;
  }
  
`
export const TypedKeys = styled.div`
  margin-top: 20px;
  font-size: 1.3rem;
  width: 600px;
  overflow: hidden;
`
export const CompletedWords = styled.div`
  width: max-content;
  height: 100vh;
  overflow-y: scroll;
  position: fixed;
  top: 0; 
  right: 0;
  text-align: left;
  padding: 20px 40px 20px 80px;
  font-size: 1.8rem;
  line-height: 2.5rem;
  opacity: 0.5;
  display: flex;

  ol {
    flex-grow: 1;
    align-self: flex-end;
  } 
  `
 

  
