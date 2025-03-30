import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

/*-----------------------------------------------
議題と評価軸の入力ページ
-----------------------------------------------*/

const Home = () => {
  const navigate = useNavigate();
  const [topic, setTopic] = useState('');
  const [criteriaInput, setCriteriaInput] = useState('');
  const [criteria, setCriteria] = useState([]);

  const handleAddCriteria = () => {
    if (criteria.length < 5 && criteriaInput.trim() !== '') {
      setCriteria([...criteria, criteriaInput]);
      setCriteriaInput('');
    } else if (criteria.length >= 5) {
      alert('評価軸は最大5つまで追加できます。');
    }
  };

  const handleRemoveCriteria = (index) => {
    const newCriteria = criteria.filter((_, i) => i !== index);
    setCriteria(newCriteria);
  };

  const handleStartSession = () => {
    navigate('/ideainput', { state: { topic, criteria } });
  };

  return (
    <div className="container">
        <section className="section">
            <h3>議題</h3>
            <textarea
              placeholder="議題を入力してください" 
              className="ideatextarea"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
            />

            <h3>評価軸</h3>
            <input 
              type="text" 
              placeholder="評価軸を入力してください" 
              className="textarea"
              value={criteriaInput}
              onChange={(e) => setCriteriaInput(e.target.value)}
            />
            <button className="button" onClick={handleAddCriteria}>追加</button>
            {criteria.length > 0 && (
              <ul>
                {criteria.map((criterion, index) => (
                  <li key={index}>
                    {criterion}
                    <button 
                      className="remove-button" 
                      onClick={() => handleRemoveCriteria(index)}
                    >
                      ×
                    </button>
                  </li>
                ))}
              </ul>
            )}
        </section>
        
        <div className="button-container">
            <button className="button" onClick={handleStartSession}>セッションを開始</button>
        </div>
    </div>
  );
};

// export const IdeaInputPage = () => {
//     const location = useLocation();
//     const navigate = useNavigate();
//     const [idea, setIdea] = useState('');
//     const { state } = location || {};
    
//     const handleFeedBack = () => {
//         navigate('/feedback', { state: { idea, criteria: state?.criteria} });
//     };

//     return (
//       <div className="container">
//         <section className="section">
//             <h3>議題</h3>
//                 {state.topic}
//             <h3>評価軸</h3>
//             <ul>
//             {state?.criteria?.length > 0 ? (
//                 state.criteria.map((criterion, index) => <li key={index}>{criterion}</li>)
//             ) : (
//                 <li>評価軸がありません</li>
//             )}
//             </ul>
//         </section>
//         <h3>アイデア</h3>
        
//         <textarea
//             placeholder="アイデアを入力してください" 
//             className="ideatextarea"
//             value={idea}
//             onChange={(e) => setIdea(e.target.value)}
//         />

//         <div className="button-container">
//             <button className="button" onClick={handleFeedBack}>アイデアを提出</button>
//         </div>
        

//       </div>
//     );
// };

// export const FeedBackPage = () => {
//     const location = useLocation();
//     const navigate = useNavigate();
//     const [feedback, setFeedBack] = useState('');
//     const { state } = location || {};
    
//     const handleFeedBack = () => {
//         navigate('/reideainput', { state: { feedback } });
//     };

//     return (
//       <div className="container">
//         <section className="section">
//             <h3>提出されたアイデア</h3>
//             冷蔵庫内の食品を写真で撮影すると、AIが食品を識別し、賞味期限を推定。期限が近づくと通知し、食材を活用したレシピを提案します。

//             <h3>評価軸</h3>
//             <ul>
//             {state?.criteria?.length > 0 ? (
//                 state.criteria.map((criterion, index) => <li key={index}>{criterion}</li>)
//             ) : (
//                 <li>評価軸がありません</li>
//             )}
//             </ul>
//         </section>
//         <h3>フィードバック</h3>
        
//         <textarea 
//             placeholder="フィードバックを入力してください" 
//             className="ideatextarea"
//             value={feedback}
//             onChange={(e) => setFeedBack(e.target.value)}
//         />

//         <div className="button-container">
//             <button className="button" onClick={handleFeedBack}>フィードバックを提出</button>
//         </div>
        

//       </div>
//     );
// };

// export const ReIdeaInputPage = () => {
//     const location = useLocation();
//     const navigate = useNavigate();
//     const [reidea, setReIdea] = useState('');
//     // const { state } = location || {};
    
//     const handleResult = () => {
//         navigate('/result');
//     };

//     return (
//         <div className="container">
//         <section className="section">
//             <h3>評価軸に基づく定量評価</h3>
//             <div class="label">独自性</div>
//             <div class="slider-container">
//                 <div class="slider-circle"><div class="slider-number">1</div></div>
//                 <div class="slider-circle"><div class="slider-number">2</div></div>
//                 <div class="slider-circle"><div class="slider-number">3</div></div>
//                 <div class="slider-circle active"><div class="slider-number">4</div></div>
//                 <div class="slider-circle"><div class="slider-number">5</div></div>
//             </div>
//             <div class="label">新規性</div>
//             <div class="slider-container">
//                 <div class="slider-circle"><div class="slider-number">1</div></div>
//                 <div class="slider-circle"><div class="slider-number">2</div></div>
//                 <div class="slider-circle active"><div class="slider-number">3</div></div>
//                 <div class="slider-circle"><div class="slider-number">4</div></div>
//                 <div class="slider-circle"><div class="slider-number">5</div></div>
//             </div>
//             <h3>フィードバックの要約</h3>
//             まず、AIによる食品識別と賞味期限推定の精度向上が不可欠です。そのためには、多種多様な食品と、それらの様々な保存状態に対応できるよう、AIに学習させるデータを大幅に拡充する必要があります。

//         </section>
//         <h3>アイデア</h3>
        
//         <textarea 
//             placeholder="アイデアを入力してください" 
//             className="ideatextarea"
//             value={reidea}
//             onChange={(e) => setReIdea(e.target.value)}
//         />

//         <div className="button-container">
//             <button className="button" onClick={handleResult}>アイデアを提出</button>
//         </div>
        

//         </div>
//     );
// }

// export const ResultPage = () => {
//     const location = useLocation();
//     const navigate = useNavigate();
//     // const [reidea, setReIdea] = useState('');
//     // const { state } = location || {};
    
//     const handleResult = () => {
//         navigate('/');
//     };

//     return (
//         <div className="container">
//         <section className="section">
//             <h3>最も評価の高いアイデア</h3>
//             冷蔵庫内の食品をAIが写真から識別し、賞味期限を推定します。ユーザーの好みやアレルギー情報に基づき、最適なレシピを提案し、賞味期限の通知や在庫管理、買い物リストの作成も行います。
//             さらに、鮮度センサーとの連携で食品管理の精度を高め、ユーザー同士がレシピや食材情報を共有できるコミュニティ機能も搭載します。AIの精度向上とレシピのパーソナライズ、そしてセキュリティ対策を重視し、食品ロス削減と日々の料理を支援します。
//             <h3>フィードバックの要約</h3>
//             まず、AIによる食品識別と賞味期限推定の精度向上が不可欠です。そのためには、多種多様な食品と、それらの様々な保存状態に対応できるよう、AIに学習させるデータを大幅に拡充する必要があります。

//         </section>
    
//         <div className="button-container">
//             <button className="button" onClick={handleResult}>ホームに戻る</button>
//         </div>
        

//         </div>
//     );
// }
export default Home;
