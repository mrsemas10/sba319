const React = require('react');
const DefaultLayout = require('../layout/Default');

class Show extends React.Component {
    render () {
        const rapMusic = this.props.rapMusic;

        return (
            <DefaultLayout title='Show an Individual Artist'>
                <p>The artist {rapMusic.artist} sings {rapMusic.song} </p>
                {rapMusic.favorite ? 'It is my favorite' : 'NOT a fav'}
                <br />
                <a href={`/rap/${rapMusic._id}/edit`}>Edit this Artist</a>
                <form action={`/rap/${rapMusic._id}?_method=DELETE`} method = "POST">
                    <input type="submit" value="DELETE"/>
                </form>
                <a href='/rap'>Back to Index</a>
            </DefaultLayout>
        )
    }
}

module.exports = Show;