import { Redirect, Route, Switch } from 'wouter'
import './index.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import ProjectsPage from './pages/ProjectsPage'

export default function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/projects/course">
          <Redirect to="/projects/interactive-media" />
        </Route>
        <Route path="/projects/:slug" component={ProjectsPage} />
        <Route>
          <div className="min-h-screen bg-[#f7f5f2] flex flex-col items-center justify-center gap-4">
            <p className="text-neutral-400 text-sm">Page not found.</p>
            <a href="/" className="text-sm underline text-neutral-600 hover:text-black">← Back to Portfolio</a>
          </div>
        </Route>
      </Switch>
    </>
  )
}
