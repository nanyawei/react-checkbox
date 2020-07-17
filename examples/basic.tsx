import Checkbox from '../src';
import '../assets/index.less';

const Basic = () => {
  return <div style={{backgroundColor: '#fff'}}>
    <Checkbox
      children="checkbox"
      onChange={e => {
        console.log(e)
      }}
    />
  </div>
}

export default Basic;