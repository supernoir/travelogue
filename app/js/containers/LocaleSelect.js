import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions';
import intl from 'react-intl-universal';

class LocaleSelect extends React.Component {
	constructor(props) {
		super(props);
		this.triggerSelectionChange = this.triggerSelectionChange.bind(this);
	}

	triggerSelectionChange(event) {
		let eventValue = event.target.value;
		let { dispatch } = this.props;
		let action = actions.saveLocaleChange(eventValue);
		dispatch(action);
	}

	render() {
		return (
			<div className="form-group">
				<label htmlFor="lang-select">
					{intl.get('i18n-menu-language-switch-label')}
				</label>
				<select className="form-select" id="lang-select" onChange={this.triggerSelectionChange}>
					{this.props.options.map(option => <option key={option.id} value={option.val}>{option.label}</option>)}
				</select>
			</div>
		);
	}
}

export default connect()(LocaleSelect);
