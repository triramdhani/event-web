import Router from 'next/router'

const GetStartedBtn = () => {
  return <button onClick={() => Router.push('/getstarted')}>Get Started</button>
}

export default GetStartedBtn
