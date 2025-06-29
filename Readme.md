deployed link : https://s66-thameem-capstone-distractionpad.onrender.com


# 15-Day Plan to Build "Distraction Pad" Website

## Week 1: Setup, Backend, and Core Features

Day 1: Project Setup and Planning
Set up a GitHub repository for version control.
Install tools: Node.js, npm, Git, VS Code, and PostgreSQL.
Create a project structure: frontend (React) and backend (Node.js/Express) folders.
Review the designs to confirm pages: "0" (logo), "1" (note), "2" (sign-in), "3" (homepage), "4" (note variant), "5" (calendar), "6" (settings), "7" (calendar with tasks), "8" (timer).

Day 2: Backend Setup
Initialize an Express server in the backend folder.
Connect to a PostgreSQL database (local or cloud-based).
Create a test API endpoint (/api/test) to ensure connectivity.

Day 3: User Authentication (Page "2")
Create a users table in the database.
Implement /register and /login endpoints with JWT authentication.
Design the sign-in page layout with username, password, and Google sign-in option.

Day 4: Notes Functionality (Pages "1" and "4")
Create a notes table linked to users.
Build CRUD API endpoints for notes (create, read, update, delete).
Set up authentication middleware to secure note access.

Day 5: Calendar Backend (Pages "5" and "7")
Create an events table for calendar tasks.
Implement API endpoints to save and fetch events (e.g., "dog walk" on March 2, 2025).
Plan frontend integration with a calendar library.

Day 6: Timer Backend Prep (Page "8")
Design a simple schema for timer settings (work duration, rounds, break duration).
Create an API endpoint to save user timer preferences.
Begin timer logic planning (to be implemented on the frontend).

Day 7: Frontend Structure
Set up a React app in the frontend folder with React Router.
Create components for each page: "0" (header/logo), "2" (sign-in), "3" (homepage), "1"/"4" (notes), "5"/"7" (calendar), "6" (settings), "8" (timer).
Implement basic navigation.
Week 2: Frontend Development, Integration, and Deployment

Day 8: Styling with Tailwind CSS
Install Tailwind CSS in the frontend.
Style pages "3" (homepage with "what’s on your mind?"), "1"/"4" (notes with cards), and "2" (sign-in form) to match the designs’ gray, green, and white palette with flowing stripes.

Day 9: Calendar Frontend (Pages "5" and "7")
Integrate a calendar library (e.g., FullCalendar) for "5" and "7".
Fetch and display events from the backend (e.g., "clean room" on March 10).
Style with semi-transparent overlays and green accents.

Day 10: Timer Frontend (Page "8")
Implement Pomodoro timer logic with JavaScript (countdown for work/break).
Add start, pause, and settings buttons, styled with circular icons.
Connect to backend for saving user preferences.

Day 11: Settings and Integration (Page "6")
Build the settings page with a "Delete account?" option.
Connect frontend to backend APIs for notes, calendar, and timer.
Ensure authentication protects sensitive pages.

Day 12: Testing
Test backend APIs with Postman (authentication, notes, events).
Test frontend responsiveness and functionality across pages.
Fix bugs (e.g., timer resets, calendar event display).

Day 13: Deployment Preparation
Set up environment variables (database URL, JWT secret).
Build the React app for production (npm run build).
Configure backend for deployment (e.g., Heroku).

Day 14: Deployment
Deploy backend to Heroku or Render.
Deploy frontend to Netlify or Vercel.
Verify connectivity between frontend and backend.

Day 15: Final Testing and Documentation
Test the live site for all features (sign-in, notes, calendar, timer, settings).
Write a README with setup and usage instructions.
Submit the project.

