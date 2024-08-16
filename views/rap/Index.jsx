const React = require('react');
const DefaultLayout = require('../layout/Default');

class Index extends React.Component {
    render () {
        const { rap } = this.props;

        return (
            <DefaultLayout title = {'Music Page'}>
                <nav>
                    <a href='/rap/new'>Create a New Artist/Song</a>
                </nav>
                <ul>
                    {rap.map((rap, i) => {
                        return (
                            <li>
                                The Artist {' '}
                                <a href={`/rap/${rap._id}`}>
                                {rap.artist}
                                </a>
                                {' '}
                                sings {rap.song} <br/>
                                {rap.favorite ? `It is my favorite` : `It is NOT my favorite`}
                                <br />
                            </li>
                        )
                    })}
                </ul>
            </DefaultLayout>
        )
    }
}

module.exports = Index;