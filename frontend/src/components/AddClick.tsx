import { cloneElement } from 'react'

type AddClickProps = {
  component: React.ReactElement
  func: any
}

const AddClick = ({ component, func }: AddClickProps) => {
  return cloneElement(component, {
    onClick: func,
  })
}

export default AddClick
