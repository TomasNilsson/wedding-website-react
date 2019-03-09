import React from 'react'
import './Section.css'

const Section = ({ title, text, id }) => (
	<section className="section" id={id}>
		<div className="section-heading">
			<h2>{title}</h2>
		</div>
		{text &&
			text.split('\n').map((item, i) => (
				<p className="section-text" key={i}>
					{item}
				</p>
			))}
	</section>
)

export default Section
