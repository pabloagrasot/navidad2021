import { FC, useState, useRef, useEffect } from 'react'
import styled, { keyframes } from 'styled-components'
import sound from '../music/song.mp3'
import foto from '../img/foto.jpg'

export const FrontCard: FC = () => {
    const [flip, setFLip] = useState(false)
    const flipCard = () => setFLip(!flip);

	const [audio] = useState( new Audio(sound))
	const ref = useRef(audio)



		if(flip == true){
		  ref.current.play()
		 } else{
		  ref.current.pause()
		 }
		  

	const animation = keyframes`
	0% {opacity: 0};
	100% {opacity: 1}
	`
	
	const TextAnimation = styled.div`
	
	animation-name: ${animation};
	animation-duration: 8s;
	animation-fill-mode: forwards;
	`
  
    return (
        <div className="card">
		<div onClick={flipCard} className={flip ? 'card__inner is-flipped' : 'card__inner no-is-flipped'} >
			<div className="card__face card__face--front">
				<h2><span>Feliz</span> <span>navidad</span></h2>
				<p>2021</p>
				<div className="foto"><img src={foto} /></div>
				
			</div>
			<div className="card__face card__face--back">
				<div className="card__content">
					<div className="card__header">

					</div>
					<div className="card__body">
						<TextAnimation>
						<p>Se que este año 2021 ha sido un poco largo y complicado. Hemos tenido que luchar más de la cuenta, pero juntos somos insuperables y juntos romperemos todas las barreras del próximo año 2022.</p>
						<p>Feliz navidad mi amor, estoy convencido de que este próximo año 2022 será nuestro año y alcanzaremos todas nuestras metas</p>
						<p>Te quiero ❤❤</p>
						</TextAnimation>
					</div>
				</div>
			</div>
		</div>
	</div>

    )
  }