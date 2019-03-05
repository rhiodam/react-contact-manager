import React, { Component } from "react";

export default class LikeButton extends Component {
    
    
    constructor() {
        super();
        this.state = {
            totalLiked: 100,
            liked : false
        };
      }
    
    handleClick = () => {
        // this.setState(({ liked }) => ({
        //     liked : !liked
        // }));

        this.setState(({ liked , totalLiked }) => ({
            liked : !liked

        }));
        
        console.log((this.state.liked));
        if (this.liked == true) {
            console.log("dalam if true");
            this.setState(({ totalLiked }) => ({
                totalLiked: totalLiked + 1
            }));
        } else {
            this.setState(({ totalLiked }) => ({
                totalLiked: 100
            }));
        }
    };

    
    render() {
        return (
            <div>
                <div>
                    <h2>Like Button</h2>
                </div>
                <style>{`
                    .like-button {
                        font-size: 1rem;
                        padding: 5px 10px;
                        color:  #585858;
                    }
                   .liked {
                        font-weight: bold;
                        color: #1565c0;
                   }
                `}
                </style>
                <h2>{this.state.totalLiked}</h2>
            
                <button onClick={this.handleClick } className={this.state.liked ? "liked" : "like-button"}>Like |{this.state.liked ? "true" : "false"}| {this.state.totalLiked }</button>
             </div>
        );
    }
}