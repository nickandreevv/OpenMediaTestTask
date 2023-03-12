import React, {FC, useRef, useState} from 'react'
import cn from 'classnames'

import s from './Form.module.scss'

interface IFormProps {
    showPlayer: () => void;
}

const Form: FC<IFormProps> = ({ showPlayer }) => {
    const [error, setError] = useState<boolean>(false);
    const inputRef = useRef<HTMLInputElement>(null);
    const handleClick = async () => {
        const value = inputRef.current?.value as string;
        let a: HTMLAudioElement = new Audio(value);
        try {
            await a.play();
        } catch (e) {
            return setError(true);
        }
        a.setAttribute('src', '');
        showPlayer();
    }

    return (
        <div className={s.wrapper}>
            <div className={s.label}>Insert the link</div>
            <div className={cn(s.input, error && s.inputError)}>
                <form className={s.inputWrapper}>
                    <input ref={inputRef} placeholder="https://" />
                </form>
                <button onClick={handleClick}>
                    <img src="/arrow.svg" />
                </button>
            </div>
            {error && <div className={s.error}>Error message here</div> }
        </div>
    )
}

export default Form