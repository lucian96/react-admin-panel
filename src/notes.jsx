import React from 'react';
import UserList from './components/UserList';
import PostList from './components/PostList'
import UserAddForm from './components/UserAddForm';
import './App.css';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      background: '#000000',
      fontColor: '#ffffff',
      users: [],
      posts: [],
    };
  }

  componentDidMount() {

    const salary = [100,200,300];
    const image = ['https://via.placeholder.com/600/771796','https://via.placeholder.com/600/24f355', 'https://via.placeholder.com/600/f66b97'];

    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        data = data.filter(user => user.id < 4);
        data.forEach(user => {
          user.isGoldClient = false;
          user.salary = salary[user.id-1];
          user.image = image[user.id-1];
        });
        this.setState({users: data});
      })
  }

  changeColor(event) {
    this.setState({background: event.target.value});
  }
  changeFontColor(event) {
    this.setState({fontColor: event.target.value});
  }


  changePosts(event){
      //console.log(event.target.value)
      //console.log(this.state.posts)
      if (event.target.value === 'posts') {

        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
          return response.json();
        })
        .then((jsonPosts) => {
          const filteredPosts = jsonPosts.filter((post) => post.id < 3);
          this.setState({posts: filteredPosts})
          //console.log(this.state.posts)
          
        })
      }
    }

  changeUsers(event) {
    if (event.target.value === 'users')
      this.setState(prevState => {
        return {
          users: [...prevState.users]
        }
      });
  }

  getMaxId(users) {
    let maxId = 0;

    users.forEach(user => {
      if (user.id > maxId) {
        maxId = user.id;
      }
    });

    return maxId;
  }


  submitAddForm(event, name, email, isGoldClient) {
    event.preventDefault();
    if (name !== "" && email.includes('@') && email.includes('.')){
      this.setState(prevState => {
        return {
          users: [
            ...prevState.users, 
            {
              id: this.getMaxId(prevState.users) + 1,
              name,
              email,
              isGoldClient
            }
          ]
        }
      });
    }
    else {
      return (
        <div>
          Error
        </div>
      )
    }
  }


  deleteUserItem(event, id){
    event.preventDefault();
    const initialUsers = this.state.users;
    this.state.users.splice(id-1, 1)
    this.setState({users: initialUsers})
    var i = 0;
    this.state.users.forEach(user => {
      i += 1;
      return user.id = i;
    })
  }

  render() {
    return(

      <div className="app" style={{background: this.state.background, color: this.state.fontColor}}>
        <h1>Admin panel - Proiectul 1</h1>
        <UserAddForm submitAddForm={(event, name, email, isGoldClient) => this.submitAddForm(event, name, email, isGoldClient)}/>
        <UserList users={this.state.users} deleteUserItem={(event, id) => this.deleteUserItem(event, id)}/>
        { 
              this.state.users == null
                ? <PostList posts={this.state.posts}/>
                : null
          }
        <input type="color" onChange={(event) => this.changeColor(event)}/>
        <input type="color" onChange={(event) => this.changeFontColor(event)}/> <br />
        <button value="users" onClick={(event) => this.changeUsers(event)}> Afiseaza utilizatorii </button>
        <button value="posts" onClick={(event) => this.changePosts(event)}> Afiseaza postarile </button>
      </div>
    );
  }
}

export default App;
