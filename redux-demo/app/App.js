import { connect } from 'react-redux';
import MyComponent from './myComponent';

// Map Redux state to component props
function mapStateToProps(state) {
  return {
    text: state.text,
    name: state.name
  };
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
  return {
    onChange: (e) => {
      console.log(1111111111)
      dispatch({
        type: 'change',
        payload: e.target.value
      })
    }
  }
}

// Connected Component
const App = connect(   //返回一个新的容器组件
  mapStateToProps,
  mapDispatchToProps
)(MyComponent);

export default App;
