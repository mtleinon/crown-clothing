import React from 'react'
import CollectionItem from './CollectionItem';
import './CollectionPreview.scss';
import {useHistory} from 'react-router-dom';

export default function CollectionPreview({collection}) {
  const history = useHistory ();
  console.debug('history =', history, collection.linkUrl);
  console.debug('collection =', collection);
  const linkToCollection = history.location.pathname + '/' + collection.routeName;
  return (
    <div className="collection-preview">
      <h1 className="title" onClick={()=>history.push(linkToCollection)} >{collection.title.toUpperCase()}</h1>
      <div className="preview">
        {collection.items.slice(0,4).map(item=>(<CollectionItem key={item.id} item={item}/>))}
      </div>
    </div>
  )
}
