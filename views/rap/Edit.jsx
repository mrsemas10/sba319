const React = require('react');
const DefaultLayout = require('../layout/Default.jsx')

class Edit extends React.Component{
  render() {
    return (
      <DefaultLayout title="Edit Page">      
      <form action={`/rap/${this.props.rapMusic._id}?_method=PUT`} method="POST">
          Artist: <input type="text" name="artist" defaultValue={this.props.rapMusic.artist}/><br/>
          Song: <input type="text" name="song"  defaultValue={this.props.rapMusic.song}/><br/>
          Is My Favorite:
              { this.props.rapMusic.favorite? <input type="checkbox" name="favorite" defaultChecked />: <input type="checkbox" name="favorite"/> }
          <br/> 
          <input type="submit" value="Submit Changes"/>
      </form>
      </DefaultLayout>
    )
  }
}
module.exports= Edit;