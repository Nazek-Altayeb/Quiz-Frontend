# Goal

This site is for people who enjoy Q/A Challenges, those that examine their theory knowledge in different fields.
A few instructions are presented aside with a fill-in form where the user should type in his/her name, field, a mount of questions and choose a level of difficulty before starting the quiz.


The backend available here: https://github.com/Nazek-Altayeb/Quiz

# User Experience

### Site owner goals
*As a site owner, I will be expecting the following :* 
* Develop responsive and easy to use one-page web site.
* Express what is required to proceed with the quiz in short and simple sentences. 
* Provide user with input options (field, difficulty level, number of questions).
* Retrieve the quiz data from an API in real time.
* Accumulate both correct and incorrect answers during quiz, and display the score when it ends.
* Set quiz timer, freeze the quiz form and prevent the quiz taker from answering the questions when time is over.

### User Stories
*As a user visits the site for the first time, i am expecting:*
* a clear guide lines.
* a simple and attractive UI design that is easy to use.
* a ability to make my own choices regard the quiz topic , difficulty, ... etc.

*As a user who already visited the site, i am expecting:*
* a different challenging questions.
* ability to see the highest score for different users at the same level.

### Design
* The quiz area takes 70% of the page, centered in the middle of the page. 
* UX is easy to understand and use.  

### colors
Milk White, white Smoke and Neutral Green are used as three basic colors for the quiz area, it's shadow and the background.
the rest of the page remained white.

### Typography 
Basicly, Poppins is the font used and Sans-serif is the back-up font if Poppins fails to load.

# Existing features


### Fill in quiz form
User will be asked to type in or Choose the following:
- Name,
- A number of questions,
- Category,
- Level of difficulty.

Changing entries in the quiz form are not possible once the user click on 'start quiz' button.


### Load quiz-data from API
- Questions are loaded from the backend.


### Stop Watch
Approximately a minute is given for each question to be answered, submiting answers will be disabled even if the user didn't finish.

### Score accumulation
Scores are displayed in two cases, after user finishes answering all given questions, or when time is over.

### Display alert messages
- Incase user click on 'Submit answer' button without selecting an answer, an alert message will be displayed asking the user to select answer first.
- In case the quiz is finished, the result message will be displayed

### Display score
- score will be displayed when either the user finishes answering all questions Or when time is over.

### Dashboard
- Working on it ......
# Sytem design
The Database for this project is a relational DB, consists of two tables sofar (Quiz, Question).
The backend has been developed using the Spring boot Framework. The ERD and the API functionalities are clearly expressed here in the [Backend](https://github.com/Nazek-Altayeb/Quiz) project.

# Development
I have organized the development process by dividing the required functionalities into small tasks.
The tasks are prioritized according to `MOSCOW`.
I have followed the iterative approach, every unit of related tasks are grouped in one `Sprint`.

- **Sprint 1 **
    - [x] [User story: Setup environment] <code style="color:red">(Must have)</code>
    - [x] [User story: Add project Goal and User-Stories to the readme] <code style="color:#5319E7">(Should have)</code>
    - [x] [User story: Add navigation bar] <code style="color:red">(Must have)</code></code>

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

[Google Lighthouse](https://developers.google.com/web/tools/lighthouse/): 
To Do ....


## Responsiveness

To Do....

* Devices:
  * iPhone SE
  * iPad Air
  * iPad mini
  * iPhone XR
  * iPhone 12 Pro
  * Galaxy Fold
  * Surface Pro 7

### Unresolved bugs




