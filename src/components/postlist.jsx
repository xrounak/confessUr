import Card from './card';
import { useContext } from 'react';
import { Postlistcontext } from '../store/post-list-provider';

 const Postlist = () => {
    const { postlist } = useContext(Postlistcontext);
    console.log(postlist);

    return (
        <div> 
            {postlist.map((post) => (
                <Card key={post.id} post={post} userkey={post.userkey} reactions={post.reactions} title={post.title} body={post.body} tags={post.tags}/>
            ))}      
        </div>
    );
};

export default Postlist;

