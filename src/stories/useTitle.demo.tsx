import useTitle from '../hooks/useTitle'

export default function Title() {
  return (
    <button
      onClick={() => {
        useTitle('changed')
      }}
    >
      change webSite title
    </button>
  )
}
