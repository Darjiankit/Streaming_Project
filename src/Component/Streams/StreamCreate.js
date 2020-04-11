import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { createStream } from "../../Actions";
class StreamCreate extends React.Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        //here when we put error message class than in browser its css property display="none" so we can see error message in browser so we need todo in form something code
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }

  //we can write like renderInput(formProps) {
  //  return <input {...formProps.input} />;

  renderInput = ({ input, label, meta }) => {
    //as semantic ui proper error message problem we need to do below kind of logic to show error message
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;
    return (
      <div className={className}>
        <label> {label}</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit = formValues => {
    this.props.createStream(formValues);
  };

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form error"
      >
        {/* we can add props in Field tag to pass in halper function  (onSubmit)*/}
        <Field name="title" component={this.renderInput} label="Enter Title" />

        <Field
          name="description"
          component={this.renderInput}
          label="Enter Description"
        />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

const validate = formValues => {
  const errors = {};
  if (!formValues.title) {
    errors.title = "You must enter a title";
  }
  if (!formValues.description) {
    errors.description = "You must enter a description";
  }
  return errors;
};

// reduxForm works like connect() in redux . Here in reduxform we need to give form name as below form:streamCreate

const formWrapped = reduxForm({
  form: "streamCreate",
  validate: validate
})(StreamCreate);

export default connect(
  null,
  { createStream }
)(formWrapped);
