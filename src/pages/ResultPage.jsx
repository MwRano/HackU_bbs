import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

/*-----------------------------------------------
最終結果を表示するページ
-----------------------------------------------*/

export const ResultPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    // const [reidea, setReIdea] = useState('');
    // const { state } = location || {};
    
    const handleResult = () => {
        navigate('/');
    };

    return (
        <div className="container">
        <section className="section">
            <h3>最も評価の高いアイデア</h3>
            （例）冷蔵庫内の食品をAIが写真から識別し、賞味期限を推定します。ユーザーの好みやアレルギー情報に基づき、最適なレシピを提案し、賞味期限の通知や在庫管理、買い物リストの作成も行います。
            さらに、鮮度センサーとの連携で食品管理の精度を高め、ユーザー同士がレシピや食材情報を共有できるコミュニティ機能も搭載します。AIの精度向上とレシピのパーソナライズ、そしてセキュリティ対策を重視し、食品ロス削減と日々の料理を支援します。
            <h3>フィードバックの要約</h3>
            （例）まず、AIによる食品識別と賞味期限推定の精度向上が不可欠です。そのためには、多種多様な食品と、それらの様々な保存状態に対応できるよう、AIに学習させるデータを大幅に拡充する必要があります。

        </section>
    
        <div className="button-container">
            <button className="button" onClick={handleResult}>ホームに戻る</button>
        </div>
        

        </div>
    );
}

export default ResultPage;