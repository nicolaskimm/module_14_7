var Contact = React.createClass({
    propTypes: {
        item: React.PropTypes.object.isRequired
    },

    render: function() {
        return (
            <div className={'contactItem'}>
                <img className={'contactImage'} src={'http://icons.veryicon.com/ico/System/100%20Flat%20Vol.%202/contacts.ico'} />
                <p className={'contactsLabel, contactText'}>
                    {this.props.item.firstName + ' ' + this.props.item.lastName}
                </p>
                <a className={'contactEmail, contactText'} href={this.props.item.email}>
                    {this.props.item.email}
                </a>
            </div>
        )
    },
});