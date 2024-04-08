import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const slice = createSlice(
    {
        name: "contacts",
        initialState: {
            items: []
        },
        reducers: {
            addContact: {
                reducer(state, action) {
                    state.items.push(action.payload);
                },
                prepare(contactInfo) {
                    return {
                        payload: {
                            id: nanoid(),
                            ...contactInfo,
                        },
                    };
                },
            },
            deleteContact(state, action) {
                state.items = state.items.filter((user) => user.id !== action.payload)
            }
        }
    }
)
export const { addContact, deleteContact } = slice.actions;
export default slice.reducer;
export const selectContacts = (state) => state.contacts.items;