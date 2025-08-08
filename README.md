# Goal

This project is designed for users who enjoy knowledge challenges and want to test their understanding across various fields through timed quizzes. Users are prompted to enter their name, select a category, difficulty level, and number of questions before starting the quiz.

The application communicates with a dedicated Spring Boot [backend](https://github.com/Nazek-Altayeb/Quiz) to fetch questions in real time from the Open Trivia [Encyclopedia](https://opentdb.com/api_config.php).


# User Experience

### Site owner goals
*As a site owner, I will be expecting the following :* 
* As the site owner, the following objectives are pursued:

* Build a responsive and intuitive single-page application using Angular.

* Clearly present instructions with a minimal, user-friendly form.

* Allow user input for quiz parameters: category, difficulty, and number of questions.

* Load quiz content dynamically from a backend API in real time.

* Track correct and incorrect answers and display final scores.

* Enforce a quiz timer that disables submissions after time expires.
### User Stories
*As a first time visitor, i am expecting:*
* I expect clear and concise instructions.

* I want a clean, attractive, and responsive interface.

* I want control over quiz parameters like category, difficulty, and number of questions.

*As a returned visitor, i am expecting:*
* I want fresh and challenging questions every time.

* I would like to view previous scores or compare with others (planned feature).

### Design
* The quiz interface is centered and takes up ~70% of the page width for maximum focus.

* UI/UX is designed to be simple, responsive, and accessible.

### colors
* Milk White, White Smoke, and Neutral Green dominate the interface.

* Shadows and contrasts enhance readability, while the background remains clean and white.

### Typography 
* Primary font: Poppins

* Fallback: Sans-serif

# Existing features

### Quiz Configuration Form
User inputs: Name, Number of Questions, Category, and Difficulty Level.

Form fields are locked once the quiz begins to ensure fairness.

### Real-time Quiz Data
Quiz questions are fetched from the backend dynamically via API.

### Countdown Timer
One minute is allocated per question.

When time runs out, the form is frozen, and further submissions are blocked.

### Score Accumulation
Score is calculated and displayed either upon completion of the quiz or when time expires.

### Alert Messages
Alert displayed if user tries to submit an answer without selecting one.

Final result is shown with total score upon quiz completion.

### Score Display
The total score is shown after all questions are answered or time ends.

### Dashboard (In Progress)
A dashboard for tracking quiz history and high scores is currently under development.

# Sytem design
The frontend is built using Angular and communicates with a Spring Boot backend.

The backend project, including API design and ERD (Entity Relationship Diagram), can be found [here](https://github.com/Nazek-Altayeb/Quiz)

# Development
Each requirement is prioritized using the MoSCoW method, and progress is tracked accordingly.

## Requirement 1: Core Quiz Functionality
    - [x] [Environment setup] <code style="color:red">(Must have)</code>
    - [x] [Implement quiz configuration form] <code style="color:red">(Must have)</code>
    - [x] [Create QuizComponent and input binding] <code style="color:red">(Must have)</code>
    - [x] [Create QuestionComponent to display each question] <code style="color:red">(Must have)</code>
    - [x] [Develop service to send user inputs to backend] <code style="color:red">(Must have)</code>
    - [x] [Fetch questions from backend and render in UI] <code style="color:red">(Must have)</code>

## Requirement 2: Quiz Logic & Timer
 - [] [Display questions sequentially with countdown timers] <code style="color:red">(Must have)</code>
 - [] [Prevent input once time expires] <code style="color:red">(Must have)</code>
 - [] [Automatically submit quiz when time ends] <code style="color:red">(Must have)</code>

 ## Requirement 3: Score Calculation & Display
 - [] [Accumulate scores during quiz] <code style="color:red">(Must have)</code>
 - [] [Display total score at end of quiz or on timeout] <code style="color:red">(Must have)</code>
 - [] [Show alert when submitting without selecting an answer] <code style="color:red">(Must have)</code>

 ## Requirement 4: CMS & Performance Features
  - [] [Show new quiz content on each attempt] <code style="color:#5319E7">(Should have)</code>
  - [] [Begin building dashboard to show quiz history and scores] <code style="color:#5319E7">(Should have)</code>
  - [] [Prepare for role-based access and admin functionality] <code style="color:#5319E7">(Should have)</code>


# Technologies
## Language, Frameworks, Libraries and tools
* Angular v18.1
* rxjs
* Bootstrap 5
* Font Awesome
* Github

# Testing

### Test Scenario

*First case scenario:*
- First, user fill in his/her (Name , amount of questions, difficulty level), filling in fields is mandatory
- Press on 'start quiz' button
- Second, the quiz area is displayed containing (Timer , Question counter, a question with four answer-options, two counters to accumulate the correct and incorrect answers).
- Third, once the user select an answer, he should click on 'submit answer', then one of the counters (correct answer, incorrect answer) will be increased by 1.
- when user answers all question with the given amount of time, the final score is displayed.
- Finally, the user is given a choice to take the quiz again.

*Second case scenario:*
- The first three steps remain the same as the *First case scenario*
- in case time is over while user is answering questions, the question area is freezed (no way to submit more answers) and the final score is displayed.
- Finally, the user is given a choice to take the quiz again.

### Validation

1. W3C Markup Validator   
To Do ....

1. W3C CSS Validator   
To Do ....

1. Snyk Code    
To Do ....

### Performance 

To Do ....







