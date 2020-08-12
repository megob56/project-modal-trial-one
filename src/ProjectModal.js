import React from 'react';
import Modal from 'react-modal';

export default class ProjectModal extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            selectedProject: "",
            projectId: "",
            checked: false,
        }
    }

    onProjectSelection = (e) => {
        const selectedIndex = e.target.options.selectedIndex;
        this.setState({
            selectedProject: e.target.value,
            projectId: e.target.options[selectedIndex].getAttribute('data-key'),
        })

        console.log("You've chosen", e.target.value)
        
        console.log("Access data key", e.target.options[selectedIndex].getAttribute('data-key'));
    }

    onRadioButtonChange = (e) => {
        this.setState({
            selectedRadioButton: e.target.value
        });

        console.log("You've selected", e.target.value)
    }

    handleTyping = (e) => {
        this.setState({
            textInputValue: e.target.value,
        });

        console.log("You are typing", e.target.value)
    }

    handleCheckedBox = () => {
        this.setState({
            checked: true
        });
    }

     handleNext = async() => {
        let data = {
            "projectadd": 1,
            "ProjectName" : null
            };

        if(!this.state.selectedRadioButton){
            return "please choose an option"
        }

        if(this.state.selectedRadioButton === "existing"){
            data.ProjectName = this.state.selectedProject;
        }

        if(this.state.selectedRadioButton === "new"){
            data.ProjectName = this.state.textInputValue;
        }

            
        await fetch(`/project/addtrack`, { //http://domainapi-staging.anwservices.local/project/addtrack
            method:"POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            }
        })
        .then((response) => response.json);
        
        

        this.props.clickHandler(data.ProjectName);
    }
    
    render(){
       
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
                        <input type="checkbox" 
                            value="allAccess" 
                            className="js-checkbox" 
                            id="checkbox" 
                            onClick = { this.handleCheckedBox }
                        />
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
                                    <option key={project.id} data-key={project.id} value={ project.project }>
                                        { project.project }
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