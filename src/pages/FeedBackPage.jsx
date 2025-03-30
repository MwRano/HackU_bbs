import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

/*-----------------------------------------------
フィードバックを入力するページ
-----------------------------------------------*/

export const FeedBackPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [feedback, setFeedBack] = useState('');
    const { state } = location || {};
    
    const handleFeedBack = () => {
        navigate('/reideainput', { state: { feedback } });
    };

    return (
      <div className="container">
        <section className="section">
            <h3>提出されたアイデア</h3>
            （例）冷蔵庫内の食品を写真で撮影すると、AIが食品を識別し、賞味期限を推定。期限が近づくと通知し、食材を活用したレシピを提案します。

            <h3>評価軸</h3>
            <ul>
            {state?.criteria?.length > 0 ? (
                state.criteria.map((criterion, index) => <li key={index}>{criterion}</li>)
            ) : (
                <li>評価軸がありません</li>
            )}
            </ul>
        </section>
        <h3>フィードバック</h3>
        
        <textarea 
            placeholder="フィードバックを入力してください" 
            className="ideatextarea"
            value={feedback}
            onChange={(e) => setFeedBack(e.target.value)}
        />

        <div className="button-container">
            <button className="button" onClick={handleFeedBack}>フィードバックを提出</button>
        </div>
        

      </div>
    );
};

export default FeedBackPage;