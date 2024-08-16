const React = require('react');
const DefaultLayout = require('../layout/Default');

class Show extends React.Component {
    render () {
        const popMusic = this.props.popMusic;

        return (
            <DefaultLayout title='Show an Individual Artist'>
                <p>The artist {popMusic.artist} sings {popMusic.song} </p>
                {popMusic.favorite ? 'It is my favorite' : 'NOT a fav'}
                <br />
                <a href={`/pop/${popMusic._id}/edit`}>Edit this Artist</a>
                <form action={`/pop/${popMusic._id}?_method=DELETE`} method = "POST">
                    <input type="submit" value="DELETE"/>
                </form>
                <a href='/pop'>Back to Index</a>
            </DefaultLayout>
        )
    }
}

module.exports = Show;