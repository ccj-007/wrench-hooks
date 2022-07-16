/**
 * @description 网页的title修改
 */

export type titleProps = string

function useTitle(title: titleProps) {
  document.title = title
}

export default useTitle
