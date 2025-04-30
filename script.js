/* Basic styling for the entire page */
body {
  font-family: 'Inter', 'Segoe UI', sans-serif; /* Use Inter font for a modern look */
  margin: 0;
  padding: 1.25rem; /* Add some padding around the content */
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), 
              url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D') no-repeat center center fixed; /* Background image with dark overlay */
  background-size: cover;
  color: #f7fafc; /* Light text color for contrast */
  min-height: 100vh; /* Ensure the body takes up the full viewport height */
  display: flex;
  flex-direction: column;
  justify-content: flex-start; /* Push content to the top */
}

/* Styling for the header section */
header {
  text-align: center;
  margin: 1rem 0 1.5rem; /* Space around the header */
  animation: fadeInDown 0.5s ease-out; /* Fade-in animation for header */
}

/* Style the subheading (ITMD 541 - Lab 6) */
.subheading {
  font-size: 1.35rem; /* Slightly larger subheading */
  color: #e2e8f0; /* Light gray color */
  margin-bottom: 0.3rem;
  letter-spacing: 0.05em;
  text-transform: uppercase; /* Make it uppercase for emphasis */
}

/* Style the main heading */
h1 {
  font-size: 2.75rem; /* Large heading size */
  font-weight: 700; /* Bold font weight */
  display: inline-flex;
  align-items: center;
  gap: 0.5rem; /* Space between emoji and text */
}

/* Add sunrise emoji before the heading */
h1::before {
  content: '🌅'; /* Sunrise emoji */
  font-size: 2.75rem; /* Match the heading size */
}

/* Apply gradient color to the heading text */
h1 span {
  background: linear-gradient(to right, #ff7e5f, #feb47b); /* Orange to peach gradient */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* Style the footer */
footer {
  text-align: center;
  margin: 0.5rem 0; /* Small margin around footer */
  font-size: 0.9rem;
  color: #e2e8f0;
}

/* Style the API link in the footer */
footer a {
  color: #ff7e5f; /* Orange link color */
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease; /* Smooth color transition on hover */
}

footer a:hover {
  color: #feb47b; /* Peach color on hover */
  text-decoration: underline;
}

/* Style the location selection form */
#location-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem; /* Space between form elements */
  margin-bottom: 1rem;
  background: rgba(255, 255, 255, 0.9); /* Semi-transparent white background */
  padding: 1.25rem;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
  max-width: 550px; /* Limit form width */
  margin-left: auto;
  margin-right: auto;
  animation: fadeInUp 0.5s ease-out; /* Fade-in animation for form */
}

/* Style the form label */
#location-form label {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748; /* Dark gray text */
}

/* Style the select dropdown and button */
#location-form select,
#location-form button {
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  border: none;
  border-radius: 8px;
  background: #edf2f7; /* Light gray background */
  color: #2d3748;
  width: 100%;
  max-width: 300px; /* Slightly larger width */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Subtle shadow */
  transition: all 0.3s ease; /* Smooth transitions for hover/focus */
}

/* Add focus effect for accessibility */
#location-form select:focus,
#location-form button:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.3); /* Blue focus ring */
}

/* Style the "Use My Current Location" button */
#location-form button {
  background: linear-gradient(to right, #ff7e5f, #feb47b); /* Gradient background */
  color: white;
  font-weight: 600;
  cursor: pointer;
}

#location-form button:hover {
  background: linear-gradient(to right, #feb47b, #ff7e5f); /* Reverse gradient on hover */
  transform: translateY(-2px); /* Slight lift effect */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

/* Style the results section with a grid layout */
#results {
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* Two columns for Today/Tomorrow */
  gap: 1.5rem; /* Space between cards */
  max-width: 800px;
  margin: 0 auto;
}

/* Style the Today and Tomorrow cards */
.result-card {
  background: rgba(255, 255, 255, 0.95); /* Semi-transparent white */
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
  min-height: 220px; /* Larger card height to fill space */
  transition: transform 0.3s ease, box-shadow 0.3s ease; /* Smooth hover effects */
  overflow: hidden; /* Prevent content overflow */
}

/* Add a decorative gradient bar at the top of each card */
.result-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background: linear-gradient(to right, #ff7e5f, #feb47b);
}

/* Add hover effect to cards */
.result-card:hover {
  transform: translateY(-5px); /* Lift card on hover */
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
}

/* Style the card heading */
.result-card h2 {
  font-size: 1.5rem;
  color: #2d3748;
  margin-top: 0;
  font-weight: 600;
}

/* Style the list inside the card */
.result-card ul {
  list-style: none;
  padding-left: 0;
  margin: 0.5rem 0 0;
}

/* Style each list item */
.result-card li {
  margin: 0.2rem 0;
  font-size: 1rem;
  color: #4a5568; /* Medium gray text */
}

/* Style the bold labels in the list */
.result-card li strong {
  color: #2d3748;
  font-weight: 600;
}

/* Style the placeholder text before data is loaded */
.placeholder {
  color: #a0aec0; /* Light gray for placeholder */
  font-style: italic;
  font-size: 1rem;
  text-align: center;
  margin-top: 1rem;
}

/* Style the error message */
#error {
  text-align: center;
  color: #e53e3e; /* Red for errors */
  font-weight: 600;
  font-size: 0.9rem;
  margin-top: 0.5rem;
  background: rgba(255, 245, 245, 0.9); /* Light red background */
  padding: 0.5rem;
  border-radius: 8px;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

/* Hide elements with the "hidden" class */
.hidden {
  display: none;
}

/* Fade-in animation for the header */
@keyframes fadeInDown {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Fade-in animation for the form */
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Responsive design for tablets and smaller screens */
@media (max-width: 768px) {
  body { padding: 0.75rem; }

  #results {
    grid-template-columns: 1fr; /* Stack cards vertically */
    gap: 1rem;
  }

  h1 { font-size: 2rem; }
  h1::before { font-size: 2rem; }
  .subheading { font-size: 1.1rem; }

  #location-form {
    padding: 1rem;
    max-width: 100%;
  }

  #location-form select,
  #location-form button {
    max-width: 100%;
    padding: 0.4rem 0.8rem;
    font-size: 0.85rem;
  }

  .result-card {
    min-height: 180px;
    padding: 1rem;
  }

  .result-card h2 { font-size: 1.3rem; }
  .result-card li { font-size: 0.9rem; }
  .placeholder { font-size: 0.9rem; margin-top: 0.75rem; }
  #error { font-size: 0.85rem; padding: 0.4rem; }
  footer { margin: 0.3rem 0; font-size: 0.8rem; }
}

/* Responsive design for mobile phones */
@media (max-width: 480px) {
  h1 { font-size: 1.5rem; }
  h1::before { font-size: 1.5rem; }
  .subheading { font-size: 0.95rem; }
  #location-form { gap: 0.3rem; }
  #location-form label { font-size: 0.9rem; }
  .result-card { padding: 0.75rem; }
}
