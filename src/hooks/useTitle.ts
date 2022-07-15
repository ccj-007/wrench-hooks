export type titleProps = string

function useTitle(title: titleProps) {
  document.title = title
}

export default useTitle
