import React, { Component } from 'react';
import Button from './components/Button';
import UserData from './components/user/UserData';
import UserProfile from './components/user/UserProfile';
import UserSearch from './components/user/UserSearch';
import UserFilter from './components/user/UserFilter';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      sort: '',
      items: [],
      profile: {}
    };
  }

  componentDidMount() {
      let fix = this;
      let request = new XMLHttpRequest();
      request.open('GET', 'data.json', true);
      request.onload = function() {
        if (request.status >= 200 && request.status < 400) {
          fix.setState({
            items: JSON.parse(request.responseText),
            itemsInitial: JSON.parse(request.responseText),
            profile: JSON.parse(request.responseText)[0]
          });
        }
      };
      request.send();
  }

    sortName() {
        let sort = '';
        let result = [];
        if(this.state.sort == 'name-asc') {
            sort = 'name-desc';
            result = this.state.items.sort(function(a, b){
                if(a.name > b.name) return -1;
                if(a.name < b.name) return 1;
                return 0;
            });
        } else {
            sort = 'name-asc';
            result = this.state.items.sort(function(a, b){
                if(a.name < b.name) return -1;
                if(a.name > b.name) return 1;
                return 0;
            });
        }
        this.setState({
            sort: sort,
            items: result,
            profile: this.state.items[0]
        });
    }

    sortAge() {
        let sort = '';
        let result = [];
        if(this.state.sort == 'age-asc') {
            sort = 'age-desc';
            result = this.state.items.sort(function(a, b){
                if(a.age > b.age) return -1;
                if(a.age < b.age) return 1;
                return 0;
            });
        } else {
            sort = 'age-asc';
            result = this.state.items.sort(function(a, b){
                if(a.age < b.age) return -1;
                if(a.age > b.age) return 1;
                return 0;
            });
        }
        this.setState({
            sort: sort,
            items: result,
            profile: this.state.items[0]
        });
    }

    updateData() {
        let curVal = document.getElementById('searchInput').value;
        let newItems = this.search(curVal, this.state.itemsInitial);
        this.setState({ search: curVal, items:newItems, profile: newItems[0] });
    }

    search(subject, objects) {
        var matches = [];
        for (var i = 0; i < objects.length; i++) {
            if( objects[i].hasOwnProperty('name') && objects[i]['name'].indexOf(subject) > -1 )
                matches.push(objects[i]);
        }
        return matches;
    }

    setActive(index) {
        this.setState({
            profile: this.state.items[index]
        });
    }

  render() {
    return (
      <div className="container app">

        <div className="col-sm-12 row">
            <UserSearch search={this.state.search} update={this.updateData.bind(this)}  />
        </div>

        <div className="col-sm-12 row">
            <UserFilter sortName={this.sortName.bind(this)} sortAge={this.sortAge.bind(this)} />
        </div>
        <div className="clearfix"></div>

        <br />

        <div className="row">
            <UserProfile profile={this.state.profile} />
            <UserData items={this.state.items} change={this.setActive.bind(this)} />
        </div>

      </div>
    );
  }
}
