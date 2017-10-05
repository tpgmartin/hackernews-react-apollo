import React, { Component } from 'react'
import { graphql, gql } from 'react-apollo'
import Link from './Link'

class LinkList extends Component {

  render() {

    if (this.props.allLinksQuery && this.props.allLinksQuery.loading) {
      return <div>Loading</div>
    }

    if (this.props.allLinksQuery && this.props.allLinksQuery.error) {
      return <div>Error</div>
    }

    const linksToRender = this.props.allLinksQuery.allLinks

    return (
      <div>
        {linksToRender.map(link => (
          <Link key={link.id} link={link}/>
        ))}
      </div>
    )
  }

}

// Create constant to store query
// Operation name is `AllLinksQuery`
// gql parses the plain GraphQL code
const ALL_LINKS_QUERY = gql`
  query AllLinksQuery {
    allLinks {
      id
      createdAt
      url
      description
    }
  }
`

// Use graphql container to combine the LinkList component with the ALL_LINKS_QUERY
// `allLinksQuery` is the name of the prop that Apollo injects into the `LinkList` component
// (by default the prop would be called data)
export default graphql(ALL_LINKS_QUERY, { name: 'allLinksQuery' }) (LinkList)