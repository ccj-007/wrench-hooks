/**
 * @description 强制更新的钩子
 */

import { useState } from 'react'

export default function useUpdate() {
  let [, setFlag] = useState<number>()

  const update = () => {
    setFlag(Date.now())
  }
  return update
}
