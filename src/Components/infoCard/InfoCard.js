import "./InfoCard.css";

import Button from "../button/Button";
const InfoCard  = (props)=>{
	return(    
		<div class="comp_hack">
			<p id="subhead">{props.heading}</p>
			<p id="cont">{props.content}</p>
			<div class="register_hack">
				<a href={props.url}>
					<Button buttonStyle = "btn-normal" buttonSize = "btn-register-now-size" children="Register Now"/></a>
				<p id="atten">{props.deadline}</p>
			</div>
		</div>
	)
};

export default InfoCard;