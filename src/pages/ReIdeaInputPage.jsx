import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

/*-----------------------------------------------
アイデアを再入力するページ
-----------------------------------------------*/

export const ReIdeaInputPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [reidea, setReIdea] = useState('');
    // const { state } = location || {};
    
    const handleResult = () => {
        navigate('/result');
    };

    return (
        <div className="container">
        <section className="section">
            {/* ５段階評価の部分はガワしかできていない */}
            <h3>評価軸に基づく定量評価</h3>
            <div class="label">独自性</div>
            <div class="slider-container">
                <div class="slider-circle"><div class="slider-number">1</div></div>
                <div class="slider-circle"><div class="slider-number">2</div></div>
                <div class="slider-circle"><div class="slider-number">3</div></div>
                <div class="slider-circle active"><div class="slider-number">4</div></div>
                <div class="slider-circle"><div class="slider-number">5</div></div>
            </div>
            <div class="label">新規性</div>
            <div class="slider-container">
                <div class="slider-circle"><div class="slider-number">1</div></div>
                <div class="slider-circle"><div class="slider-number">2</div></div>
                <div class="slider-circle active"><div class="slider-number">3</div></div>
                <div class="slider-circle"><div class="slider-number">4</div></div>
                <div class="slider-circle"><div class="slider-number">5</div></div>
            </div>
            <h3>フィードバックの要約</h3>
            （例）まず、AIによる食品識別と賞味期限推定の精度向上が不可欠です。そのためには、多種多様な食品と、それらの様々な保存状態に対応できるよう、AIに学習させるデータを大幅に拡充する必要があります。

        </section>
        <h3>アイデア</h3>
        
        <textarea 
            placeholder="アイデアを入力してください" 
            className="ideatextarea"
            value={reidea}
            onChange={(e) => setReIdea(e.target.value)}
        />

        <div className="button-container">
            <button className="button" onClick={handleResult}>アイデアを提出</button>
        </div>
        

        </div>
    );
};

export default ReIdeaInputPage;