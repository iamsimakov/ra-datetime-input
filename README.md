# ra-datetime-input

Unofficial DateTimeInput component for [react-admin](https://marmelab.com/react-admin).

Component was updated from aor-datetime-input and versioning now started from v1.9.0
New package https://www.npmjs.com/package/ra-datetime-input

Component will work in two steps:
1) Select date

![date](https://user-images.githubusercontent.com/11376039/57787903-debb3800-773e-11e9-8fe5-dd3a37c4ed51.jpg)

2) Select time

![time](https://user-images.githubusercontent.com/11376039/57787901-debb3800-773e-11e9-9979-f244b073dd1e.jpg)

Just try it!

## Installation

```
npm install ra-datetime-input --save
```


## Usage


```jsx
import React from 'react';
import {
    Edit,
    TextInput,
    LongTextInput,
    TabbedForm,
    FormTab,
} from 'react-admin'
import DateTimeInput from 'ra-datetime-input';

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

This library is licensed under the [MIT Licence](https://github.com/iamsimakov/ra-datetime-input/blob/master/LICENSE).


Copyright (c) 2019 iamsimakov.
