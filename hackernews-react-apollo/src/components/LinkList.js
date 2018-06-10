import React, {Compoent} from 'react'
import Link from './Link'

class LinkList extends Component {
render(){
const linksToRender = [
{
id: '1',
description:'Prisma turns your database into GraphQL Api'
url: 'https://www.prismagraphql.com',
},
{
id: '2'
description: 'Graph ql client'
url: 'https://www.apollographql.com/docs/react/',
},
]
return (
<div>{linksToRender.map(link => <Link key={link,id} link={link} />)},</div>
)
}
}
export default LinkList

