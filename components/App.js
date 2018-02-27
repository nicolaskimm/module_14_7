var contacts = [
    {
        id: 1,
        firstName: 'Jan',
        lastName: 'Kowalski',
        email: 'jankowalski@example.com',
    },
    {
        id: 2,
        firstName: 'Adam',
        lastName: 'Adamowski',
        email: 'adamadamowski@example.com'
    },
    {
        id:3, 
        firstName: 'Julia',
        lastName: 'Nazwisko',
        email: 'julianazwisko@example.com'
    }
];

var contactForm = {
    firstName: '',
    lastName: '',
    email: ''
};

var App = React.createClass({
    render: function(){
        return(
            <div className={'app'}>
                <ContactForm contact={contactForm}/>
                <Contacts items={contacts} />
            </div>
        )
    }
  });