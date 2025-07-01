# Quiz App Refact

A modern, interactive quiz application built with React and Go (Gin framework). This application provides an engaging quiz experience with real-time scoring and leaderboard functionality.

## 🎯 Features

- **Interactive Quiz Interface**: Clean and responsive UI for answering multiple-choice questions
- **Real-time Scoring**: Immediate feedback on quiz completion
- **Leaderboard System**: Track and compare scores with other users
- **Stage-based Navigation**: Smooth transitions between start, quiz, and result stages
- **Input Validation**: Ensures users select an answer before proceeding

## 🛠️ Tech Stack

### Frontend (Dashboard)
- **React 19.1.0**: Modern React with hooks for state management
- **React Scripts 5.0.1**: Zero-configuration build setup
- **CSS3**: Custom styling for responsive design
- **Jest & React Testing Library**: For component testing

### Backend
- **Go 1.23.2**: High-performance backend language
- **Gin Framework**: Fast HTTP web framework for Go
- **RESTful API**: Clean API design (to be implemented)

## 📁 Project Structure

```
quiz-app-refact/
├── README.md                 # Project documentation
├── .gitignore               # Git ignore file
├── backend/                 # Go backend service
│   ├── go.mod              # Go module file
│   └── go.sum              # Go dependencies lock file
└── dashboard/              # React frontend application
    ├── package.json        # Node.js dependencies
    ├── package-lock.json   # Dependencies lock file
    ├── public/            # Static assets
    │   ├── index.html     # Main HTML file
    │   ├── favicon.ico    # App favicon
    │   └── manifest.json  # PWA manifest
    └── src/               # React source code
        ├── App.js         # Main app component
        ├── Quiz.js        # Quiz component
        ├── Result.js      # Results display component
        ├── Leaderboard.js # Leaderboard component
        ├── quizData.js    # Mock quiz questions
        ├── App.css        # App styling
        └── index.js       # React entry point
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Go 1.23.2 or higher

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/quiz-app-refact.git
   cd quiz-app-refact
   ```

2. **Setup Frontend**
   ```bash
   cd dashboard
   npm install
   ```

3. **Setup Backend**
   ```bash
   cd ../backend
   go mod download
   ```

### Running the Application

#### Frontend Development Server
```bash
cd dashboard
npm start
```
The application will open at [http://localhost:3000](http://localhost:3000)

#### Backend Server (when implemented)
```bash
cd backend
go run main.go
```

### Building for Production

#### Frontend Build
```bash
cd dashboard
npm run build
```
This creates an optimized production build in the `dashboard/build` folder.

## 📱 Application Flow

1. **Start Screen**: Welcome message with "Start Quiz" button and initial leaderboard
2. **Quiz Screen**: Sequential multiple-choice questions with option selection
3. **Result Screen**: Display final score with restart option and updated leaderboard

## 🎮 Current Features

- 3 sample quiz questions (expandable)
- Multiple choice format with 4 options per question
- Score calculation and display
- Mock leaderboard with top performers
- Responsive design for mobile and desktop

## 🔄 State Management

The application uses React's built-in `useState` hook for managing:
- Current stage (start/quiz/result)
- Selected answers array
- Current question index
- Error states for validation

## 🧪 Testing

Run the test suite:
```bash
cd dashboard
npm test
```

## 🚧 Roadmap / Future Enhancements

- [ ] Implement Go backend API
- [ ] Add database integration for persistent storage
- [ ] User authentication and profiles
- [ ] Question categories and difficulty levels
- [ ] Timer functionality for each question
- [ ] More detailed statistics and analytics
- [ ] Multiplayer quiz sessions
- [ ] Admin panel for question management
- [ ] Progressive Web App (PWA) features
- [ ] Dark mode support

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 API Documentation (To be implemented)

### Planned Endpoints

```
GET    /api/quiz          # Get quiz questions
POST   /api/quiz/submit   # Submit quiz answers
GET    /api/leaderboard   # Get leaderboard data
POST   /api/user/register # Register new user
POST   /api/user/login    # User login
```

## 🐛 Known Issues

- Backend API implementation pending
- Leaderboard data is currently mocked
- No data persistence between sessions

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👥 Authors

- Utkarsh Umre - Initial work

## 🙏 Acknowledgments

- React team for the amazing framework
- Gin-Gonic team for the fast Go web framework
- Create React App for the initial project setup
