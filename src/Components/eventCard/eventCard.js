import "./eventCard.css";

const EventCard = function(props){
	return(
			<div class="gallery">
			<img src={props.img} alt="img"/>
			<button class="button">{props.buttontext}</button>
			<div class="desc">
					<p class="one">{props.evenName}</p>
					<p class="two">{props.SpeakerName}</p>
					<p class="three">{props.designation}</p>
					<p class="four">Date : {props.date}</p>
					<p class="five">Time : {props.time}</p>
				</div>
			</div>
	)
};

export default EventCard;