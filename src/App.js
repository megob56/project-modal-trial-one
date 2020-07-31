import React from 'react';
import ProjectModal from './ProjectModal';
import ProjectPage from './ProjectPage';
import { v4 as uuidv4 } from 'uuid';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isModalOpen: false,
      currentTrack: "",
      //playlists: ["Play that Funky Music", "Sick Frat House Beats", "Smoking Ganja Chilled Tunes", ],
      projectList: [ { playlist: "Play that Funky Music", tracks: [], id: "FEA2210C-B3E1-4E22-BD24-2E8E55B2CE46" }, 
                        { playlist: "Sick Frat House Beats", tracks:[], id: "F4A45037-1C6D-423A-BFDC-AB0300C50F59" }, 
                        { playlist: "Smoking Ganja Chilled Tunes", tracks:[], id: "89706A4B-9269-4E8B-A4E7-AB0300C51006" } ],
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

  addTrackToProject = (projectName) => {
   
    const projects = [...this.state.projectList];
    let project = projects.filter(proj => proj.playlist === projectName)[0];
    if(!project){ 
      project = { playlist: projectName, tracks: [], id: uuidv4() };
      projects.push(project);
    }

    project.tracks.push(this.state.currentTrack);

    this.setState({
      projectList: projects,
      isModalOpen: false
    });
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
                clickHandler = { this.addTrackToProject }
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
                clickHandler = { this.addTrackToProject }

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
                clickHandler = { this.addTrackToProject }
              />
            </div>
          </div>
        </div>
        <ProjectPage list = { this.state.projectList } />
      </div>
    )
  }
}

export default App;
