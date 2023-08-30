# Contact Lookup UI Assignment

## Objective:
Create a React application that allows users to search and view contact details from a list of contacts.
### UI Display:
- Display a search bar at the top of the page for users to search contacts by first name. - DONE
- Display a list of contacts below the search bar. - DONE
- Each contact in the list should display: - DONE
- First name - DONE
- Last name - DONE
- Email - DONE
- Avatar image - DONE

### Functionality:
- As the user types in the search bar, the contact list should update to show only contacts whose first name or last name matches the search query (case-insensitive). - DONE
- Clicking on a contact in the list should display a modal or a separate section below the list showing additional details for the selected contact, including phone number. - DONE

### Styling:
- You can use any styling approach you are comfortable with, such as plain CSS, SCSS, or any React UI Framework. - DONE

### Bonus Points (Optional):
- Implement responsive design to ensure the application works well on various screen sizes. - DONE
- Add animations or transitions to enhance the user experience. - DONE

### Routing
- Utilise a router (Next.js router, React Router, etc) to create separate routes for each contact detail view. - DONE

## Installation

This app has an external dependency on `json-server` module which is already added to the devDependencies.

Also, `concurrently` module has been added to run the `json-server` and the **Contact Lookup** UI together.

First, run the development server:

```bash
npm run develop
```
This fires `concurrently`.

Open [http://localhost:3000](http://localhost:3000) with your browser to see the Contact UI.