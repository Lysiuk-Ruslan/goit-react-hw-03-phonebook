import PropTypes from 'prop-types';
import { ContactsList, ListItem, DeleteBtn } from './ContactList.styled';

export default function ContactList({ contactsList, deleteContact }) {
  return (
    <>
      <ContactsList>
        {contactsList.map(contact => (
          <ListItem key={contact.id}>
            {contact.name}: {contact.number}
            <DeleteBtn type="button" onClick={() => deleteContact(contact.id)}>
              Delete
            </DeleteBtn>
          </ListItem>
        ))}
      </ContactsList>
    </>
  );
}

ContactList.propTypes = {
  contactsList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  deleteContact: PropTypes.func.isRequired,
};
