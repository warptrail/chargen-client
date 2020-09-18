import React, { Component } from 'react';

class WelcomeBox extends Component {
  render() {
    return (
      <section className="introduction_section">
        <h3 className="intro_header">Greetings Adventurer!</h3>

        <div className="getting_started">
          <h4>Getting Started</h4>
          <p className="intro">
            Please log in or register to access your characters and create new
            ones.
          </p>
          <p className="intro">
            To enter demo mode, please proceed to the login page and enter the
            username and password provided under the input fields.
          </p>
        </div>

        <div className="the_run_down">
          <h4>The Run Down</h4>
          <p className="intro">
            Keep track of all your characters who populate your fantasy realm.
            Formatted for Dungeons & Dragons basic stats, but can be applied to
            whatever your fantasy needs may be.
          </p>
          <p className="intro">
            View your Roster, and then click one to view more information.
          </p>
          <p className="intro">
            From the individual character sheet you are able to:
          </p>
          <ul>
            <li className="intro_list">
              View more detailed information about your character
            </li>
            <li className="intro_list">
              Edit your character and re-roll their stats
            </li>
            <li className="intro_list">Delete your character</li>
            <li className="intro_list">
              Add and delete items in your character&apos;s inventory.
            </li>
          </ul>
          <p className="intro">Honor and Glory to you, dear adventurer!</p>
        </div>
      </section>
    );
  }
}

export default WelcomeBox;
