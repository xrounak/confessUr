import { createContext, useReducer } from "react";

export const Postlistcontext = createContext({
  postlist: [],
  addPost: () => {},
  deletePost: () => {},
});

const postlistReducer = (currentPostList, action) => {
  switch (action.type) {
    case "DELETE_POST":
      return currentPostList.filter((post) => post.id !== action.payload);

    case "ADD_POST":
      const newPostWithId = {
        ...action.payload,
        id: (Math.random() * 100000).toFixed(0), // Generate random ID
        reactions: 0,
        userkey: "anonymous",
      };
      return [newPostWithId, ...currentPostList];

    default:
      return currentPostList;
  }
};

const PostListProvider = ({ children }) => {
  const [postlist, dispatchPostList] = useReducer(
    postlistReducer,
    DEFAULT_POST_LIST
  );

  const addPost = (newPost) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: newPost,
    });
  };

  const deletePost = (id) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: id,
    });
  };

  return (
    <Postlistcontext.Provider value={{ postlist, addPost, deletePost }}>
      {children}
    </Postlistcontext.Provider>
  );
};
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
    title: "Lost in the crowd",
    body: "I walk through campus feeling invisible. I smile, but inside I’m drowning.",
    reactions: "5",
    userkey: "invisiguy",
    tags: ["mental health", "college"],
  },
  {
    id: "3",
    title: "My first heartbreak",
    body: "He said he loved me, then ghosted me after a month. I still check his last seen.",
    reactions: "9",
    userkey: "shattered",
    tags: ["breakup", "pain"],
  },
  {
    id: "4",
    title: "Silent crush",
    body: "We study in the same library spot. I've never spoken a word, but I think about her all the time.",
    reactions: "12",
    userkey: "libraryghost",
    tags: ["crush", "college"],
  },
  {
    id: "5",
    title: "Dorm room therapist",
    body: "My roommate always listens to me cry but never says a word. I think that's love.",
    reactions: "16",
    userkey: "gratefulheart",
    tags: ["roommate", "love", "support"],
  },
  {
    id: "6",
    title: "Living two lives",
    body: "My friends think I'm happy. My journal knows the truth.",
    reactions: "10",
    userkey: "twosides",
    tags: ["mental health", "truth"],
  },
  {
    id: "7",
    title: "Confession in chalk",
    body: "I wrote 'I like you' on her whiteboard when she was out. She smiled the next day. I never told her it was me.",
    reactions: "23",
    userkey: "chalkheart",
    tags: ["confession", "crush"],
  },
  {
    id: "8",
    title: "The professor smiled at me",
    body: "It was just a moment. But in that moment, I felt seen.",
    reactions: "6",
    userkey: "quietone",
    tags: ["college", "emotion"],
  },
  {
    id: "9",
    title: "Rainy day rescue",
    body: "He shared his umbrella with me in the rain. I don’t even know his name.",
    reactions: "14",
    userkey: "soakedandsmitten",
    tags: ["random act", "crush"],
  },
  {
    id: "10",
    title: "Late night regrets",
    body: "Every night at 2AM, I replay the things I never said. It hurts more than I admit.",
    reactions: "17",
    userkey: "nightsoul",
    tags: ["regret", "emotions"],
  },
  {
    id: "11",
    title: "Graduation blues",
    body: "Everyone's celebrating. I'm terrified. I don’t know what comes next.",
    reactions: "11",
    userkey: "soonexstudent",
    tags: ["college", "fear"],
  },
  {
    id: "12",
    title: "Missed connections",
    body: "We talked for hours during orientation. I never saw her again. Still think about her sometimes.",
    reactions: "13",
    userkey: "whatifguy",
    tags: ["missed chance", "college"],
  },
  {
    id: "13",
    title: "Grocery aisle love",
    body: "We reached for the same cereal. You smiled. I panicked and left. Still wondering what could’ve been.",
    reactions: "15",
    userkey: "breakfastregret",
    tags: ["strangers", "crush"],
  },
  {
    id: "14",
    title: "Imposter syndrome is real",
    body: "Everyone seems so sure of themselves. I feel like I’m faking it all.",
    reactions: "20",
    userkey: "notgoodenough",
    tags: ["college", "insecurity"],
  },
  {
    id: "15",
    title: "My cat is my therapist",
    body: "She just curls up next to me when I cry. I owe her more than she’ll ever know.",
    reactions: "27",
    userkey: "meowhealer",
    tags: ["pets", "mental health"],
  },
  {
    id: "16",
    title: "He smiled at me in the lab",
    body: "We were both in gloves and goggles. It still felt like a rom-com moment.",
    reactions: "8",
    userkey: "chemistryinlab",
    tags: ["crush", "college"],
  },
  {
    id: "17",
    title: "Wish I told her sooner",
    body: "She moved to another city. I never confessed my feelings. I hope she’s happy.",
    reactions: "22",
    userkey: "almostlove",
    tags: ["loss", "regret"],
  },
  {
    id: "18",
    title: "Cried in the lecture hall",
    body: "Sat in the back. No one noticed. I’m both glad and sad.",
    reactions: "18",
    userkey: "lonelyseat",
    tags: ["mental health", "college"],
  },
  {
    id: "19",
    title: "Library angel",
    body: "I was overwhelmed, and she handed me tissues without a word. Thank you, stranger.",
    reactions: "19",
    userkey: "gratefulmind",
    tags: ["kindness", "strangers"],
  },
  {
    id: "20",
    title: "Late night piano",
    body: "Whoever plays piano in the rec hall after 10PM—you soothe my soul.",
    reactions: "24",
    userkey: "silentfan",
    tags: ["music", "admiration"],
  },
  {
    id: "21",
    title: "Still waiting",
    body: "He said he’d text after the party. It’s been three weeks. I check my phone anyway.",
    reactions: "21",
    userkey: "ghostedagain",
    tags: ["dating", "heartbreak"],
  },
];

export default PostListProvider;
