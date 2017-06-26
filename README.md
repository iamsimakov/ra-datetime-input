# aor-datetime-input

DateTimeInput component for [Admin-on-Rest](https://github.com/marmelab/admin-on-rest).
Some tips:
- TimePicker has not prop `container` and it's always as the dailog(by therminology DatePicker), and so `container='dialog'` for DatePicker is hard-code option.
- Also a button to clear field is placed to component.
- For DatePicker and TimePicker was set hard-code style to place its in one line.


## Installation

```
npm install aor-datetime-input --save
```


## Usage


```
import React from 'react';
import {
    Edit,
    TextInput,
    LongTextInput,
    TabbedForm,
    FormTab,
} from 'admin-on-rest'
import DateTimeInput from 'aor-datetime-input';

export const NewsEdit = (props) => (
  <Edit title={<NewsTitle />} {...props}>
    <TabbedForm>
      <FormTab>
        <LongTextInput source="title" validate={required} />
        <DateTimeInput source="publish_date" validate={required} />
      </FormTab>
    </TabbedForm>
  </Edit>
);

```
## Development

You can build sources:

```
npm run build
```

## License

This library is licensed under the [MIT Licence](https://github.com/iamsimakov/aor-datetime-input/blob/master/LICENSE).

Copyright (c) 2017 iamsimakov.

