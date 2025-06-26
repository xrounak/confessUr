import Card from './card';
import { useContext } from 'react';
import { Postlistcontext } from '../store/post-list-provider';

 const Postlist = ({ onpostclick }) => {
    const { postlist,deletePost } = useContext(Postlistcontext);

    return (
        <div> 
            {postlist.map((post) => (
                <Card 
                key={post.id} 
                userkey={post.userkey} 
                reactions={post.reactions} 
                title={post.title} 
                body={post.body} 
                tags={post.tags}
                onClick={() => {
                    onpostclick(post.id)
                    console.log(post.id);
                    }
                    
                }
                onDelete={() => deletePost(post.id)}

                
                />
            ))}      
        </div>
    );
};

export default Postlist;

