import React, { FC } from 'react'
import cn from 'classnames'

import s from './Button.module.scss'

interface IButtonProps {
  onClick: () => void
}

const Button: FC<IButtonProps> = ({ onClick }) => {
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    onClick()
    e.currentTarget.classList.toggle(s.active)
  }
  return (
    <div className={s.button} onClick={handleClick}>
      <div className={s.back}></div>
      <div className={s.icon}>
        <div className={cn(s.part, s.left)}></div>
        <div className={cn(s.part, s.right)}></div>
      </div>
      <div className={s.pointer}></div>
    </div>
  )
}

export default Button
