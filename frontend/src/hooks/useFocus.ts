import { useRef } from 'react'

const useFocus: () => [React.RefObject<HTMLElement>, () => void] = () => {
  const htmlElRef = useRef<HTMLElement>(null)
  const setFocus = () => {
    htmlElRef?.current?.focus?.()
  }
  return [htmlElRef, setFocus]
}

export default useFocus
