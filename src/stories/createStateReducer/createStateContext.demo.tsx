import createStateContext from '../../hooks/createStateContext'

const [useSharedText, SharedTextProvider] = createStateContext(0)

const ComponentA = () => {
  const [text, setText] = useSharedText()
  return (
    <p>
      Component A:
      <br />
      {/* @ts-ignore */}
      <input type='text' value={text} onInput={(ev) => setText(ev.target.value)} />
    </p>
  )
}

const ComponentB = () => {
  const [text, setText] = useSharedText()
  return (
    <p>
      Component B:
      <br />
      {/* @ts-ignore */}
      <input type='text' value={text} onInput={(ev) => setText(ev.target.value)} />
    </p>
  )
}

export const Demo = () => {
  return (
    <SharedTextProvider>
      <p>Those two fields share the same value.</p>
      <ComponentA />
      <ComponentB />
    </SharedTextProvider>
  )
}
