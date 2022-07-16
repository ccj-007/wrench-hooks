import React from 'react'

function Home() {
  const jumpGithub = () => {
    window.open('https://github.com/ccj-007/wrench-hooks')
  }
  return (
    <>
      <img src='github.svg' style={{ color: '#ff3399', position: 'absolute', top: 22, left: 20, cursor: 'pointer' }} onClick={jumpGithub}></img>
      <a style={{ color: '#ff3399', position: 'absolute', top: 20, left: 50 }} href='path=/story/introduction--page'>
        Home
      </a>
    </>
  )
}

export default Home
