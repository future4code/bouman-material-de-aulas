import React from 'react'
import './VideoGrid.css'

function VideoGrid(props) {
	return(
		<div className="VideoGrid">
			{props.children}
		</div>
	) 
}

export default VideoGrid