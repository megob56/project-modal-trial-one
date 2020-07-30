import React from 'react';
import Modal from 'react-modal';

export default class ProjectModal extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            selectedProject: "",
            textInputValue: "",
        }
    }

    onProjectSelection = (e) => {
        this.setState({
            selectedProject: e.target.value
        })

        console.log("You've chosen", e.target.value)
    }

    onRadioButtonChange = (e) => {
        this.setState({
            selectedRadioButton: e.target.value
        });

        console.log("You've selected", e.target.value)
    }

    handleTyping = (e) => {
        this.setState({
            textInputValue: e.target.value
        });

        console.log("You are typing", e.target.value)
    }

    handleNext = () => {
        this.props.clickHandler(this.state.selectedProject);
    }
    
    render(){
        if(!this.props.show){
            return null;
        }
        return(
            <Modal className="modal" isOpen = { this.props.show } >
              
                    <button className="js-close-modal-button" onClick={ this.props.onClose }>Close Modal</button>
                    <h1>Add Track to Project</h1>
                    <h2>Add { this.props.trackName } to...</h2>
                    
                    <div className="js-new-project">
                        <input type="radio" 
                                value="new" 
                                className="js-radio-button" 
                                onChange = { this.onRadioButtonChange }
                                checked = { this.state.selectedRadioButton === "new" }
                                />A new project
                        <div className="js-text-input">
                            <label>
                                Name:
                                <input type="text" 
                                    placeholder = "Project Name"
                                    value = { this.state.textInputValue }
                                    onChange = { this.handleTyping }
                                />
                            </label>
                        </div>
                        <input type="checkbox" value="allAccess" className="js-checkbox" id="checkbox" />
                        <label htmlFor="checkbox">Give everyone from my organization access to this project</label> 
                    </div>
                    <div className="js-exisiting-project">
                        <input type="radio" 
                                value="existing" 
                                className="js-radio-button" 
                                onChange = { this.onRadioButtonChange }
                                checked = { this.state.selectedRadioButton === "existing" }
                                />An existing project
                        <div className = "js-select-menu-div">
                            <select className = "js-select-menu" value={ this.state.selectedProject } onChange = { this.onProjectSelection }>
                                <option>Choose An Existing Project...</option>
                                {this.props.projects.map(project => (
                                    <option key={ project } value={ project }>
                                        { project }
                                    </option>
                                ))}
                            </select>
                        </div>    
                    </div>

                    <button className="js-next-button" onClick={ this.handleNext }>Next</button>
              


                
            </Modal>
        )
    }
}