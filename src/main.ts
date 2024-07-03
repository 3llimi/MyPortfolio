import './app.css'
import App from './App.svelte'
import './components/cover.css'
import Cover from './components/cover.svelte'
import Profile from "./components/profile.svelte";
import './components/profile.css'
const app = new App({
  target: document.getElementById('app')!,
})

export default app
