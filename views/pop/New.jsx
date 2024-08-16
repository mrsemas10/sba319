const React = require('react');
const DefaultLayout = require('../layout/Default')

class New extends React.Component {
    render () {
        return (
            <DefaultLayout title={'Add a New Artist/Song'}>
                {/* NOTE: action will be the route, method will be the HTTP verb */}
                <form action='/pop' method="POST">
                    Artist: <input type="text" name="artist" /><br />
                    Song: < input type="text" name="song"/> <br />
                    Is My Favorite: <input type="checkbox" name="favorite"/> <br />
                    <input type="submit" name="" value="Create Artist"/>
                </form>
            </DefaultLayout>
        )
    }
}

module.exports = New;