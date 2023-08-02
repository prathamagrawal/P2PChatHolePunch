# PeerWave
<hr>
"PeerWave" is an innovative and versatile peer-to-peer chat platform that combines the power of React, Firebase, and Hyperswarm to offer a seamless, secure, and decentralized messaging experience.

## Key Features
1. **Real-time Messaging**: Users can engage in real-time text, image, and multimedia messaging, ensuring a dynamic and engaging communication experience.
2. **User Authentication**: Firebase's robust authentication system is integrated into PeerWave, ensuring that only authorized users can access the platform.
3. **User Profiles**: Each user has a customizable profile where they can set a display name, profile picture, and status, enabling a personalized touch to their interactions.
4. **End-to-End Encryption**: PeerWave employs end-to-end encryption to secure conversations, ensuring that only the intended recipients can access the messages


## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Run](#run)
  - [Why Use Firebase React and Hyperswarm?](#why-Use-Firebase-React-and-Hyperswarm?)
- [Project Structure](#project-structure)
- [Results](#results)
  

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version >= 12.0.0)
- [npm](https://www.npmjs.com/) (comes with Node.js) or [Yarn](https://yarnpkg.com/) (recommended)

### Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/prathamagrawal/peerwave.git
   cd peerwave
   ```

2. Install the required libraires
    ```bash
    npm install
    ```

### Run 
    ```bash 
    npm start
    ```

### Why Use Firebase React and Hyperswarm?

#### Firebase 🚀
Firebase offers a robust authentication system, real-time data synchronization, and a reliable database. It ensures that users can securely access the platform and have a seamless experience even when switching devices.

#### React 💻
React provides a modern, responsive, and user-friendly interface. It enhances the user experience by delivering a dynamic and interactive environment for messaging.

#### Hyperswarm ⌨️

Hyperswarm enables direct peer-to-peer connections, eliminating the need for a central server. This approach enhances privacy, minimizes latency, and supports offline messaging.

### Project Structure
```
.
├── README.md
├── build
│   └── static
├── client.mjs
├── package-lock.json
├── package.json
├── peer1.js
├── peer2.js
├── public
│   └── index.html
├── server.mjs
├── src
│   ├── App.js
│   ├── components
│   │   ├── Chat.jsx
│   │   ├── Chats.jsx
│   │   ├── GifComponent.jsx
│   │   ├── Input.jsx
│   │   ├── Message.jsx
│   │   ├── Messages.jsx
│   │   ├── Navbar.jsx
│   │   ├── Search.jsx
│   │   └── Sidebar.jsx
│   ├── context
│   │   ├── AuthContext.js
│   │   └── ChatContext.js
│   ├── firebase.js
│   ├── img
│   │   ├── add.png
│   │   ├── addAvatar.png
│   │   ├── attach.png
│   │   ├── cam.png
│   │   ├── chats.gif
│   │   ├── img.png
│   │   └── more.png
│   ├── index.js
│   ├── pages
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   └── Register.jsx
│   └── style.scss
├── yarn-error.log
└── yarn.lock
```
### Results
