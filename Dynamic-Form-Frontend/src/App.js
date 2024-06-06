import React from 'react';
import { useQuery } from 'react-query';
import { fetchFormConfig } from './api';
import { TextInput, DropdownSingle, CheckboxList, RadioList, DatePicker } from 'oolib';

const componentMap = {
  TextInput,
  DropdownSingle,
  CheckboxList,
  RadioList,
  DatePicker,
};

const App = () => {
  const { data, error, isLoading } = useQuery('formConfig', fetchFormConfig);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading form</div>;
  return (
    <form>
      {data.map((item, index) => {
        const Component = componentMap[item.comp];
        return Component ? <Component
          key={index}
          isRequired={item?.isRequired}
          valuePath={item?.valuePath}
          {...item.props}
        /> : null;
      })}
    </form>
  );
};

export default App;
