import React from 'react';
import './VideoGridItem.css'
function VideoGridItem(props) {
	return (
		<article>
			<img alt="Thumbnail" src={props.imagem}></img>
			<p><b>{props.texto}</b></p>
		</article>
	)
}


export default VideoGridItem;