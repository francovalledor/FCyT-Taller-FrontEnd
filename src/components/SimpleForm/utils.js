import React from "react";

export function commonAttributes(field, index) {
  let attributes = {
    name: field.name,
    placeholder: field.placeholder,
    autoFocus: index === 1,
    tabIndex: index,
    required: field.required || false,
    className: field.classes
  };
  index++;
  return attributes;
}

export function renderTypeSubmit(field, classes, index) {
  let attributes = commonAttributes(field, index);
  return (
    <div key={field.name} className="form-group">
      {renderLabel(field)}
      <input type={field.type} value={field.value} {...attributes} />
      {renderNote(field)}
    </div>
  );
}

export function renderTypeGeneral(field, classes, index) {
  let attributes = commonAttributes(field, index);
  return (
    <div key={field.name} className="form-group">
      {renderLabel(field)}
      <input type={field.type} defaultValue={field.value} {...attributes} />
      {renderNote(field)}
      {renderValidMessage(field)}
      {renderInvalidMessage(field)}
    </div>
  );
}

export function renderTypeSelect(field, classes, index) {
  let attributes = commonAttributes(field, index);
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
        <select {...attributes} defaultValue={field.value}>
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
