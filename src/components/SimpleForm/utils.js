import React from "react";

export function renderTypeSubmit(field, classes, index) {
  return (
    <div key={field.name} className="form-group">
      {renderLabel(field)}
      <input
        type={field.type}
        name={field.name}
        className={classes}
        placeholder={field.placeholder}
        autoFocus={index === 1}
        tabIndex={index++}
        value={field.value}
        required={field.required || false}
      />
      {renderNote(field)}
    </div>
  );
}

export function renderTypeGeneral(field, classes, index) {
  return (
    <div key={field.name} className="form-group">
      {renderLabel(field)}
      <input
        type={field.type}
        name={field.name}
        className={classes}
        placeholder={field.placeholder}
        autoFocus={index === 1}
        tabIndex={index++}
        defaultValue={field.value}
        required={field.required || false}
      />
      {renderNote(field)}
      {renderValidMessage(field)}
      {renderInvalidMessage(field)}
    </div>
  );
}

export function renderTypeSelect(field, classes, index) {
  function renderOptions(field) {
    if (field.options && field.options.map) {
      return field.options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.text || option.value}
        </option>
      ));
    } else return "";
  }

  return (
    <>
      <div key={field.name} className="form-group">
        {renderLabel(field)}
        <select
          name={field.name}
          className={classes}
          autoFocus={index === 1}
          tabIndex={index++}
          defaultValue={field.value}
          required={field.required || false}
        >
          {renderOptions(field)}
        </select>
        {renderNote(field)}
        {renderValidMessage(field)}
        {renderInvalidMessage(field)}
      </div>
    </>
  );
}

export function renderTitle(props) {
  if (props.title) {
    return <h3 className="mt-2">{props.title}</h3>;
  } else {
    return "";
  }
}

export function renderNote(field) {
  if (field.note) {
    return <small className="text-muted">{field.note}</small>;
  } else {
    return "";
  }
}

export function renderLabel(field) {
  if (field.label) {
    return (
      <label className="mt-2" htmlFor={field.name}>
        {field.label}
      </label>
    );
  } else {
    return "";
  }
}

export function renderValidMessage(field) {
  if (field.validMessage) {
    return <div className="valid-feedback">{field.validMessage}</div>;
  } else {
    return "";
  }
}

export function renderInvalidMessage(field) {
  if (field.invalidMessage) {
    return <div className="invalid-feedback">{field.invalidMessage}</div>;
  } else {
    return "";
  }
}
