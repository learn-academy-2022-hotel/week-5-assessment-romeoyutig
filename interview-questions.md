# ASSESSMENT 5: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What does calling super do in a class?

Your answer: Calling a super causes a class to inherit all of its properties, without having to initialize it again.

Researched answer: Calling super causes the Superclass to pass down information to the subclass. This interaction is called inheritance, and is used by the "<" character. A subclass will inherit all of the data that the Superclass provides. The super must also be invoked in the initialization, before instance variables are declared. 

2. What is a gem?

Your answer: A gem is a ruby dependency file. We use it mainly for testing. There are many ruby gems. 

Researched answer: A gem is a snippet of code functionality that is managed by a packet manager. It allows you to download, and use ruby software packages on your system. They add large amounts of functionality to your software.

3. What is a relational database? Are there other kinds of databases?

Your answer: A relational database is like a google docs sheet. They have columns, and rows, and can be compared and linked to other databases. There can be a primary key that links two or more databases together.

Researched answer: A relational database is the equivalent to a Google Docs sheet, with data provided in rows, and columns. Databases have tables, and they all can have relationships with each other. There are a large amount of databases, such as Object-oriented databases, and network databases, for example.

4. What are primary keys? Why are they important? 

Your answer: A primary key is the key that can be references in other databases. You can use this to connect databases to each other, cutting out on unecessary rows and cutting down on null values.

Researched answer: A primary key is the key that can be references in other databases. You can use this to connect databases to each other, cutting out on unecessary rows and cutting down on null values. Rails will assign a primary key whenever a new table is created.

5. What are the HTTP verbs? What is each verb's corresponding CRUD action?

Your answer: I can't think of the HTTP verbs, but I know the CRUD actions are Create, Delete, Update, and Delete. These are all actions that users can interact with the website, and is a goal of a full-stack application.

Researched answer: The HTTP verbs are post, get, put, patch, and delete. The post verb will create data, the get verb will display data, the patch, and post verbs will update, and the delete verb will delete data. The accomplishments of all the CRUD actions using HTTP verbs will create a full-stack application.

## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. RESTful routes: Restful routes are a way for CRUD actions to be put into use. Rails requires RESTful naming conventions to be used with its routes. Some of the RESTful routes are Show, New, and Create, Update, and Delete

2. Model validations: Model validations are similar to tests that ensure only valid code gets saved into the database. It prevents invalid characters, invalid string length, and checks for any other requirements.

3. Params: Params allow more information to be passed into the main controller. It is dynamic, and can utilize an instance variable. They must be routed through routes.rb, and can also be used rendered using a specific synatx.

4. ERB: ERB stands for embedded Ruby. This is a file structure that allows html, and ruby code to be rendered in the view file.

5. API: API stands for Application Programming Interface, and uses JSON to transfer data. The API is considered the backend of the application, and is using the combiation of the model, and the controller.
