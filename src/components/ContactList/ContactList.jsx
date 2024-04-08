import { useSelector } from "react-redux"
import Contact from "../Contact/Contact.jsx"
import css from "../ContactList/ContactList.module.css"
import {selectNameFilter} from "../../redux/filtersSlice"
import {selectContacts}  from "../../redux/contactsSlice.js"

const getVisibleContacts = (contacts, nameFilter) => {
    
  return contacts.filter((contact) =>
    contact.name.toLowerCase().includes(nameFilter.toLowerCase())
  );
};
export default function ContactList() {
  const contacts = useSelector(selectContacts);
    const nameFilter = useSelector(selectNameFilter);
  const visibleContacts = getVisibleContacts(contacts, nameFilter);
    return (
        contacts && <ul className={css.list}>
            {
                visibleContacts.map((item) =>
                    <li key={item.id}>
                        <Contact data={item} />
                    </li>)
            }
        </ul>
    );
}