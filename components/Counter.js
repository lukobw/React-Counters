var Counter = React.createClass ({
    propTypes: {
        name: React.PropTypes.string.isRequired,
    },
    getInitialState: function() {
        return {
            counter: 0
        };
    },
    increment: function() {
        this.setState ({
            counter: this.state.counter + 1
        });
    },
    decrement: function() {
        this.setState ({
            counter: this.state.counter - 1
        });
    },
    render: function() {
        return React.createElement('div', {},
            React.createElement('div', {onClick: this.increment, className: 'btnIncr btn btn-success'}, '+'),
            React.createElement('div', {onClick: this.decrement, className: 'btnDecr btn btn-warning'}, '-'),
            React.createElement('button', {}, this.props.name + ' ' + this.state.counter)
        );
    }
});

var element = React.createElement('div', {},
    React.createElement(Counter, {name: '1st Counter: '}),
    React.createElement(Counter, {name: '2nd Counter: '}),
    React.createElement(Counter, {name: '3rd Counter: '}),
    React.createElement(Counter, {name: '4th Counter: '})
);
ReactDOM.render(element, document.getElementById('app'));