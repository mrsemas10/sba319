const React = require('react');
const DefaultLayout = require('../layout/Default');

class Index extends React.Component {
    render () {
        const { pop } = this.props;

        return (
            <DefaultLayout title = {'Music Page'}>
                <nav>
                    <a href='/pop/new'>Create a New Artist/Song</a>
                </nav>
                <ul>
                    {pop.map((popM, i) => {
                        return (
                            <li>
                                The Artist {' '}
                                <a href={`/pop/${popM._id}`}>
                                {popM.artist}
                                </a>
                                {' '}
                                sings {popM.song} <br/>
                                {popM.favorite ? `It is my favorite` : `It is NOT my favorite`}
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