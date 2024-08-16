const React = require('react');
const DefaultLayout = require('../layout/Default.jsx')

class Edit extends React.Component{
  render() {
    return (
      <DefaultLayout title="Edit Page">      
     {/* See the Layout takes in a prop called Title and we pass Edit Page to it  note: comments can't go first or last in  jsx return*/}
          {/* form is not complete we will do that below*/}
      <form action={`/pop/${this.props.popMusic._id}?_method=PUT`} method="POST">
          Artist: <input type="text" name="artist" defaultValue={this.props.popMusic.artist}/><br/>
          Song: <input type="text" name="song"  defaultValue={this.props.popMusic.song}/><br/>
          Is My Favorite:
              { this.props.popMusic.favorite? <input type="checkbox" name="favorite" defaultChecked />: <input type="checkbox" name="favorite"/> }
          <br/>
          <input type="submit" value="Submit Changes"/>
      </form>
      </DefaultLayout>
    )
  }
}
module.exports= Edit;