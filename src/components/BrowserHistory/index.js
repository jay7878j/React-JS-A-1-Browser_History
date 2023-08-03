import {Component} from 'react'
import HistoryListItem from '../HistoryListItem'

const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

class BrowserHistory extends Component {
  state = {searchInput: '', historyList: initialHistoryList}

  onDeleteHistory = id => {
    const {historyList} = this.state
    const filterList = historyList.filter(each => each.id !== id)
    this.setState({historyList: filterList})
  }

  onUserSearch = event => {
    this.setState({searchInput: event.target.value})
  }

  getHistory = searchList => (
    <ul className="history-app-card-container">
      {searchList.map(each => (
        <HistoryListItem
          item={each}
          key={each.id}
          onDeleteHistory={this.onDeleteHistory}
        />
      ))}
    </ul>
  )

  getNoResults = () => (
    <div className="no-results-container">
      <p>There is no history to show</p>
    </div>
  )

  render() {
    const {searchInput, historyList} = this.state
    const searchList = historyList.filter(each =>
      each.title.toLowerCase().includes(searchInput.toLowerCase()),
    )
    const isHistroyList = searchList.length !== 0

    return (
      <div>
        <div className="header-section">
          <img
            className="history-logo"
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
          />
          <div className="search-container">
            <button type="button" className="" onClick={this.onSearchIconClick}>
              <img
                className="search-Icon"
                src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                alt="search"
              />
            </button>
            <input
              type="search"
              className="search-bar"
              onChange={this.onUserSearch}
              placeholder="Search history"
              value={searchInput}
            />
          </div>
        </div>
        {isHistroyList ? this.getHistory(searchList) : this.getNoResults()}
      </div>
    )
  }
}

export default BrowserHistory
