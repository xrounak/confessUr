import { createContext, useReducer } from "react"

export const Postlistcontext = createContext({
    postlist: [],
    addPost: ()=>{},
    deletePost: ()=>{},
});

const postlistReducer = (currentPostList, action) => {
    return currentPostList
}

const PostListProvider = ({children}) => {
    const [postlist, dispatchPostList] = useReducer(postlistReducer, DEFAULT_POST_LIST);

    const addPost = () => {};

    const deletePost = () => {};

    return(
        <Postlistcontext.Provider value={{postlist, addPost, deletePost}}>
        {children}
        </Postlistcontext.Provider>
    );
}
const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "hello love",
    body: "He is my love",
    reactions: "3",
    userkey: "qwerty",
    tags: ["love", "confessions"],
  },
  {
    id: "2",
    title: "I miss her",
    body: "We sat next to each other all semester. I never said a word. She's gone now, and I keep replaying the chances I missed.",
    reactions: "8",
    userkey: "anon123",
    tags: ["regret", "college life"],
  },
  {
    id: "3",
    title: "Library crush",
    body: "To the girl who wears oversized hoodies in the 3rd floor reading area—I think you’re beautiful.",
    reactions: "15",
    userkey: "studiousguy",
    tags: ["crush", "college", "love"],
  },
  {
    id: "4",
    title: "Group project pain",
    body: "I did 90% of the group project. They added one meme slide and called it a day. I’m tired.",
    reactions: "21",
    userkey: "burntout123",
    tags: ["rant", "college", "group work"],
  },
  {
    id: "5",
    title: "Still not over him",
    body: "It’s been two years and I still check his Instagram like a fool.",
    reactions: "12",
    userkey: "ghosted_19",
    tags: ["breakup", "emotions", "confessions"],
  },
  {
    id: "6",
    title: "Secret talent",
    body: "I sing alone in the music room at night. No one knows. It’s the only time I feel seen.",
    reactions: "6",
    userkey: "hiddenvoice",
    tags: ["secret", "music", "confessions"],
  },
  {
    id: "7",
    title: "My roommate is a saint",
    body: "They’ve seen me cry, clean up my messes, and always bring snacks when I’m down. I never say thank you enough.",
    reactions: "18",
    userkey: "gratefulgal",
    tags: ["roommate", "gratitude"],
  },
  {
    id: "8",
    title: "Fell for my TA",
    body: "He explains calculus like poetry. I think I attend discussions just to hear him speak.",
    reactions: "25",
    userkey: "mathcrush",
    tags: ["crush", "confession", "college"],
  },
  {
    id: "9",
    title: "Mental health is real",
    body: "I smiled through classes and parties, but I was breaking. I’m finally getting help. To anyone struggling—you're not alone.",
    reactions: "34",
    userkey: "healingnow",
    tags: ["mental health", "support"],
  },
  {
    id: "10",
    title: "First love, final goodbye",
    body: "She held my hand through freshman year, but we outgrew each other. We ended it with a long walk under orange streetlights.",
    reactions: "19",
    userkey: "softheart",
    tags: ["first love", "breakup"],
  },
  {
    id: "11",
    title: "To the guy with the guitar",
    body: "You don’t know me, but I hear you play near the dorms every night. It makes the world feel soft again.",
    reactions: "13",
    userkey: "nightwalker",
    tags: ["admiration", "music", "confession"],
  }
];


export default PostListProvider;
