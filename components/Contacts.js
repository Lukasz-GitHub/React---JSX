'use strict';

var Contacts = React.createClass({
    propTypes: {
        items: React.PropTypes.array.isRequired,
    },

    render: function () {
        var contacts = this.props.items.map(function (contact) {
            return 
<<<<<<< HEAD
                <Contact item={contact} key={contact.id} />
=======
                <Contact item={contact} key={contact.id}> </Contact>
>>>>>>> 258778c18a993d665391287ea23cb0ed1cf2d82c
        });
        return (
            <ul className={'contactsList'}>
                {contacts}
            </ul>
        );
    }
});