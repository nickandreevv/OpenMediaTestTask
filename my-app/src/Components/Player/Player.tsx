import React, {FC, SyntheticEvent, useRef, useState} from 'react'

import s from './Player.module.scss'
import {Button} from "./components/Button";

interface IPlayerProps {
    link: string;
    onBackClick: () => void;
}

const Player: FC<IPlayerProps> = ({ link, onBackClick }) => {
    const audio = useRef<HTMLAudioElement>(null);
    const [currentTime, setCurrentTime] = useState<string>('0:00');
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const handleBackClick = () => {
        audio.current?.setAttribute('src', '');
        onBackClick();
    }

    const handleClick = () => {
        if(audio.current?.paused) {
            audio.current?.play();
        } else {
            audio.current?.pause();
        }
    }

    const handleProgressBarClick = (e: React.MouseEvent<HTMLElement>) => {
        const progress: HTMLElement | null = document.getElementById('progress');
        if(audio.current && progress) {
            const bar = e.currentTarget;
            const { left } = bar.getBoundingClientRect();
            const percent = (e.clientX - left) / bar.offsetWidth;
            audio.current.currentTime = percent * audio.current.duration;
            progress.style.width = `${percent * 100}%`;
        }
    }

    const formatTime = (time: number) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds.toString().padStart(2, "0")}`;
    }

    const handleVolumeChange = (e: React.FormEvent<HTMLInputElement>) => {
        let target = e.currentTarget
        const min = Number(target.min)
        const max = Number(target.max)
        const val = Number(target.value)

        target.style.backgroundSize = (val - min) * 100 / (max - min) + '% 100%'
        if(audio.current) {
            audio.current.volume =Number(e.currentTarget.value);
        }
    }

    const onTimeUpdate = (e: SyntheticEvent<HTMLAudioElement>) => {
        const progress: HTMLElement | null = document.getElementById('progress');
        if(audio.current && progress) {
            const percent = (audio.current.currentTime / audio.current.duration) * 100;
            progress.style.width = `${percent}%`;
            setCurrentTime(formatTime(audio.current.currentTime));
        }
    }

    return (
        <>
            <button onClick={handleBackClick} className={s.back}>← Back</button>
            <div className={s.wrapper}>
                {isLoading && <div className={s.loader}>
                    <span/>
                </div>
                }
                <audio
                    src={link}
                    ref={audio}
                    onTimeUpdate={onTimeUpdate}
                    onCanPlay={() => setIsLoading(false)}
                >
                </audio>
                <Button onClick={handleClick} />
                <div className={s.progressWrapper} onClick={handleProgressBarClick}>
                    <div className={s.progressBar}>
                        <div id="progress" className={s.progress} />
                    </div>
                </div>
                <div className={s.bottom}>
                    <div className={s.time}>{currentTime}</div>
                    <input
                        type="range"
                        className={s.volume}
                        onChange={handleVolumeChange}
                        min="0"
                        max="1"
                        step="0.05"
                        defaultValue="1"
                    />
                </div>
            </div>
        </>
    )
}

export default Player