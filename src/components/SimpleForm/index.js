import React from "react";
import {
  renderTitle,
  renderTypeGeneral,
  renderTypeSelect,
  renderTypeSubmit
} from "./utils";

/**
 * ## Create a simple form
 *
 * @callback onChange
 * @callback onSubmit
 * @callback onBlur
 * @param {array} fields - Array containing form's fields (<input>)
 * @param {string} fields[].name - <input>'s name
 * @param {string} fields[].type - <input>'s type
 * @param {string} [ fields[].placeholder ] - optional <input>'s placeholder
 * @param {string} [ fields[].label ] - optional <input>'s label
 * @param {string} [ fields[].note ] - optional <input>'s note
 *
 * @param {string} [title] - optional form's title
 * @param {function} [onChange] - optional function for fields change handling
 * @param {function} [onSubmit] - optional function for form submit handling
 * @param {function} [onBlur] - optional function for focus out handling
 * @version 1.0.0
 * @author [Franco Valledor](https://github.com/francovalledor)
 */

export function SimpleForm(props) {
  // FUNCTIONS
  // Validations
  function checkParams() {
    let itsOK = true;

    if (!props.fields || !props.fields.map) {
      itsOK = false;
    }

    return itsOK;
  }

  // Event Handlers
  function handleChange(e) {
    if (props.onChange) {
      props.onChange(e);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (props.onSubmit) {
      props.onSubmit(e);
    }
  }

  function handleFocusOut(e) {
    if (props.onBlur) {
      props.onBlur(e);
    }
  }

  function renderFields(fields) {
    let index = 1;
    return props.fields.map((field) => {
      let classes = field.classes || "";
      classes += " form-control";
      if (field.isValid === true) {
        classes += " is-valid";
      } else if (field.isValid === false) {
        classes += " is-invalid";
      }

      field.classes = classes;

      switch (field.type.toLowerCase()) {
        case "submit":
          return renderTypeSubmit(field, index);

        case "select":
          return renderTypeSelect(field, index);

        default:
          return renderTypeGeneral(field, index);
      }
    });
  }

  /**
   *    BODY
   */
  if (checkParams()) {
    return (
      <form
        onSubmit={handleSubmit}
        onChange={handleChange}
        onBlur={handleFocusOut}
      >
        {renderTitle(props)}
        {renderFields(props.fields)}
      </form>
    );
  } else {
    console.error("CreateForm: Missing params");
    return "";
  }
}

export default SimpleForm;
