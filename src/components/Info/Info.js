import React, { useEffect, useState } from 'react'
import ReactAudioPlayer from 'react-audio-player'

import { IconButton } from '@material-ui/core'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import FavoriteIcon from '@material-ui/icons/Favorite'

import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'

import mistari from '../../mistari'
import love from '../../music/love.mp3'

import './Info.css'

const Info = () => {

    const [lines, setLines] = useState(mistari)
    const [currentLine, setCutrentLine] = useState({})

    // Set random line each timeon load
    useEffect(() => {
        setCutrentLine(lines[Math.floor(Math.random() * lines.length)])
    }, [])

    // Handle previous click
    const previous = (id) => {
        id > 0 ? setCutrentLine(lines[id - 1]) : setCutrentLine(lines[id]);
    }

    // Handle next click
    const next = (id) => {
        id < mistari.length-1  ? setCutrentLine(lines[id+1]) : setCutrentLine(lines[id])
    }

    return (
        <div className="info">
            <div className="info__card">
                <img src={currentLine.image} alt="mistari" />
                <p>{ currentLine.line }</p>

                <div className="info__arrows">
                    <IconButton onClick={() => previous(currentLine.id)}>
                        <ArrowBackIosIcon />
                    </IconButton>
                    <IconButton onClick={() => next(currentLine.id)}>
                        <ArrowForwardIosIcon />
                    </IconButton>
                </div>
                <div class="info__audio">
                <ReactAudioPlayer className="player"
                    src={love}
                    autoPlay
                    controls
                    loop
                />
                </div>
            </div>   
            
            <div className="info__caution">
                <p>These sweet nothings don't entirely represent my feelings, but nikakupata pia siwezi mind mamaa-:)</p>
                <p className="copy">
                    Made with mob&nbsp; <FavoriteIcon /> &nbsp;by &copy; <a href="https://github.com/alexkimeu0" target="_blank">Alex</a>
                </p>
            </div>
        </div>
    )
}

export default Info
