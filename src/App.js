import React from 'react';
import ProjectModal from './ProjectModal';
import ProjectPage from './ProjectPage';
import { v4 as uuidv4 } from 'uuid';
import './App.css';




class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      currentTrack: "",
      isModalOpen: false,
      projectList: [ { project: "Discovery Channel: Shark Week", tracks: [], id: "FEA2210C-B3E1-4E22-BD24-2E8E55B2CE46" }, 
                        { project: "Netflix: Brooklyn Nine-Nine", tracks:[], id: "F4A45037-1C6D-423A-BFDC-AB0300C50F59" }, 
                        { project: "BBC: Dowtown Abbey", tracks:[], id: "89706A4B-9269-4E8B-A4E7-AB0300C51006" } ],
      trackList: [ { id: 1, name:"Dream Frontiers"}, { id: 2, name:"To The Panel"}, { id: 3, name: "Expedition Unknown Toolkit"}]
    }

  }

  handleOpenModal = (trackName) => {
    this.setState({
      isModalOpen: true,
      currentTrack: trackName,
    })

  }

  handleCloseModal = () => {
    this.setState({
      currentTrack: "",
      isModalOpen: false,
    })

  }

  addTrackToProject = (projectName, trackId, projectId) => {
    console.log("in app trackId", trackId);
    const projects = [...this.state.projectList];
    let project = projects.filter(proj => proj.project === projectName)[0];
    if(!project){ 
      project = { project: projectName, tracks: [], id: uuidv4() };
      projects.push(project);
    }

    console.log("project id in app", project.id);

    const track = this.state.currentTrack;
    project.tracks.push({"trackName": track, "trackId": trackId});

    this.setState({
      projectList: projects,
      currentTrack: "",
      isModalOpen: false,
    });
  }

  render(){
    return(
      <div className="App">
        <h1>Track List</h1>
        <div className="track-list row">
          <div className="track-section container">
            {this.state.trackList.map(track => 
              <div className="js-results-row" data-tracktitle={track.name}>
                <h3>{track.name}</h3>
                <button className="open-modal-button" onClick={() => this.handleOpenModal(track.name)}>Add to Project</button>
                
              </div>)
            }
          </div>
        </div>

        
                <ProjectModal 
                  show = {this.state.isModalOpen}
                  className="js-modal"
                  onClose={ this.handleCloseModal }
                  trackName={this.state.currentTrack}
                  projects={ this.state.projectList }
                  clickHandler = { this.addTrackToProject }
                />

        <ProjectPage list = { this.state.projectList } />
      </div>
    )
  }
}

export default App;
