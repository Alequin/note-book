MVC (Model View Controller) is a design pattern for structuring applications with user interfaces. It promotes loose coupling between the different parts.

- Model: Manage the applications data

  - Represent unique forms of data
  - Commonly update the view when a change occures

- View: Visual representations of models

  - Observes the model, updating when the model changes
  - Limited logic. Ofter referred to as _dumb_
  - Users directly interact with views

- Controller: Interprets changes in the Views and updates the Models
