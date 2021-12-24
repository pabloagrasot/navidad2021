import { FC, useState, useRef } from 'react'
import styled, { keyframes } from 'styled-components'
import sound from '../music/song.mp3'
import foto from '../img/foto.jpg'

export const FrontCard: FC = () => {
    const [flip, setFLip] = useState(false)
    const flipCard = () => setFLip(!flip);

	const [audio] = useState( new Audio(sound))
	const ref = useRef(audio)



		if(flip === true){
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
				<div className="foto"><img alt="img"src={foto} /></div>
				
			</div>
			<div className="card__face card__face--back">
				<div className="card__content">
					<div className="card__header">

					</div>
					<div className="card__body">
						<TextAnimation>
						<p>Queridos hermanos, sobrinos, tíos y primos, aunque este año vamos a estar separados nos sentiremos unidos como siempre.</p>
						<p>Queremos desearos feliz navidad y que disfutéis de estos días con vuestra familia.</p>
						<p>Os queremos ❤❤</p>
						</TextAnimation>
					</div>
				</div>
			</div>
		</div>
	</div>

    )
  }