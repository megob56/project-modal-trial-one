import React from 'react';
import Modal from 'react-modal';

export default class ProjectModal extends React.Component {
    render(){
        if(!this.props.show){
            return null;
        }
        return(
            <Modal className="modal" isOpen = {this.props.show}>
              
                    <button className="js-close-modal-button" onClick={this.props.onClose}>Close Modal</button>
                    <h1>Add Track to Project</h1>
                    <h2>Add { this.props.trackName } to...</h2>
                    
                    <div className="js-new-project">
                        <input type="radio" value="new" className="js-radio-button" />A new project
                        <div className="js-text-input">
                            <label>
                                Name:
                                <input type="text" 
                                    placeholder = "Project Name"
                                />
                            </label>
                        </div>
                    </div>
                    <div className="js-exisiting-project">
                        <input type="radio" value="existing" className="js-radio-button"/>An existing project
                        <div className = "js-select-menu">
                            <select>
                                <option>Choose An Existing Project...</option>
                            </select>
                        </div>
                        
                    </div>
              


                
            </Modal>
        )
    }
}