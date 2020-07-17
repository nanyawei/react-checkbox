import Checkbox from '../src';
import { useState } from 'react';
import '../assets/index.less';

const Checked = () => {
  const[ checked, setChecked] = useState(true);

  return <div style={{backgroundColor: '#fff'}}>
    <Checkbox
      onChange={(e) => setChecked(e.target.checked)}
      children="checkbox checked"
      checked={checked}
    />
  </div>
}

export default Checked;