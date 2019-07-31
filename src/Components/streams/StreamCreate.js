import React, {Fragment} from 'react';
import { Field, reduxForm} from 'redux-form';


class StreamCreate extends React.Component {
  
  renderError(meta){
    if(meta.toched && meta.error){
      return (
        <div className='error_msg'>{meta.error}</div>
      )
    }
  }
  
  renderInputBox = ({input, label, meta}) => {
  return (
    <Fragment>
      <label>{label}</label>
      <input {...input} />
      {this.renderError(meta)}
    </Fragment>
  )
}

  onSubmitForm(formValues){
    console.log(formValues)
  }

  
  render(){
    return(
      <form 
      className='ui_form'
      onSubmit={this.props.handleSubmit(this.onSubmitForm)}>
        <Field 
          name='title' 
          label='Enter Title' 
          component={this.renderInputBox}/>
        <Field 
          name='description' 
          label='Description of stream' 
          component={this.renderInputBox}/>
        <button>Submit</button>
      </form>
    )
  }
}

const validate = (formValues) => {
  const errors = {};
  if(!formValues.title){
    errors.title = 'You must enter a title'
  }
  if(!formValues.description){
    errors.description = 'You must enter a description'
  }
  return errors
}

export default reduxForm({form:'streamCreate', validate})(StreamCreate);