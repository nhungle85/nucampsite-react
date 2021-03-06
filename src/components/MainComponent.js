import React, { Component } from "react";
import Directory from "./DirectoryComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import { Redirect, Route, Switch, withRouter } from "react-router";
import Contact from "./ContactComponent";
import CampsiteInfo from "./CampsiteInfoComponent"
import { connect } from 'react-redux';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { addComment } from '../redux/ActionCreators';

import About from "./AboutComponent";

const mapStateToProps = state => {
  return {
      campsites: state.campsites,
      comments: state.comments,
      partners: state.partners,
      promotions: state.promotions
  };
};

const mapDispatchToProps = {
  addComment: (campsiteId, rating, author, text) => (addComment(campsiteId, rating, author, text))
}

//rec
export class Main extends Component {

    render() {
      const HomePage = () => {
        return(
          <Home campsite={this.props.campsites.filter(campsite => campsite.featured)[0]}
                promotion={this.props.promotions.filter(promotion => promotion.featured)[0]}
                partner={this.props.partners.filter(partner => partner.featured)[0]}/>
        );
      };

      const CampsiteWithId = ({match}) => {
        return (
          <CampsiteInfo 
              campsite={this.props.campsites.filter(campsite => campsite.id === +match.params.campsiteId)[0]}
              comments={this.props.comments.filter(comment => comment.campsiteId === +match.params.campsiteId)}
              addComment={this.props.addComment}
          />
        );
    }; 

      return (
        <div className="Main">
          <Header />
          <TransitionGroup>
            <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
              <Switch>
                <Route path="/home" component={HomePage} />
                <Route exact path="/directory" render={() => <Directory campsites={this.props.campsites} />} />
                <Route path='/directory/:campsiteId' component={CampsiteWithId} />
                <Route exact path="/contactus" component={Contact} />
                <Route exact path="/aboutus" render={() => <About partners={this.props.partners} />} />
                <Redirect to="/home" />
              </Switch>
              </CSSTransition>
          </TransitionGroup>
          <Footer />
        </div>
      );
    }
}
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Main));

