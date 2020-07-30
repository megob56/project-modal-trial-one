import React from 'react';

export default class ProjectPage extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            projectList: [ { playlist: "Play that Funky Music", tracks: [] }, 
                        { playlist: "Sick Frat House Beats", tracks:[] }, 
                        { playlist: "Smoking Ganja Chilled Tunes", tracks:[] } ],
           
        }
    }

    render(){
        
        return(
            <div className="js-projectpage">
                <h1>Projects</h1>
                <ul>
                    {this.state.projectList.map(project => (
                        <li>
                            {project}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}