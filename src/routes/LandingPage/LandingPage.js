import React from 'react';
import { useHistory } from "react-router-dom";
import NavBar from '../../components/NavBar/NavBar';


export default function LandingPage() {
  const history = useHistory();

  const routeChange = () =>{ 
    let path = `/season`; 
    history.push(path);
  }
  const toSearch = () => {
    let path = `/contestant`;
    history.push(path)
  }
  const toSummary = () => {
    let path = `/summarypage`;
    history.push(path)
  }
    return (
      <div>
        <NavBar />
        <main>
          <section className="heading">
          <h1>Bachelor Analysis</h1>
            <p>A Bachelor franchise focused website created to help you analyze our beloved game</p>
            <button type='submit' onClick={routeChange}>Get started</button>
          </section>
          <section className="even-section">
            <div>
              <ul className="extra-nav">
                <li>
                  <img src="https://img.icons8.com/pastel-glyph/64/000000/champagne--v4.png" alt="champagne glasses" onClick={routeChange}/>
                  <p>Want to see a list of contestants from a particular season? Click on the champagne glasses above</p>
                </li>
                <li>
                  <img src="https://img.icons8.com/ios/50/000000/rose.png" alt="FIMP Rose" onClick={toSearch}/>
                  <p>Want to see a list of contestants based on filters you set? Click on the FIMP Rose</p>
                </li>
                <li>
                  <img src="https://img.icons8.com/wired/64/000000/diamond-ring.png" alt="diamond ring" onClick={toSummary}/>
                  <p>When you save data, you can reference it later on the Summary page, which you can access via the Neil Lane diamond above</p>
                </li>
              </ul>
            </div>
          </section>
          <section className="odd-section">
            <div>
              <h2>Why use Bachelor Analysis?</h2>
              <p>The Bachelor has transcended the average realm of reality tv viewership since the early seasons. 
                Nearly as soon as the show premiered fans began making brackets, betting against friends on the contestants they thought would 
                make it the furthest. What began as a simple reality show about finding love, 
                still poses as such, but is actually an intricate game in which there is good strategy and bad strategy, as well as good players, 
                and cringingly bad players. Throughout the show's 20-year reign, players and viewers alike have woken up to this fact.
                 As a result, we have seen increasingly high-level plays in recent seasons and the way we talk about the game is evolving. 
              </p>
              <p>Like any other game, analyzing the data helps us understand it better: what actions or characteristics are likely to propel a player the furthest,
                 and what are fatal errors? Does a first impression rose guarantee a player a spot in the finale? The answers to these questions 
                 may lie within your own research. <strong>Bachelor Analysis is your one-stop tool for evaluating the modern game.</strong>
              </p>
            </div>
          </section>
        </main>
      </div>
      )
}