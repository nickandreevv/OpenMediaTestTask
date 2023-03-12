import React, {FC} from 'react'
import cn from 'classnames';

import s from './Button.module.scss'

interface IButtonProps {
    onClick: () => void
}

const Button:FC<IButtonProps> = ({ onClick }) => {
    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
        onClick();
        e.currentTarget.classList.toggle(s.active)
    }
    return (
        <div className={s.botón} onClick={handleClick}>
            <div className={s.fondo}></div>
            <div className={s.icono}>
                <div className={cn(s.parte, s.izquierda)}></div>
                <div className={cn(s.parte, s.derecha)}></div>
            </div>
            <div className={s.puntero}></div>
        </div>
    )
}

export default Button