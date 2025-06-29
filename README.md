# 🛍️ GWU Student Exchange

A full-stack web application for buying and selling used items within the GW community. Built with the **MERN stack** (MongoDB, Express.js, React, Node.js) and modern web technologies.



## 🚀 Features

- **User Authentication**: Secure login and registration system using JWT and Firebase  
- **Listing Management**: Create, read, update, and delete product listings  
- **Product Details**: Comprehensive product information including:
  - Name and description
  - Regular and discounted prices
  - Condition status
  - Warranty information
  - Multiple product images
  - Location/address
- **Modern UI**: Built with React and styled using Tailwind CSS  
- **Responsive Design**: Works seamlessly across desktop and mobile devices  


## 🛠️ Tech Stack

<div align="center">

<table>
  <tr>
    <td valign="top" width="50%">
      <h4>Frontend</h4>
      <ul>
        <li>React.js with Vite</li>
        <li>Redux Toolkit for state management</li>
        <li>React Router for navigation</li>
        <li>Tailwind CSS for styling</li>
        <li>Firebase for additional features</li>
        <li>Swiper for image carousels</li>
      </ul>
    </td>
    <td valign="top" width="50%">
      <h4>Backend</h4>
      <ul>
        <li>Node.js with Express</li>
        <li>MongoDB with Mongoose</li>
        <li>JWT for authentication</li>
        <li>Cookie-parser for handling cookies</li>
        <li>Bcrypt for password hashing</li>
      </ul>
    </td>
  </tr>
</table>

</div>

# 📁 Project Structure
```plaintext
├── api/                 # Backend code
│   ├── controllers/     # Request handlers
│   ├── models/          # Database models
│   ├── routes/          # API routes
│   └── utils/           # Helper functions
├── client/              # Frontend code
│   ├── src/
│   │   ├── components/  # React components
│   │   ├── pages/       # Page components
│   │   └── redux/       # State management
│   └── public/          # Static files
└── package.json         # Project dependencies
```


---

## 🏃‍♂️ Getting Started

### 1. Clone the repository

```bash
git clone [repository-url]
cd Student-Marketplace-Platform
```
# Install Dependencies

```bash
# Install backend dependencies
npm install

# Install frontend dependencies
cd client
npm install
```

# Set Up Environment Variables

Create a `.env` file in the root directory with:
```plaintext
MONGO=your_mongodb_connection_string
```
# 🔄 API Endpoints

`/api/auth` – Authentication routes

`/api/user` – User management

`/api/listing` – Product listing operations


# 🧪 Development
To build for production:
```bash
npm run build
```
This will:
<li>Install all dependencies</li>
<li>Build the React frontend</li>
<li>Prepare the application for deployment</li>
