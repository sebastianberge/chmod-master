import "./App.css";
import { Component } from "react";

class Home extends Component {
	constructor() {
		super();

		this.state = {
			numbersField: "",
			textField: "",
			ownerRead: 0,
			ownerWrite: 0,
			ownerExecute: 0,
			groupRead: 0,
			groupWrite: 0,
			groupExecute: 0,
			publicWrite: 0,
			publicRead: 0,
			publicExecute: 0,
		};
	}

	onInputChange = (event) => {
		const inputField = event.target.value;
		this.setState(() => {
			return { inputField };
		});
	};

	render() {
		const { inputField } = this.state;
		const { onInputChange } = this;
		return (
			<div className="Home">
				<h1>chmod-calculator</h1>
				<div className="calculator">
					<div>
						<h3>Owner</h3>
						<label for="read1">Read</label>
						<input id="read1" type="checkbox" />
						<br />
						<label for="write1">Write</label>
						<input id="write1" type="checkbox" />
						<br />
						<label for="execute1">Execute</label>
						<input id="execute1" type="checkbox" />
					</div>
					<div>
						<h3>Group</h3>
						<label for="read2">Read</label>
						<input id="read2" type="checkbox" />
						<br />
						<label for="write2">Write</label>
						<input id="write2" type="checkbox" />
						<br />
						<label for="execute2">Execute</label>
						<input id="execute2" type="checkbox" />
					</div>
					<div>
						<h3>Public</h3>
						<label for="read3">Read</label>
						<input id="read3" type="checkbox" />
						<br />
						<label for="write3">Write</label>
						<input id="write3" type="checkbox" />
						<br />
						<label for="execute3">Execute</label>
						<input id="execute3" type="checkbox" />
					</div>
					<input
						placeholder="0666"
						name="numbersField"
						onChange={onInputChange}
					/>
					<input
						placeholder="-rw-rw-rw-"
						name="textField"
						onChange={onInputChange}
					/>
				</div>
			</div>
		);
	}
}

export default Home;
