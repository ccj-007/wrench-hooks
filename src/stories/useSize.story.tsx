import { storiesOf } from '@storybook/react'
import * as React from 'react'
import { useSize, useMySize } from '../hooks'
import ShowDocs from './util/ShowDocs'

const SizeExample = () => {
  const [sized, state] = useSize(({ width: currentWidth }) => <div style={{ background: 'red' }}>Size me up! ({currentWidth}px)</div>)

  return (
    <div>
      <pre>{JSON.stringify(state, null, 2)}</pre>
      {sized}
    </div>
  )
}

const MySizeExample = () => {
  let result = useMySize()

  return (
    <div className='warp'>
      <h1>width</h1>
      <h1>height</h1>
    </div>
  )
}

storiesOf('Sensors/useSize', module)
  .add('Docs', () => <ShowDocs md={require('../docs/useSize.story.mdx')} />)
  .add('useSize', () => <SizeExample />)
  .add('useMySize', () => <MySizeExample />)
