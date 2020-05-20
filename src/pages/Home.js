import React from 'react';
import UserList from '../components/UserList';
import PostList from '../components/PostList'
import UserAddForm from '../components/UserAddForm';
import Navbar from '../components/Navbar';
import '../App.css';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {changeFontAction, changeBackgroundAction} from '../redux/actions/color';

class HomeApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      usersAux: [],
      posts: [],
      postsAux: []
    };
  }

  componentDidMount() {
    const salary = [100,200,300];
    const image = ['https://media.bizj.us/view/img/11093751/stuartrobertson-hs-3x4*220xx900-1200-0-0.jpg','https://sites.google.com/site/nanobiomedlab/_/rsrc/1426504919969/people/3x4%20130.jpg', 'https://i.pinimg.com/originals/98/0c/31/980c3163ea21757d55b4b5a87d6229f3.jpg'];
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
        this.setState({usersAux: data});
      })
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        return response.json();
      })
      .then((jsonPosts) => {
        const filteredPosts = jsonPosts.filter((post) => post.id < 3);
        this.setState({posts: filteredPosts})
        this.setState({postsAux: filteredPosts})
      })
  }

/*   changeColor(event) {
    this.setState({background: event.target.value});
  }
  changeFontColor(event) {
    this.setState({fontColor: event.target.value});
  } */


  changePosts(event){
    if (event.target.value === 'posts')
      this.setState({users: null});
      this.setState(prevState => {
        return {
          posts: [...prevState.postsAux]
        }
      });
  }

  changeUsers(event) {
    if (event.target.value === 'users')
      this.setState({posts: null});
      this.setState(prevState => {
        return {
          users: [...prevState.usersAux]
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

    const {fontColorInjected, backgroundInjected, changeFontActionInjected, changeBackgroundActionInjected} = this.props;

    return(

      <div>
          <div className="App" style={{background: backgroundInjected, color: fontColorInjected}}>
            <h1>Admin panel - Proiectul 1</h1>
            <Navbar>
              <Link to='/'>Home</Link>
              <Link to='/about'>About</Link>
            </Navbar>
            <UserAddForm submitAddForm={(event, name, email, isGoldClient) => this.submitAddForm(event, name, email, isGoldClient)}/>
            <UserList users={this.state.users} deleteUserItem={(event, id) => this.deleteUserItem(event, id)}/>
              { 
                    this.state.users == null
                      ? <PostList posts={this.state.posts}/>
                      : null
              }
              <input type="color" onChange={(event) => changeBackgroundActionInjected({background: event.target.value})}/>
              <input type="color" onChange={(event) => changeFontActionInjected({fontColor: event.target.value})}/> <br />
              <button className="btn btn-primary" value="users" onClick={(event) => this.changeUsers(event)}> Afiseaza utilizatorii </button>
              <button className="btn btn-primary" value="posts" onClick={(event) => this.changePosts(event)}> Afiseaza postarile </button>     
            </div>
      </div>
    );
  }
}
//abonare la store -> cand se modifica state-ul, pagina "home" va fi anuntata
function mapStateToProps(state){
  //console.log(state.fontColor);
  return {
    fontColorInjected: state.fontColor,
    backgroundInjected: state.background
  }
}

//modificare store -> cand se executa aceste functii -> "state-ul" va fi modificat(se executa functiile din "actions" si se trimis catre "reducers" prin dispatch)
//cand se apasa pe buton se va executa una din functii -> se alege tipul modificarii(CHANGE_FONT_COLOR) si datele ce vor fi modificate(fontColor: blue) si se trimit catre "reducers"
function mapDispatchToProps(dispatch){
  return{
    changeFontActionInjected: (payload) => dispatch(changeFontAction(payload)),
    changeBackgroundActionInjected: (payload) => dispatch(changeBackgroundAction(payload)) 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeApp);
