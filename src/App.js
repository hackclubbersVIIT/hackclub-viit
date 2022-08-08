import logo from './logo.svg';
import './App.css';
// import '@hackclub/theme/fonts/reg-bold.css'
import { ThemeProvider } from 'theme-ui'
import theme from '@hackclub/theme'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <ThemeProvider theme={theme}>Hello</ThemeProvider>
      {/* <h3>Hello</h3> */}
      {/* <button className='outlineLg'>Click me</button> */}
    </div>
  );
}

export default App;
