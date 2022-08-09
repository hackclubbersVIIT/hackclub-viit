import logo from './logo.svg';
import './Themes.css';
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
      <ThemeProvider theme={theme}>
        <button className='cta btn'>Click me</button>
      </ThemeProvider>
      {/* <h3>Hello</h3> */}
    </div>
  );
}

export default App;
