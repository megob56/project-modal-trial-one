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
      projectList: [ { playlist: "Discovery Channel: Shark Week", tracks: [], id: "FEA2210C-B3E1-4E22-BD24-2E8E55B2CE46" }, 
                        { playlist: "Netflix: Brooklyn Nine-Nine", tracks:[], id: "F4A45037-1C6D-423A-BFDC-AB0300C50F59" }, 
                        { playlist: "BBC: Dowtown Abbey", tracks:[], id: "89706A4B-9269-4E8B-A4E7-AB0300C51006" } ],
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

  addTrackToProject = (projectName, trackId) => {
   
    const projects = [...this.state.projectList];
    let project = projects.filter(proj => proj.playlist === projectName)[0];
    if(!project){ 
      project = { playlist: projectName, tracks: [], id: trackId };
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
            <div className="js-results-row" data-tracktitle="Dream Frontiers">
              <h3>Dream Frontiers</h3>
              <button className="open-modal-button" onClick={this.handleOpenModal} value="Dream Frontiers">Add to Project</button>
              <ProjectModal className="js-modal"
                show={ this.state.isModalOpen } 
                onClose={ this.handleCloseModal }
                trackName={ this.state.currentTrack }
                projects={ this.state.projectList }
                clickHandler = { this.addTrackToProject }
              />
            </div>
            <div className="js-results-row" data-tracktitle="Expedition Unknown Toolkit">
              <h3>Expedition Unknown Toolkit</h3>
              <button className="open-modal-button" onClick={this.handleOpenModal} value="Expedition Unknown Toolkit">Add to Project</button>
              <ProjectModal className="js-modal"
                show={ this.state.isModalOpen } 
                onClose={ this.handleCloseModal }
                trackName={ this.state.currentTrack }
                projects={ this.state.projectList }
                clickHandler = { this.addTrackToProject }

              />
            </div>
            <div className="js-results-row" data-tracktitle="To The Panel">
              <h3>To The Panel</h3>
              <button className="open-modal-button" onClick={this.handleOpenModal} value="To The Panel">Add to Project</button>
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
