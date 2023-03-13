import React, { FC, useState } from 'react'
import cn from 'classnames'

import s from './Main.module.scss'
import { Player } from '../Player'
import { Form } from '../Form'

const Main: FC = () => {
  const [showPlayer, setShowPlayer] = useState<boolean>(false)
  const [link, setLink] = useState<string>(
    'https://lalalai.s3.us-west-2.amazonaws.com/media/split/a7564eb8-cbf2-40e2-9cb8-6061d8d055a7/no_vocals'
  )
  const handleClick = () => {
    setShowPlayer(!showPlayer)
  }
  return (
    <div className={cn(s.wrapper)}>
      <div className={s.title}>
        Play any audio sources directly in the browser!
      </div>
      <div className={s.contentWrapper}>
        {showPlayer ? (
          <Player onBackClick={handleClick} link={link} />
        ) : (
          <Form showPlayer={handleClick} />
        )}
      </div>
      <div className={s.subtitle}>Without any restrictions for free</div>
      <div className={s.hint}>
        By uploading the audio file, you agree to our&nbsp;
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley">
          <span>Terms of Service.</span>
        </a>
      </div>
    </div>
  )
}

export default Main
