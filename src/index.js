import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'material-ui/DatePicker';
import TimePicker from 'material-ui/TimePicker';
import BackspaceIcon from 'material-ui/svg-icons/content/backspace';
import IconButton from 'material-ui/IconButton';
import {FieldTitle} from 'admin-on-rest';

export const datify = input => {
    if (!input) {
        return null;
    }

    const date = input instanceof Date ? input : new Date(input);
    if (isNaN(date)) {
        throw new Error(`Invalid date: ${input}`);
    }

    return date;
};

class DateTimeInput extends Component {
    
    onChange = (_, date) => {
        let tempDate = new Date(this.props.input.value);
        date.setHours(tempDate.getHours());
        date.setMinutes(tempDate.getMinutes());
        date.setSeconds(tempDate.getSeconds());

        this.props.input.onChange(date);
        this.props.input.onBlur();
        this.refs[`${this.props.source}.timePicker`].openDialog();
    };

    onChangeTime = (_, time) => {
        this.props.input.onChange(time);
        this.props.input.onBlur();
    };

    clearDate = () => {
        this.props.input.onChange(null);
        this.props.input.onBlur();
    };

    /**
     * This aims to fix a bug created by the conjunction of
     * redux-form, which expects onBlur to be triggered after onChange, and
     * material-ui, which triggers onBlur on <DatePicker> when the user clicks
     * on the input to bring the focus on the calendar rather than the input.
     *
     * @see https://github.com/erikras/redux-form/issues/1218#issuecomment-229072652
     */
    onBlur = () => {};

    onDismiss = () => this.props.input.onBlur();

    render() {
        // elStyle deleted because timepicker has not container prop and always show as dialog. for same showing date and time pickers.
        const {
            input,
            isRequired,
            label,
            meta: { touched, error },
            options,
            source,
            resource,
            labelTime,
            timeFormat
        } = this.props;

        return (
          <div>
            <DatePicker
            {...input}
            errorText={touched && error}
            floatingLabelText={<FieldTitle label={label} source={source} resource={resource} isRequired={isRequired} />}
            DateTimeFormat={Intl.DateTimeFormat}
            mode='portrait'
            container='dialog'
            autoOk
            value={datify(input.value)}
            onChange={this.onChange}
            onBlur={this.onBlur}
            onDismiss={this.onDismiss}
            style={{display: 'inline-block', marginRight: '10px'}}
            ref={`${this.props.source}.datePicker`}
            {...options} />

            <TimePicker
            {...input}
            errorText={touched && error}
            floatingLabelText={<FieldTitle label={labelTime ? labelTime : 'Time(hours, mins.)'} source={source} resource={resource} isRequired={isRequired} />}
            format={timeFormat ? timeFormat : '24hr'}
            autoOk
            value={datify(input.value)}
            onChange={this.onChangeTime}
            onBlur={this.onBlur}
            onDismiss={this.onDismiss}
            style={{display: 'inline-block'}}
            ref={`${this.props.source}.timePicker`}
            {...options} />

            <IconButton onClick={this.clearDate} tooltip="Clear Date" tooltipPosition="top-right">
              <BackspaceIcon color='grey' hoverColor='black'/>
            </IconButton>
          </div>
        );
    }
}

DateTimeInput.propTypes = {
    addField: PropTypes.bool.isRequired,
    elStyle: PropTypes.object,
    input: PropTypes.object,
    isRequired: PropTypes.bool,
    label: PropTypes.string,
    meta: PropTypes.object,
    options: PropTypes.object,
    resource: PropTypes.string,
    source: PropTypes.string,
    labelTime: PropTypes.string
};

DateTimeInput.defaultProps = {
    addField: true,
    options: {},
};

export default DateTimeInput;

