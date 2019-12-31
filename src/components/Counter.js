import React from 'react'
import { connect } from 'react-redux'
import { increaseCount, decreaseCount, resetCount } from '../actions'
import { bindActionCreators } from 'redux';

class Counter extends React.Component {

	render() {
		return(
			<div className="counter">
				<h2>Counter</h2>
				<div>
					<button onClick={this.props.handleDecrease}>&ndash;</button>
					<span className="count">{this.props.count}</span>
					<button onClick={this.props.handleIncrease}>+</button>
				</div>
				<button onClick={this.props.handleReset}>RESET</button>
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	count: state.count
})

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    handleIncrease: increaseCount,
    handleDecrease: decreaseCount,
    handleReset: resetCount,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)