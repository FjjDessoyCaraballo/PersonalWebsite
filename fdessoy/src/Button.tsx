import { useState } from 'react'

export const Button: React.FC = ({onClick, text}) => {
	return (
		<div>
			<button onClick={onClick}>{text}</button>
		</div>
	)
}