import React from 'react';
import ProjectModal from './ProjectModal';
import ProjectPage from './ProjectPage';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isModalOpen: false,
      currentTrack: "",
      projectList: ["Play that Funky Music", "Sick Frat House Beats", "Smoking Ganja Chilled Tunes", ],
    }

  }

  handleOpenModal = (e) => {
    this.setState({
      isModalOpen: true,
      currentTrack: e.target.value,
    })

  }

  handleCloseModal = () => {
    this.setState({isModalOpen: false})
  }

  render(){
    return(
      <div className="App">
        <h1>Track List</h1>
        <div className="track-list row">
          <div className="track-section container">
            <div className="js-results-row" data-tracktitle="Space Monkey">
              <h3>Space Monkey</h3>
              <button className="open-modal-button" onClick={this.handleOpenModal} value="Space Monkey">Add to Project</button>
              <ProjectModal className="js-modal"
                show={ this.state.isModalOpen } 
                onClose={ this.handleCloseModal }
                trackName={ this.state.currentTrack }
                projects={ this.state.projectList }
              />
            </div>
            <div className="js-results-row" data-tracktitle="Cuckoo for Coccao Puffs">
              <h3>Cuckoo for Coccao Puffs</h3>
              <button className="open-modal-button" onClick={this.handleOpenModal} value="Cuckoo for Coccao Puffs">Add to Project</button>
              <ProjectModal className="js-modal"
                show={ this.state.isModalOpen } 
                onClose={ this.handleCloseModal }
                trackName={ this.state.currentTrack }
                projects={ this.state.projectList }
              />
            </div>
            <div className="js-results-row" data-tracktitle="Chicken Fried">
              <h3>Chicken Fried</h3>
              <button className="open-modal-button" onClick={this.handleOpenModal} value="Chicken Fried">Add to Project</button>
              <ProjectModal className="js-modal"
                show={ this.state.isModalOpen } 
                onClose={ this.handleCloseModal }
                trackName={ this.state.currentTrack }
                projects={ this.state.projectList }
              />
            </div>
          </div>
        </div>
        <ProjectPage />
      </div>
    )
  }
}

export default App;
