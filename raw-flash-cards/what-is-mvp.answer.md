MVP (Model View Provider) is a design pattern, derived from MVC, for structuring applications with user interfaces. It promotes loose coupling between the different parts.

- Model: Manage the applications data

  - Represent unique forms of data

- View: Visual representations of models

  - Limited logic. Ofter referred to as _dumb_
  - Users directly interact with views

- Presenter: A middle between the Model and View
  - Fetches the model and updates the view commonly via event handlers
  - Determins how the data should be presented in the View
