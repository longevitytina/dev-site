import React, { useState } from 'react';
import './voting-bars.css';
/**
 * Voting Component with Percentage Bars
✅ Prompt:
Build a voting interface where users can vote for one of two options (e.g., "Cats" vs "Dogs").
When a vote is cast, update the total and show percentage bars reflecting the results.
The active choice should be visually highlighted.

🧱 Requirements:
Two buttons: “Vote Cat” and “Vote Dog”
When user clicks, set their vote and increase the count
Display total vote count
Display horizontal bars showing percent for each option
Highlight the option the user picked
 */

export default function VotingBars() {
  const [votes, setVotes] = useState({ cat: 0, dog: 0 });
  const [userVotes, setUserVotes] = useState(null);

  const totalVotes = votes.cat + votes.dog;
  const percentageCat =
    totalVotes === 0 ? 0 : Math.round(votes.cat / totalVotes*100);
  const percentageDog =
    totalVotes === 0 ? 0 : Math.round(votes.dog/totalVotes *100);

  const handleVote = (option: 'cat' | 'dog') => {
    // if(userVotes) return;
    //setUserVote(option)
    setVotes((prev) => ({ ...prev, [option]: prev[option] + 1 }));
  };

  return (
    <div className='vote-wrapper'>
      <div className='button-wrapper'>
        <button
          className='button'
          onClick={() => {
            handleVote('cat');
          }}
        >
          Vote cat
        </button>
        <button
          className='button'
          onClick={() => {
            handleVote('dog');
          }}
        >
          Vote Dog
        </button>
      </div>
      <div className='total-votes'>Total votes: {totalVotes}</div>
      <div className='bar-row'>
        <span className='option-label'>Cat</span>
        <div className='bar' style={{width: `${percentageCat}%`}}>{percentageCat}%</div>
      </div>
      <div className='bar-row'>
        <span className='option-label'>Dog</span>
        <div className='bar' style={{width: `${percentageDog}%`}}>{percentageDog}%</div>
      </div>
    </div>
  );
}
