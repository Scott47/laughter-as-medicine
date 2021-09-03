import { NavBar } from './components/nav/NavBar';
import { ApplicationViews } from './ApplicationViews';

export const LetUsLaugh = () => {

  return (
    <div className="LaughApp">
      <NavBar />
      <header className="LaughApp-header">
        <h1>Let's Laugh😆...or not 😩</h1>
      </header>
      <ApplicationViews />
    </div>
  );
}

