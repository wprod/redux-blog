import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {
  renderField(field) {
    return (
      <div className="form-group">
        <label>{field.label}</label>
        <input
          type="text"
          className="form-control"
          {...field.input}
        />
        {field.meta.error}
      </div>
    );
  }

  onSubmit(values) {
    console.log(values);
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
         name="title"
         label="Title for post"
         component={this.renderField}
        />
        <Field
         name="categories"
         label="Categories"
         component={this.renderField}
        />
        <Field
         name="content"
         label="Content"
         component={this.renderField}
        />
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};

  if (!values.title) {
    errors.title = "Enter a title !";
  }

  if (!values.categories) {
    errors.categories = "Enter categories !";
  }

  if (!values.content) {
    errors.content = "Enter a contnent !";
  }

  return errors;
}

export default reduxForm({
  validate,
  form: 'PostsNewFrom'
})(PostsNew);