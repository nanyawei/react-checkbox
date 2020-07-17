import { useState, useEffect } from 'react';
import '../assets/index.less';
import Checkbox from '../src';

const options = [
  'a', 'b', 'c', 'd', 'e'
];
const opt = [
  {
    label: 'A',
    value: 'a'
  },
  {
    label: 'B',
    value: 'b'
  },
  {
    label: 'C',
    value: 'c',
    disabled: true
  }
]
const value = ['b'];
const Group = () => {
  const [checkAll, setCheckAll] = useState(false);
  const [checkList, setCheckList] = useState(value);
  const [partial, setPartial] = useState(false);

  useEffect(() => {
    if (checkAll) {
      return setPartial(false);
    }
    setPartial(!!checkList.length);

  }, [checkAll, checkList]);

  return <div style={{ backgroundColor: '#fff' }}>
    <Checkbox.Group
      options={opt}
      value={value}
      onChange={(v) => {
        console.log(v)
      }}
    />
    <br />
    <Checkbox.Group
      options={options}
      value={value}
      onChange={(v) => {
        console.log(v)
      }}
      disabled={true}
    />
    <br />
    <hr />


    <Checkbox
      checked={checkAll}
      partial={partial}
      onChange={(e) => {
        setCheckAll(e.target.checked);
        setCheckList(e.target.checked ? options : []);
      }}
      children="全选"
    />
    <br />
    <Checkbox.Group
      options={options}
      value={checkList}
      onChange={(v) => {
        setCheckAll(v.length === options.length)
        setCheckList(v);
      }}
    />
  </div>
}

export default Group;