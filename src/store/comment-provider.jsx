// src/store/comment-context.js

import React, { createContext, useContext, useState } from 'react';

const CommentContext = createContext();

export const useComments = () => useContext(CommentContext);

// Dummy comments: 5 per post for 11 posts
const initialComments = {
  "1": ["He’s lucky to have you 💜", "Short but sweet.", "Pure love energy.", "Wholesome stuff!", "Made me smile."],
  "2": ["Relatable in ways I wish it wasn’t.", "You're not alone in feeling this.", "Being invisible hurts. We see you.", "Sometimes crowds feel lonelier than solitude.", "Check in with yourself. You matter.", "Sending hugs, stranger.", "College can be isolating.", "We’re walking the same halls.", "You described this perfectly.", "You're not invisible to us 💙"],
  "3": ["Ghosting is cruel.", "You deserved closure.", "Healing takes time ❤️", "Been there. Hurts so much.", "Delete his number (or don't).", "That first heartbreak hits the hardest.", "You'll love again, trust me.", "What a jerk.", "Hope you’re doing better now.", "One day this won’t hurt."],
  "4": ["This is so soft 🥹", "Library romance energy!", "Say hi next time!", "Silent love hits different.", "Same table every day, still no courage 😭", "I hope she notices you.", "Rom-com level introvert vibes.", "Wholesome and heartbreaking.", "Shoot your shot someday!", "This made me smile."],
  "5": ["You’re lucky to have them.", "True love in silence.", "Roommates like this are rare.", "Tell them you appreciate it 💙", "That’s deep connection without words.", "I’d cry just reading this.", "Please give them a hug for us.", "Respect the quiet comfort.", "Unspoken bonds hit hard.", "Wholesome overload."],
  "6": ["This felt real.", "Journals hold the truth.", "You’re not alone in this.", "Stop faking. Start healing.", "Thank you for writing this.", "I've felt this exact way.", "Please talk to someone.", "It’s okay to not be okay.", "Be gentle with yourself.", "Invisible battles are still valid."],
  "7": ["You’re the cutest chalk bandit 😂", "This is peak wholesome.", "She probably knows. 😉", "We need a part 2!", "Rom-com setup alert 🚨", "Love this bold-soft move!", "Hope she finds out someday.", "Risk-free romance 😂", "Secret admirer vibes 💕", "What a sweet gesture!"],
  "8": ["That one smile can change your day.", "He knew. He saw you.", "Being seen matters so much.", "This felt warm.", "Simple, but powerful.", "Your presence matters.", "That’s a core memory right there.", "Sometimes, it’s all we need.", "Sending you more moments like that.", "You deserve many smiles."],
  "9": ["That's a love story waiting to happen.", "Protect that stranger at all costs.", "This is how Wattpad novels start 😂", "Why is this romantic af?", "Hope you meet him again!", "Random kindness = best kind.", "Soaked and smitten is a vibe.", "This gave me butterflies.", "Fate? Maybe.", "Campus romance starter pack."],
  "10": ["Ouch. Felt this in my soul.", "2AM thoughts hit the hardest.", "Wish we could redo some things.", "Cried to this ngl.", "You’re not alone in this pain.", "Some wounds echo at night.", "Write it down. Let it out.", "The silence screams sometimes.", "May tomorrow feel lighter.", "This was hauntingly relatable."],
  "11": ["So real 😭", "We don't talk enough about post-grad anxiety.", "You don’t have to figure it out today.", "You’ve come far. That’s enough for now.", "Take a breath. You’re doing great.", "It’s scary, but also exciting.", "Not alone in this feeling.", "Future-you is rooting for you.", "It’s okay to be unsure.", "Start small. Keep going."],
  "12": ["Orientation sparks that never get closure 😭", "Could’ve been a love story.", "We all have a 'what if'.", "Should’ve asked for her IG 😩", "Write her a letter, even if you never send it.", "Some people just pass through.", "You'll cross paths again—maybe.", "Part of me still hopes you meet again.", "Life is weird like that.", "I felt this so much."],
  "13": ["Okay but this is adorable.", "Cereal aisle meet-cute?! I'm crying.", "Go back. Maybe she will too.", "This feels like a Netflix short.", "You panic, I relate 😂", "The universe gave you a chance 👀", "Hope she remembers too!", "Crunchy love story.", "This made my heart smile.", "We need a follow-up!"],
  "14": ["We all feel like frauds sometimes.", "This hit HARD.", "You're not alone.", "Just because you doubt yourself doesn’t mean you’re wrong.", "You belong here.", "Nobody has it figured out.", "Even the smartest feel this way.", "Hang in there 💪", "Realest post today.", "Imposter syndrome is a liar."],
  "15": ["Give her a treat from me!", "Cats just know, don’t they?", "Purring > therapy sometimes.", "Furry emotional support ❤️", "You’re lucky to have her.", "She loves you in her own way.", "Best kind of therapist.", "Cats make everything softer.", "This made me tear up ngl.", "Wholesome overload."],
  "16": ["Lab crushes hit different.", "I can hear the dramatic music playing 😂", "That smile is gonna live rent-free in your head.", "We need more chemistry puns.", "Let’s mix solutions... and emotions 👀", "This is so nerdy cute.", "Love in the lab ❤️", "Hope he felt the spark too!", "Rom-com level intro.", "Smiles in goggles = lethal combo."],
  "17": ["It hurts not knowing what could’ve been.", "Closure is hard without goodbyes.", "Hope you heal from this.", "She probably remembers you too.", "Some love stories don’t get to start.", "Maybe it wasn’t meant to be.", "Still, it was real for you.", "Brave to share this.", "Letting go is a process.", "This hit close."],
  "18": ["You are not alone in that seat.", "Sending you warmth and a hug.", "You held it in as long as you could.", "Been there. It's okay.", "Sometimes, we break quietly.", "Lecture halls see more pain than we admit.", "Strength isn't always loud.", "Glad you let it out.", "Hope someone saw you. And cared.", "This is a powerful post."],
  "19": ["That stranger deserves a halo.", "The quiet heroes of campus.", "I want to be that person.", "Compassion without words ❤️", "Faith in humanity: restored.", "Made me cry ngl.", "You were lucky in that moment.", "There are angels among us.", "Beautiful memory.", "Hope you pay it forward someday."],
  "20": ["I know *exactly* who you mean.", "Their music heals.", "The soundtrack to our sadness 🥺", "Thank you to that mystery pianist!", "Always makes my night better.", "We should leave them a thank-you note.", "Campus magic at 10PM.", "I’ve cried to their melodies.", "Late-night art is special.", "They deserve a recital!"],
  "21": ["Been there. Still hurts.", "Hope fades slowly, doesn't it?", "You’re worth more than silence.", "Let them go. You deserve peace.", "You're not alone in this wait.", "You matter, even without their message.", "Sometimes they never do. And that’s okay.", "You’ll stop checking one day.", "They missed out on you.", "Closure is a lie."]
}


export const CommentProvider = ({ children }) => {
  const [comments, setComments] = useState(initialComments);

  const addComment = (postId, text) => {
    setComments(prev => ({
      ...prev,
      [postId]: [...(prev[postId] || []), text],
    }));
  };

  const deleteComment = (postId, index) => {
    setComments(prev => ({
      ...prev,
      [postId]: prev[postId].filter((_, i) => i !== index),
    }));
  };

  return (
    <CommentContext.Provider value={{ comments, addComment, deleteComment }}>
      {children}
    </CommentContext.Provider>
  );
};
