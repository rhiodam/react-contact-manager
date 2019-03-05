// import cx from 'classnames';
import React ,{ Component } from 'react';

export default class LikeDislike extends Component {

    constructor() {
        super();
        this.state = {
            like: 100,
            liked : false,
            dislike : 25,
            disliked : false
        };
      }

      handleLike = () => {
        // this.setState(({ liked }) => ({
        //     liked : !liked
        // }));

        this.setState(({ liked  }) => ({
            liked : !liked

        }));
        
        console.log((this.state.liked));
        if (this.liked == true) {
            console.log("dalam if true");
            this.setState(({ like }) => ({
                like: like + 1
            }));
        } else {
            this.setState(({ like }) => ({
                like: 100
            }));
        }
    };
    
    handleDislike = () => {
        // this.setState(({ liked }) => ({
        //     liked : !liked
        // }));

        this.setState((prevState,{ disliked  }) => ({
            disliked : !disliked

        }));
        
        console.log((this.state.disliked));
        if (this.disliked == true) {
            console.log("dalam if true");
            this.setState((prevState,{ dislike }) => ({
                dislike: dislike + 1
            }));
        } else {
            this.setState((prevState, { dislike }) => ({
                dislike: 100
            }));
        }
    };

    render() {
        return (
            <div>
                <div>
                    <h2>Like/Dislike</h2>
                </div>
                <style>{`
                    .like-button, .dislike-button {
                        font-size: 1rem;
                        padding: 5px 10px;
                        color:   #585858;
                    }

                    .liked, .disliked {
                        font-weight: bold;
                        color: #1565c0;
                    }
                    
                `}</style>

                <button onClick={this.handleLike } className={this.state.liked ? "like-button" : "like"}>Like | {this.state.like }</button>
                <button onClick={this.handleDislike } className={this.state.disliked ? "dislike-button" : "disliked"}>Dislike | {this.state.dislike }</button>
             
            </div>                      
        );
    }
}

666curseo


https://medium.com/@gustavo.ponce.ch/spring-boot-spring-mvc-spring-security-mysql-a5d8545d837d

https://blog.usejournal.com/how-much-do-you-actually-know-about-annotations-in-java-b999e100b929?TGa=true