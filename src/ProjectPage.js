import React from 'react';

export default class ProjectPage extends React.Component {
    // constructor(props){
    //     super(props);

    //     this.state = {
    //         projectList: [ { playlist: "Play that Funky Music", tracks: ["hiii", "heeyyyy", "hello"] }, 
    //                     { playlist: "Sick Frat House Beats", tracks:[] }, 
    //                     { playlist: "Smoking Ganja Chilled Tunes", tracks:[] } ],
           
    //     }
    // }

    render(){   
        return(
            <div className="js-projectpage">
                <h1>Projects</h1>
                <ul>
                    {this.props.list.map(project => (
                        <li key={`js-track-${project.playlist}`}>
                            {project.playlist}
                            <ul>
                                {project.tracks.map(track => (
                                    <li key={track}>
                                        {track}
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}