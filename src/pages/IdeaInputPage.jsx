import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

/*-----------------------------------------------
アイデアを入力するページ
-----------------------------------------------*/

export const IdeaInputPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [idea, setIdea] = useState('');
    const { state } = location || {};
    
    const handleFeedBack = () => {
        navigate('/feedback', { state: { idea, criteria: state?.criteria} });
    };

    return (
      <div className="container">
        <section className="section">
            <h3>議題</h3>
                {state.topic}
            <h3>評価軸</h3>
            <ul>
            {state?.criteria?.length > 0 ? (
                state.criteria.map((criterion, index) => <li key={index}>{criterion}</li>)
            ) : (
                <li>評価軸がありません</li>
            )}
            </ul>
        </section>
        <h3>アイデア</h3>
        
        <textarea
            placeholder="アイデアを入力してください" 
            className="ideatextarea"
            value={idea}
            onChange={(e) => setIdea(e.target.value)}
        />

        <div className="button-container">
            <button className="button" onClick={handleFeedBack}>アイデアを提出</button>
        </div>
        

      </div>
    );
};


export default IdeaInputPage;