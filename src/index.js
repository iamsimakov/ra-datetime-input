import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { addField, FieldTitle } from 'ra-core';
import { DateTimePicker, MuiPickersUtilsProvider } from 'material-ui-pickers';
import DateFnsUtils from '@date-io/date-fns';

const datify = input_date => {
  if (!input_date || input_date === '') {
    return null;
  }
  const date = input_date instanceof Date ? input_date : new Date(input_date);
  if (isNaN(date)) {
    throw new Error(`Invalid date: ${input_date}`);
  }
  return date;
};

export class DateTimeInput extends Component {
    onChange = date => {
      this.props.input.onChange(date);
    };

    render() {
      const {
          className,
          meta,
          input,
          isRequired,
          label,
          options,
          source,
          resource,
          ...rest
      } = this.props;

      if (typeof meta === 'undefined') {
        throw new Error(
          "The DateTimeInput component wasn't called within a redux-form <Field>. Did you decorate it and forget to add the addField prop to your component? See https://marmelab.com/react-admin/Inputs.html#writing-your-own-input-component for details."
        );
      }
      const { touched, error } = meta;

        return (
          <div className="picker">
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <DateTimePicker
                className={className}
                error={!!(touched && error)}
                ampm={false}
                helperText={touched && error}
                value={datify(input.value)}
                onChange={this.onChange}
                label={<FieldTitle
                  label={label}
                  source={source}
                  resource={resource}
                  isRequired={isRequired}
                />}
                clearable
                {...options}/>
            </MuiPickersUtilsProvider>
          </div>
        );
    }
}

DateTimeInput.propTypes = {
  classes: PropTypes.object,
  className: PropTypes.string,
  input: PropTypes.object,
  isRequired: PropTypes.bool,
  label: PropTypes.string,
  meta: PropTypes.object,
  options: PropTypes.object,
  resource: PropTypes.string,
  source: PropTypes.string,
};

DateTimeInput.defaultProps = {
  options: {},
};

export default addField(DateTimeInput);
