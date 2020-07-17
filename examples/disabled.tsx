import Checkbox from '../src';
import '../assets/index.less';

const Disabled = () => {
  return <div style={{ backgroundColor: '#fff' }}>
    <Checkbox
      children="checkbox disabled"
      disabled={true}
    />
    <br />
    <Checkbox
      children="checkbox disabled"
      disabled={true}
      checked={true}
    />
  </div>
}

export default Disabled;