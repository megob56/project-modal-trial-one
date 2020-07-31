import React from 'react';

export default class ProjectPage extends React.Component {
    render(){   
        return(
            <div className="js-projectpage">
                <h1>Projects</h1>
                <ul>
                    {this.props.list.map(project => (
                        <li key={`js-track-${project.playlist}`}>
                            {project.playlist} 
                            {/* {!this.props.share && <p>Only me</p>}{this.props.share && <p>Team Access</p>}  */}
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